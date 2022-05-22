import {
  Modal as ModalAnt,
  Input as inputAnt,
  Button as ButtonAnt,
} from "antd";
import styled from "styled-components";

export const Modal = styled(ModalAnt)`
  .ant-modal-content {
    width: 400px;
    border-radius: 10px;
    box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
    padding: 20px;
  }
  .ant-modal-close-x {
    color: ${(props) => props.theme.colors.text54};
  }
  .ant-modal-header {
    border-bottom: none;
  }
  .ant-modal-body {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;
    gap: 10px;

    h3 {
      color: ${(props) => props.theme.colors.primary};
    }
  }
  .ant-modal-footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 10px;
  }
  .ant-modal-footer button {
    width: 100px;
    height: 40px;
    border-radius: 10px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.text54};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
      background-color: ${(props) => props.theme.colors.primaryDark};
    }
  }
  .ant-modal-footer button:first-child {
    margin-right: 10px;
  }
`;

export const Input = styled(inputAnt)`
  width: 100%;
  height: 40px;
  border-radius: 10px;
  border: none;
  color: ${(props) => props.theme.colors.text54};
  padding: 0 10px;
  transition: all 0.3s ease-in-out;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  input.ant-input{
    margin-left: 10px;
  }
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  gap: 10px;
`;

export const Button = styled(ButtonAnt)`
    width: 100%;
    height: 40px;
    border-radius: 10px;
    margin-top: 40px;
    background-color: ${(props) => props.theme.colors.primary};
    color: ${(props) => props.theme.colors.background};
    border: none;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    &:hover {
        background-color: ${(props) => props.theme.colors.primaryDark};
    }

    span.ant-input-prefix {
        margin-right: 20px;
    }
`;
