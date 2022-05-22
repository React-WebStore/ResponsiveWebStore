import styled from "styled-components";
import { ItemContainer } from "./Components/Item/styles";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  overflow: hidden;
`;

export const Row = styled.div`
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: auto 0;
  overflow: scroll;
  ${ItemContainer} {
    max-height: 30rem;
    max-width: 30rem;
  }
`;

export const Column = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  overflow: scroll;
`;
