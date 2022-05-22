import React, { memo } from "react";
import * as Styled from "./styles";

import Logo from "../../assets/logo.png";
import { useDispatch, useSelector } from "react-redux";

import Avatar from "../common/Avatar";
import { Popover, Button } from "antd";

import { logoutUser } from "../../store/user/action";

import { setLoginModal } from "../../store/application/action";

function Navbar() {
  const user = useSelector((state) => state.user.data);

  const dispatch = useDispatch();

  function handleLogout() {
    dispatch(logoutUser());
  }

  const content = (
    <Button type="dashed" danger onClick={handleLogout}>
      Logout
    </Button>
  );

  return (
    <Styled.Container>
      <div>
        <Styled.Logo src={Logo} alt="tech4um" />
        <p>Seu fórum sobre tecnologia!</p>
      </div>
      <div>
        {user ? (
          <Styled.User>
            <div>
              <h5>{user.name}</h5>
              <span>{user.email}</span>
            </div>
            <Popover content={content} title="Deseja mesmo fazer logout?">
              <Avatar>{user.name}</Avatar>
            </Popover>
          </Styled.User>
        ) : (
          <Styled.Login onClick={() => dispatch(setLoginModal(true))}>
            <h5>Fazer Login</h5>
            <Avatar />
          </Styled.Login>
        )}
      </div>
    </Styled.Container>
  );
}

export default memo(Navbar);
