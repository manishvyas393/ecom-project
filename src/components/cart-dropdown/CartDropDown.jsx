import React, { useContext } from 'react'
import { CartItems, EmptyMessage,CartDropdownContainer } from "./cartdropdown.styles.jsx"
import Button from "../button/button"
import CartItem from '../cart-item/CartItem'
import { CartContext } from '../../contexts/cart.context'
import { useNavigate } from "react-router-dom";
const CartDropDown = () => {
      const { cartItems } = useContext(CartContext)
      const navigate = useNavigate()
      const goToCheckOutHandler = () => {
            navigate("/checkout")
      }
      return (
            <CartDropdownContainer>
                  <CartItems>
                        {
                              cartItems.length ?
                                    cartItems.map(item => (
                                          <CartItem cartItem={item} key={item.id} />
                                    )) : (
                                          <EmptyMessage>Your cart is empty</EmptyMessage>
                                    )
                        }
                  </CartItems>
                  <Button onClick={goToCheckOutHandler}>CHECKOUT</Button>
            </CartDropdownContainer>
      )
}

export default CartDropDown