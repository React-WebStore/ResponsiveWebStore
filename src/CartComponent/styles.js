import styled from 'styled-components'

export const CartContainer = styled.div`
  position: absolute;
  top: 1rem;
  left: 1rem;
  display: grid;
  background: white;
  max-height: ${({ height }) => (height ? `${height * 0.9}rem` : `30rem`)};
  gap: 1rem;
  padding: 0.7rem;
  border-radius: 0.5rem;
  overflow: scroll;
  box-shadow: 2px 4px 5px black;
  z-index: 1;
`

export const CartHeader = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  text-align: center;
  transition: 2s;
`

export const Checkout = styled.button`
  background: black;
  border: none;
  border-radius: 0.5rem;
  color: white;
  font-weight: bold;
  padding: 0.3rem 0.5rem;
  cursor: pointer;
  box-shadow: 1px 1px 2px black;
  transition: 0.5s;

  &:active {
    box-shadow: none;
  }
`
