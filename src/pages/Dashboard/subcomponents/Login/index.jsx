import React, { useEffect } from "react";

import { Spin } from "antd";
import { UserOutlined, MailOutlined } from "@ant-design/icons";

import * as Styled from "./styles";
import { useDispatch, useSelector } from "react-redux";

import { loginUser } from "../../../../store/user/action";

import { setLoginModal } from "../../../../store/application/action";

function Login() {
  const [forms, setForms] = React.useState({
    email: "",
    password: "",
  });

  const status = useSelector((state) => state.user.status);
  const loginModal = useSelector((state) => state.application.loginModal);

  function handleChange(e) {
    setForms((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleCloseModal() {
    dispatch(setLoginModal(false));
  }

  const dispatch = useDispatch();

  function handleSubmit(event) {
    event.preventDefault();

    dispatch(
      loginUser({
        user: {
          name: forms.name,
          email: forms.email,
        },
      })
    );
  }

  useEffect(() => {
    if (status.success) {
      handleCloseModal();
    }
  }, [status]);

  return (
    <Styled.Modal
      visible={loginModal}
      onOk={handleCloseModal}
      onCancel={handleCloseModal}
      footer={null}
    >
      <h3>Que bom ter você aqui!</h3>
      <h5>Para participar de um 4um é necessário fazer login.</h5>
      <Styled.Form onSubmit={handleSubmit}>
        <Styled.Input
          size="large"
          placeholder="Nome"
          prefix={<UserOutlined />}
          required
          type="text"
          name="name"
          onChange={handleChange}
          value={forms.name}
        />
        <Styled.Input
          size="large"
          placeholder="Email"
          prefix={<MailOutlined />}
          required
          type="email"
          name="email"
          onChange={handleChange}
          value={forms.email}
        />

        {status.loading ? (
          <Spin />
        ) : (
          <Styled.Button type="primary" size="large" htmlType="submit">
            <a>Entrar</a>
          </Styled.Button>
        )}
      </Styled.Form>
    </Styled.Modal>
  );
}

export default Login;
