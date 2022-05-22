import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 20%;
`;

export const Header = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  padding: 20px;
  gap: 10px;
  box-shadow: 0px 0px 8px rgba(0, 0, 0, 0.1);
  border-radius: 20px 20px 0px 0px;
  h5 {
    color: ${(props) => props.theme.colors.primary};
  }
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  flex-direction: column;
  box-shadow: 0px 5px 10px 0px rgba(0, 0, 0, 0.2);
  margin-top: 10px;
`;

export const User = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 10px 15px;
  gap: 10px;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  &:hover {
    transform: translateY(-5px);
`;
