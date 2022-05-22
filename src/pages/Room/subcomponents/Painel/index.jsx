import { ArrowLeftOutlined } from "@ant-design/icons";
import React from "react";
import MessageList from "../MessagesList";
import RoomsList from "../RoomsList";
import UsersList from "../UsersList";

import * as Styled from "./styles";

function PainelComponent() {
  return (
    <Styled.Container>
      <Styled.Header to={"/"}>
        <ArrowLeftOutlined />
        <h5>Voltar para o dashboard</h5>
      </Styled.Header>
      <Styled.Content>
          <UsersList />
          <MessageList />
          <RoomsList />
      </Styled.Content>
    </Styled.Container>
  );
}

export default PainelComponent;
