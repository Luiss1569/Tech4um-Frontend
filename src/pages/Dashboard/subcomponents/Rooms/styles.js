import styled from "styled-components";

export const Container = styled.div`
  display: grid;
  grid-gap: 20px;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(4, 1fr);
  width: 90%;
  margin: 0 auto;
  height: 100%;
  padding: 10px;
  column-gap: 30px;
  row-gap: 30px;
  column-count: auto;
`;
