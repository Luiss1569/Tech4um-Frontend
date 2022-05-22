import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  width: 90%;
  margin: 0 auto;
`;

export const Header = styled(Link)`
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100%;
  height: 100%;
  gap: 10px;
  margin-top: 10px !important;
  h5 {
    font-weight: 400;
  }

  svg {
    color: ${(props) => props.theme.colors.text54};
  }
`;

export const Content = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: start;
  flex-direction: row;
  width: 100%;
  height: 100%;
  gap: 10px;
  margin-top: 25px !important;
`;
