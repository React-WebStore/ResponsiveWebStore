import React, { useContext, useEffect, useState } from 'react'
import ImageCarousel from '../_common/ImageCarousel'
import { Modal, ProductContainer, TextBox, Remove } from './styles'
import { contextState } from '../../Services/context'

const ProductModal = ({ modal = {} }) => {
  const [openModal, setOpenModal] = useState(false)
  const { title, price, img } = modal

  console.log('inside productModal', store)
  const outsideClick = (e) => {
    const container = document.getElementById('product-container')
    if (e.target === container) {
      store.dispatch({ type: 'isOpen', payload: false })
    }
  }

  useEffect(() => {
    console.log('i run')
    setOpenModal(store.isOpen)
  }, [store])

  useEffect(() => {
    document.addEventListener('click', (e) => outsideClick(e))

    return document.removeEventListener('click', (e) => outsideClick(e))
  })

  return (
    <Modal id='product-container'>
      <ProductContainer>
        <Remove
          onClick={() => store.dispatch({ type: 'isOpen', payload: false })}
        />
        <ImageCarousel images={[img]} />
        <TextBox>
          <h1>{title}</h1>
          <h3>{price}</h3>
        </TextBox>
      </ProductContainer>
    </Modal>
  )
}

export default ProductModal
