import styled from "styled-components";
import { ItemContainer } from "../Item/styles";

export const Wrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  min-height: 25rem;
  height: ${({ height }) => `${height}rem`};
`;

export const Direction = styled.div`
  ${({ direction }) => {
    return direction === "row"
      ? `{
  display: flex;
  align-items: center;
  gap: 1rem;
  padding: 1rem;
  margin: auto 0;
  overflow: scroll;
  max-width: 100vw;
  ${ItemContainer} {
    max-height: 30rem;
    max-width: 20rem;
  }
}`
      : `{
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  grid-gap: 1rem;
  overflow: scroll;
}`;
  }}
`;
