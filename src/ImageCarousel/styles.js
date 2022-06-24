import styled from 'styled-components'

export const Image = styled.img`
  min-height: 10rem;
  min-width: 10rem;
  max-width: 40rem;
  max-height: 30rem;
  margin: auto 0.5rem;
`

export const Button = styled.button`
  background: none;
  border: none;
  font-weight: bold;
  font-size: 2.5rem;
  color: white;
  cursor: pointer;
  text-shadow: 3px 3px 2px black;
  transition: 0.2s;
  &:active {
    text-shadow: none;
  }
`

export const ImageCouraselContainer = styled.div`
  display: flex;
`
