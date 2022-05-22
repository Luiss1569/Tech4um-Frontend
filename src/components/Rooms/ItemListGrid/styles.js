import styled from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled(Link)`
  display: flex;
  flex-direction: column;
  width: 100%;
  border-radius: 30px;
  background-color: #fff;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);
  padding: 33px !important;
  grid-area: ${(props) => props.gridArea};
  transition: ease-in 0.2s;
  &:hover {
    transform: scale(1.02);
    cursor: pointer;
  }
`;

export const Header = styled.div`
  display: flex;
  border-radius: 5px;
  padding: 10px;

  h2 {
    color: ${(props) => props.theme.colors.primaryDark};
    font-weight: bold;
  }
`;

export const Body = styled.div`
  display: flex;
  width: 100%;
  height: 100%;
  border-radius: 5px;
  padding: 10px;
  margin-top: 20px;

  p {
    font-weight: 400;
    color: ${(props) => props.theme.colors.text54};
  }
`;

export const Footer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  div {
    display: flex;
    justify-content: start;
    align-items: center;
    border-radius: 5px;
    padding: 10px;
    gap: 5px;
    margin-top: 20px;
    h4:nth-child(1) {
      font-weight: 400;
    }
  }

  div:nth-child(2) {
    background-color: ${(props) => props.theme.colors.primaryDark};
    border-radius: 100%;
    padding: 10px;
    aspect-ratio: 1;
  }
`;

export const SpotLight = styled.h3`
  color: ${(props) => props.theme.colors.secondary};
`;
