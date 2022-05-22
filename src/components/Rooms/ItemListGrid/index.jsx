import React from "react";
import { useSelector } from "react-redux";

import * as Styled from "./styles";

const gridArea = [
  "1 / 1 / 3 / 3",
  "1 / 3 / 2 / 5",
  "2 / 3 / 3 / 4",
  "2 / 4 / 3 / 5",
  "3 / 1 / 4 / 3",
  "4 / 1 / 5 / 2",
  "4 / 2 / 5 / 3",
  "3 / 3 / 5 / 5",
];

function ItemRoomsComponent(props) {
  const user = useSelector((props) => props.user.data);

  return (
    <Styled.Container
      gridArea={gridArea[props.index % gridArea.length]}
      to={user ? `/${props.room.id}/room` : ""}
    >
      <Styled.Header>
        {props.spot_light && (
          <Styled.SpotLight>Tópico em destaque!</Styled.SpotLight>
        )}
        <h2>{props.room.name}</h2>
      </Styled.Header>
      <Styled.Body>
        <p>{props.room.description}</p>
      </Styled.Body>

      <Styled.Footer>
        <div>
          <h4>Criado por:</h4>
          <h4>{props.room.by?.name}</h4>
        </div>
        <div>
          <a>+{props.room.numUsers}</a>
        </div>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default ItemRoomsComponent;
