import React, { memo, useEffect, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { getRooms, addRoom } from "../../store/room/action";
import { URL_API } from "../../services/api";
import io from "socket.io-client";

import Navbar from "../../components/Navbar";

import Modal from "./subcomponents/Login";
import Search from "./subcomponents/Search";
import Rooms from "./subcomponents/Rooms";

const Dashboard = () => {
  const dispatch = useDispatch();

  const user = useSelector((state) => state.user.data);

  const socket = useRef(null);

  useEffect(() => {
    if (user?.token && !socket.current) {
      socket.current = io(URL_API, {
        auth: {
          token: user.token,
        },
      });

      socket.current.on("new-room", (room) => {
        console.log("new-room", room);
        dispatch(addRoom(room));
      });
    }
    return () => {
      socket.current && socket.current.disconnect();
      socket.current = null;
    };
  }, [user]);

  useEffect(() => {
    dispatch(getRooms());
  }, []);

  return (
    <div>
      <Navbar />
      <Modal title="Login" />
      <Search />
      <Rooms />
    </div>
  );
};

export default memo(Dashboard);
