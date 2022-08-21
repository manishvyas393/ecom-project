import React from 'react'
import { useSelector } from 'react-redux'
import Button from "../button/button"
import CartItem from '../cart-item/CartItem'
import { CartItems, EmptyMessage, CartDropdownContainer } from "./cartdropdown.styles.jsx"
import { useNavigate } from "react-router-dom";
import { selectCartItems } from '../../store/cart/cart.selectors.js'
const CartDropDown = () => {
      const cartItems  = useSelector(selectCartItems)
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