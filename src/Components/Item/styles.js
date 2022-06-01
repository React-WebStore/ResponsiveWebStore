import styled from "styled-components";

export const ItemContainer = styled.div`
  display: flex;
  flex-direction: column;
  box-shadow: 3px 3px 7px gray;
`;

export const TextBox = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

export const Image = styled.img`
  min-height: 10rem;
  min-width: 10rem;
  margin: 0.5rem;
`;

export const AddToCart = styled.div`
  width: 50px;
  height: 25px;
  background-image: url("addToCart.png");
  background-size: contain;
  background-repeat: no-repeat;
  background-position: center;
  cursor: pointer;
`;
