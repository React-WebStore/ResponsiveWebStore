import React, { useContext } from 'react'
import { cartState } from '../../Services/cart'
import Quantity from '../Quantity'
import { CartItemContainer, CartText, CartImage, Remove } from './styles'
const CartItem = ({
  title = 'title',
  price = 10,
  quantity = 0,
  uuid,
  img = 'https://firebasestorage.googleapis.com/v0/b/planup-d79a0.appspot.com/o/2016-09-06-what-is-a-product.webp?alt=media&token=f6c25a81-8f09-4401-b274-029baff6b96a'
}) => {
  const store = useContext(cartState)

  const removeFromCart = (uuid) => {
    store.dispatch({ type: 'removeFromCart', payload: uuid })
  }
  return (
    <CartItemContainer>
      <CartImage src={img} alt='item' />
      <Remove onClick={() => removeFromCart(uuid)} />
      <CartText>
        <h1>{title}</h1>
        <h3>${price}</h3>
        <Quantity quantity={quantity} uuid={uuid} />
      </CartText>
    </CartItemContainer>
  )
}

export default CartItem
