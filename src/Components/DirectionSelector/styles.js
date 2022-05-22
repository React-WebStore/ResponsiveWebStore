import styled from "styled-components";

export const Directions = styled.div`
  display: flex;
  position: absolute;
  justify-content: space-around;

  top: 1rem;
  right: 1rem;
  gap: 0.5rem;
`;

export const Direction = styled.img`
  height: 2rem;
  cursor: pointer;
  background: white;
  padding: 0.5rem;
  border-radius: 0.5rem;
  box-shadow: 2px 4px 5px black;
`;
