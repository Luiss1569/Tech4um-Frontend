import React, { useEffect } from "react";
import { SendOutlined, UserOutlined } from "@ant-design/icons";
import { Avatar, Spin } from "antd";
import { useDispatch, useSelector } from "react-redux";

import * as Styled from "./styles";

import { sendMessage } from "../../../../store/room/action";

import { setPrivateMessage } from "../../../../store/application/action";

const colors = [
  "#1772B2",
  "#EADE70",
  "#7BB88C",
  "#1799F6",
  "#8F175F",
  "#F6A817",
];

function MessagesListComponent() {
  const dispatch = useDispatch();

  const [message, setMessage] = React.useState("");

  const activeRoom = useSelector((state) => state.application.activeRoom);
  const messagePrivate = useSelector(
    (state) => state.application.privateMessage
  );
  const room = useSelector((state) => state.forum.room?.[activeRoom]);
  const status = useSelector((state) => state.forum.status.sendMessage);

  const contentRef = React.useRef(null);

  function handleCancelMessagePrivate() {
    dispatch(setPrivateMessage(null));
  }

  React.useEffect(() => {
    if (contentRef.current) {
      contentRef.current.scrollTop = contentRef.current.scrollHeight;
    }
  }, [room?.messages]);

  const handleSendMessage = (e) => {
    e.preventDefault();
    if (message.trim() === "") return;

    dispatch(sendMessage(activeRoom, message, messagePrivate?.id));
  };

  useEffect(() => {
    if (status.success) {
      setMessage("");
    }
  }, [status.success]);

  if (!room) return null;
  return (
    <Styled.Container>
      <Styled.Header>
        <h5>{room.name}</h5>
        <div>
          <h6>Criado por:</h6>
          <h6>{room.by.name}</h6>
        </div>
      </Styled.Header>

      <Styled.Content ref={contentRef}>
        {room.messages.map((message, index) => (
          <Styled.Message key={message.timestamp}>
            <Styled.MessageHeader>
              <Avatar
                style={{ backgroundColor: colors[index % 6] }}
                icon={<UserOutlined />}
              />
              <h5>{message.user.name}</h5>
              {message.to && <h6>mensagem privada</h6>}
            </Styled.MessageHeader>
            <Styled.MessageContent>
              <p>{message.message}</p>
            </Styled.MessageContent>
          </Styled.Message>
        ))}
      </Styled.Content>

      <Styled.Footer isMessagePrivate={!!messagePrivate}>
        {!messagePrivate ? (
          <span>Enviando para todos do {room.name}</span>
        ) : (
          <p>
            <span>Enviando para {messagePrivate.name}</span>
            <span onClick={handleCancelMessagePrivate}>
              Cancelar envio de mensagem privada
            </span>
          </p>
        )}

        <Styled.InputContent>
          <form onSubmit={handleSendMessage}>
            <Styled.Input
              value={message}
              onChange={(e) => setMessage(e.target.value)}
              placeholder="Escreva aqui uma mensagem maneira para mandar para os colegas..."
            />
            <Styled.SendButton
              htmlType="submit"
              disabled={status.loading}
              isMessagePrivate={!!messagePrivate}
            >
              {status.loading ? <Spin /> : <SendOutlined />}
            </Styled.SendButton>
          </form>
        </Styled.InputContent>
      </Styled.Footer>
    </Styled.Container>
  );
}

export default MessagesListComponent;
