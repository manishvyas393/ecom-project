import "./checkout.scss"
import React from 'react'
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "../../store/cart/cart.action"
import { selectCartItems } from "../../store/cart/cart.selectors"
import { useDispatch, useSelector } from "react-redux"
const CheckOutItem = ({ cartItem }) => {
      const items=useSelector(selectCartItems)
      const { name, imageUrl, price, quantity } = cartItem
      const dispatch=useDispatch()
      return (
            <div className="checkout-item-container">
                  <div className="image-container">
                        <img src={imageUrl} alt={name} />
                  </div>
                  <span className="name">{name}</span>
                  <span className="quantity">
                        <div className="arrow" onClick={()=>dispatch(removeItemFromCart(items,cartItem))}>
                              &#10094;
                        </div>
                        <span className="value">{quantity}</span>
                        <div className="arrow" onClick={()=>dispatch(addItemToCart(items,cartItem))}>
                              &#10095;
                        </div>
                  </span>
                  <span className="price">{price}</span>
                  <div className="remove-button" onClick={() => dispatch(clearItemFromCart(items,cartItem))}>&#10005;</div>
            </div>
      )
}

export default CheckOutItem