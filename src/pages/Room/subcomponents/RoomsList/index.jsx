import React from "react";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

import * as Styled from "./styles";

function RoomsListComponent() {
  const activeRoom = useSelector((state) => state.application.activeRoom);
  const roomsList = useSelector((state) => state.forum.rooms);

  const rooms = [...roomsList].sort((a, b) => {
    if (a.id === activeRoom) return -1;
    if (b.id === activeRoom) return 1;
    return 0;
  });

  return (
    <Styled.Container>
      <Styled.Body>
        {rooms?.map((room) => (
          <>
            {room.id === activeRoom ? (
              <Styled.RoomActive key={room.id}>
                <h5>{room.name}</h5>
                <span>{room.numUsers}</span>
              </Styled.RoomActive>
            ) : (
              <Styled.Room key={room.id}>
                <Link to={`/${room.id}/room`}>
                  <h5>{room.name}</h5>
                  <span>{room.numUsers}</span>
                </Link>
              </Styled.Room>
            )}
          </>
        ))}
      </Styled.Body>
    </Styled.Container>
  );
}

export default RoomsListComponent;
