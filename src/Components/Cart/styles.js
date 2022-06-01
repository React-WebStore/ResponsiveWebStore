import styled from "styled-components";

export const CartContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: grid;
  background: white;
  max-height: 30rem;
  gap: 1rem;
  padding: 0.7rem;
  border-radius: 0.5rem;
  overflow: scroll;
  box-shadow: 2px 4px 5px black;
`;

export const CartHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  transition: 2s;
`;

export const CartQuantity = styled.div`
  position: absolute;
  background: red;
`;
