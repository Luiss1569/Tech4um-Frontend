import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  width: 90%;
  margin: 0 auto;
  height: 100%;
  padding: 10px;
  border-bottom: 1px solid #e6e6e6;

  div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: end;
    gap: 10px;

    p {
      font-weight: lighter;
      color: ${(props) => props.theme.colors.text54};
    }
  }
`;

export const Logo = styled.img`
  width: 70px;
`;

export const Login = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: end;
  gap: 10px;
  margin-right: 10px;
  margin-top: 12px;
  cursor: pointer;
  p {
    font-weight: lighter;
    color: ${(props) => props.theme.colors.text54};
  }
`;

export const User = styled.div`
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

  div {
    display: flex;
    flex-direction: column;
    gap:0px;
    align-items: flex-start;
  }
`;