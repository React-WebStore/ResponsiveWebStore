import styled from 'styled-components'

export const Modal = styled.div`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background: rgba(0, 0, 0, 0.5);
  z-index: 1;
`

export const ProductContainer = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  min-width: 15rem;
  min-height: 15rem;
  padding: 2rem 0rem;
  max-height: 75%;
  max-width: 90%;
  background: white;
`

export const TextBox = styled.div`
  display: flex;
  margin-top: auto;
  justify-content: space-around;
  align-items: center;
`

export const Remove = styled.div`
  position: absolute;
  top: 0.2rem;
  right: 0.2rem;
  background-image: url('https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/icone-x-avec-cercle-noir.png?alt=media&token=96526706-1ae7-4a3f-99db-4553f54567cc');
  background-size: contain;
  width: 20px;
  height: 20px;
  cursor: pointer;
`
