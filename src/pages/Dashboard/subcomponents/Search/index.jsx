import React, { memo, useEffect, useState } from "react";
import * as Styled from "./styles";

import { Button, Form, Input, Modal } from "../Login/styles";

import { useDispatch, useSelector } from "react-redux";
import { setLoginModal } from "../../../../store/application/action";
import { createRoom } from "../../../../store/room/action";

import { CommentOutlined, FileAddOutlined } from "@ant-design/icons";
import { Spin } from "antd";

function Navbar() {
  const user = useSelector((state) => state.user.data);
  const status = useSelector((state) => state.forum.status.createRoom);

  const [open, setOpen] = useState(false);
  const [forms, setForms] = useState({
    name: "",
    description: "",
  });

  const dispatch = useDispatch();

  function handleCloseModal() {
    setOpen(false);
  }

  function handleSubmit(e) {
    e.preventDefault();

    dispatch(createRoom(forms));
  }

  function handleChange(e) {
    setForms((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  }

  function handleCreateRoom() {
    if (!user) {
      dispatch(setLoginModal(true));
      return;
    }

    setOpen(true);
  }

  useEffect(() => {
    if (status.success) {
      setOpen(false);
    }
  }, [status]);

  return (
    <Styled.Container>
      <div>
        <h2>Opa!</h2>
        <p>Sobre o que gostaria de falar hoje?</p>
      </div>

      <div className="column">
        <Styled.Search
          placeholder="Em busca de uma sala? Encontre-a aqui"
          size="large"
          with
          enterButton
        />
        <Styled.Button type="primary" onClick={handleCreateRoom}>
          <h6>Ou crie seu próprio 4um</h6>
        </Styled.Button>
      </div>

      <Modal
        visible={open}
        onOk={handleCloseModal}
        blank
        onCancel={handleCloseModal}
        footer={null}
      >
        <h3>Bora criar uma sala nova??</h3>
        <h5>Coloque um nome adequado e uma descrição</h5>
        <Form onSubmit={handleSubmit}>
          <Input
            size="large"
            placeholder="Nome da sala"
            required
            type="text"
            name="name"
            onChange={handleChange}
            prefix={<CommentOutlined />}
            value={forms.name}
          />
          <Input
            size="large"
            placeholder="Descrição"
            type="text"
            name="description"
            onChange={handleChange}
            value={forms.description}
            prefix={<FileAddOutlined />}
          />

          {status.loading ? (
            <Spin />
          ) : (
            <Button type="primary" size="large" htmlType="submit">
              <a>Criar</a>
            </Button>
          )}
        </Form>
      </Modal>
    </Styled.Container>
  );
}

export default memo(Navbar);
