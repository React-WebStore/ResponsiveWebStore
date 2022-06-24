import styled from 'styled-components'

export const CartItemContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
`

export const CartImage = styled.img`
  max-width: 10rem;
`

export const CartText = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  font-size: 0.5rem;
`

export const Remove = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/icone-x-avec-cercle-noir.png?alt=media&token=96526706-1ae7-4a3f-99db-4553f54567cc');
  background-size: contain;
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const Quantity = styled.div`
  display: flex;
`
