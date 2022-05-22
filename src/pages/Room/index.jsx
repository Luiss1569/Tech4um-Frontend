import React, { useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  addRoom,
  addUser,
  addMessage,
  removeUser,
  removeRoom,
  getRoom,
  getRooms,
} from "../../store/room/action";
import { setActiveRoom } from "../../store/application/action";
import { URL_API } from "../../services/api";
import io from "socket.io-client";

import { useParams } from "react-router-dom";
import Navbar from "../../components/Navbar";
import Painel from "./subcomponents/Painel";

function Room() {
  const dispatch = useDispatch();

  const params = useParams();

  const user = useSelector((state) => state.user.data);
  const activeRoom = useSelector((state) => state.application.activeRoom);

  const socket = useRef(null);

  useEffect(() => {}, [params.roomId]);

  useEffect(() => {
    socket.current && socket.current.emit("leave", params.roomId);
    dispatch(setActiveRoom(params.roomId));

    if (!socket.current && user?.token) {
      socket.current = io(URL_API, {
        auth: {
          token: user.token,
        },
      });
      activeRoom && socket.current.emit("join", params.roomId);

      socket.current.on("new-room", (room) => {
        dispatch(addRoom(room));
      });

      socket.current.on("message", ({ message, roomId }) => {
        dispatch(addMessage(roomId, message));
      });

      socket.current.on("joined", ({ user, roomId }) => {
        dispatch(addUser(roomId, user));
      });

      socket.current.on("left", ({ user, roomId }) => {
        dispatch(removeUser(roomId, user.id));
      });

      socket.current.on("delete-room", (roomId) => {
        dispatch(removeRoom(roomId));
      });
    }

    return () => {
      if (socket.current) {
        socket.current.emit("leave", params.roomId);
        socket.current.disconnect();
        socket.current = null;
        dispatch(setActiveRoom(null));
      }
    };
  }, [user, params.roomId, socket.current]);

  useEffect(() => {
    activeRoom && dispatch(getRoom(activeRoom));
    dispatch(getRooms());
  }, [activeRoom]);

  return (
    <div>
      <Navbar />
      <Painel />
    </div>
  );
}

export default Room;
