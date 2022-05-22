import styled from "styled-components";

import { Input as inputAnt, Button as ButtonAnt } from "antd";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 60%;
`;

export const Header = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  border-radius: 20px 20px 0 0;
  padding: 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);

  div {
    display: flex;
    flex-direction: row;
    gap: 8px;
  }

  h5 {
    color: ${(props) => props.theme.colors.primary};
  }

  h6 {
    color: ${(props) => props.theme.colors.primary};
    font-weight: lighter;
  }

  h6:nth-child(2) {
    font-weight: bold;
  }
`;

export const Content = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 5px;
  align-items: start;
  justify-content: flex-start;
  width: 100%;
  padding: 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  flex: 1;
  overflow-y: auto;
  min-height: calc(100vh - 350px);
  max-height: calc(100vh - 350px);
  scroll-behavior: smooth;
  &::-webkit-scrollbar {
    width: 0.5em;
  }
  &::-webkit-scrollbar-track {
    background: none;
  }
  &::-webkit-scrollbar-thumb {
    background: ${(props) => props.theme.colors.primary};
    border-radius: 10px;
  }
`;

export const Message = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: flex-start;
  width: 100%;
  padding: 10px;
`;

export const MessageHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: <center></center>;
  gap: 8px;

  h5 {
    color: ${(props) => props.theme.colors.text54};
    font-weight: 400;
  }

  h5:nth-child(2) {
    font-weight: bold;
    color: ${(props) => props.theme.colors.primary};
  }

  h6{
    color: ${(props) => props.theme.colors.primaryDark};
  }
`;

export const MessageContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 40px;

  p {
    color: ${(props) => props.theme.colors.text54};
    font-weight: 400;
    line-height: 1.5;
    word-break: break-word;
  }
`;

export const MessageText = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin-left: 40px;
  color: ${(props) => props.theme.colors.text54};
  font-size: 14px;
  line-height: 1.5;
`;

export const Footer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: start;
  justify-content: space-between;
  width: 100%;
  flex: 1;
  padding: 20px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 0 0 20px 20px;
  background-color: ${(props) =>
    props.isMessagePrivate
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  color: ${(props) => props.theme.colors.text54};
  font-weight: bold;
  font-size: 14px;
  line-height: 1.5;
  word-break: break-word;
  transition: all 0.3s ease;

  p {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    width: 80%;

    span:nth-child(2) {
      font-weight: lighter;
      transition: all 0.3s ease;
      &:hover {
        cursor: pointer;
        font-weight: bold;
      }
    }
  }

  span {
    color: ${(props) => props.theme.colors.background};
    font-weight: bold;
  }
`;

export const InputContent = styled.div`
  width: 100%;
  margin-top: 20px;
  form {
    display: flex;
    flex-direction: row;
    gap: 2px;
    width: 100%;
    flex: 1;
  }
`;

export const SendButton = styled(ButtonAnt)`
  background-color: ${(props) =>
    props.isMessagePrivate
      ? props.theme.colors.secondaryDark
      : props.theme.colors.primaryDark};
  border-color: ${(props) =>
    props.isMessagePrivate
      ? props.theme.colors.secondary
      : props.theme.colors.primary};
  border-radius: 10px 30px 30px 10px;
  height: 41px;
  box-shadow: none !important;

  &:hover {
    background-color: ${(props) =>
      props.isMessagePrivate
        ? props.theme.colors.secondary
        : props.theme.colors.primary};
    border-color: ${(props) => props.theme.colors.background};
  }
`;

export const Input = styled(inputAnt)`
  width: 100%;
  height: 40px;
  border-radius: 30px 15px 15px 30px;
  border: none;
  color: ${(props) => props.theme.colors.text54};
  padding: 20px;
  transition: all 0.3s ease-in-out;
  &:focus {
    border: 1px solid ${(props) => props.theme.colors.primary};
  }

  input.ant-input {
    margin-left: 10px;
  }
`;
