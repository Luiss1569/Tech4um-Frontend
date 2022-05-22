import Avatar from "../../../../components/common/Avatar";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { Tooltip } from "antd";

import * as Styled from "./styles";
import { setPrivateMessage } from "../../../../store/application/action";

function UsersListComponent() {
  const dispatch = useDispatch();

  const activeRoom = useSelector((state) => state.application.activeRoom);
  const users = useSelector((state) => state.forum.room?.[activeRoom]?.users);

  const user = useSelector((state) => state.user.data);

  function handlePrivateMessage(toUser) {
    if (user.id === toUser.id) return;
    dispatch(setPrivateMessage(toUser));
  }

  return (
    <Styled.Container>
      <Styled.Header>
        <h5>Participantes</h5>
      </Styled.Header>
      <Styled.Body>
        {users?.map((user) => (
          <Tooltip title={`Enviar mensagem para ${user.name}`} placement="left">
            <Styled.User
              key={user.id}
              onClick={() => handlePrivateMessage(user)}
            >
              <Avatar>{user.name}</Avatar>
              <h6>{user.name}</h6>
            </Styled.User>
          </Tooltip>
        ))}
      </Styled.Body>
    </Styled.Container>
  );
}

export default UsersListComponent;
