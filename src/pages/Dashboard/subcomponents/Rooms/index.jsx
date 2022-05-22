import React from "react";
import { useSelector } from "react-redux";

import * as Styled from "./styles";

import RoomItem from "../../../../components/Rooms/ItemListGrid";

function RoomsComponent() {
  const rooms = useSelector((state) => state.forum.rooms);

  return (
    <Styled.Container>
      {rooms.map((room, index) => {
        return <RoomItem key={room.id} room={room} index={index} />;
      })}
    </Styled.Container>
  );
}

export default RoomsComponent;
