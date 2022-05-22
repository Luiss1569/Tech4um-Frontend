import { Link } from "react-router-dom";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: start;
  width: 15%;
`;

export const Body = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  gap: 10px;
  flex-direction: column;
  margin-top: 10px;
`;

export const Room = styled.div`
  display: flex;
  justify-content: center;
  align-items: start;
  width: 100%;
  height: 100%;
  flex-direction: row;
  padding: 16px;
  gap: 10px;
  border-radius: 16px;
  flex-direction: column;
  box-shadow: 0px 0px 10px rgba(0, 0, 0, 0.1);

  h5 {
    color: ${(props) => props.theme.colors.primary};
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }

`;

export const RoomActive = styled(Room)`
  background-color: ${(props) => props.theme.colors.primaryDark};
  h5{
    color: ${(props) => props.theme.colors.background};
  }
  span{
    color: ${(props) => props.theme.colors.background};
  }
`;
