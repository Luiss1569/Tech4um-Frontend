import styled from "styled-components";

import {
  Modal as ModalAnt,
  Input as inputAnt,
  Button as ButtonAnt,
} from "antd";

const { Search: SearchAnt } = inputAnt;

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  padding: 10px;
  margin-top: 30px;

  div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: end;
    width: 100%;

    h2 {
      font-weight: lighter;
    }

    p {
      font-weight: bold;
      color: ${(props) => props.theme.colors.text54};
    }
  }

  div:nth-child(2) {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    padding: 10px;
    border-radius: 10px;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    gap: 10px;
  }
`;

export const Search = styled(SearchAnt)`
  width: 100%;
  height: 40px;
  font-size: 16px;
  padding: 0 10px;
  margin-right: 10px;

  .ant-input-search-button {
    background: ${(props) => props.theme.colors.primaryDark};
    border-radius: 0px 10px 10px 0px !important;

    &:hover {
      background: ${(props) => props.theme.colors.primary};
    }
  }

  .ant-input{
    border-radius: 10px 0px 0px 10px !important;
  }

  &:focus {
    outline: none;
    border: 1px solid ${(props) => props.theme.colors.primary};
  }
`;

export const Button = styled(ButtonAnt)`
  height: 40px;
  font-size: 16px;
  padding: 0 50px;
  margin-right: 10px;
  border-radius: 10px;
  background-color: ${(props) => props.theme.colors.primaryDark};
  color: ${(props) => props.theme.colors.text};
  border: none;
  &:hover {
    background-color: ${(props) => props.theme.colors.primary};
  }

  h6 {
    color: ${(props) => props.theme.colors.background};
  }
`;
