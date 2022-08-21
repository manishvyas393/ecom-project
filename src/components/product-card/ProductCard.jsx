import "./productcard.scss"
import React from 'react'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button"
import { addItemToCart } from "../../store/cart/cart.action"
import { useDispatch, useSelector } from "react-redux"
import { selectCartItems } from "../../store/cart/cart.selectors"
const ProductCard = ({ product }) => {
     const dispatch=useDispatch()
      const { id, name, price, imageUrl } = product
      const cartItems=useSelector(selectCartItems)
      const addProductToCart=()=>dispatch(addItemToCart(cartItems,product))
      return (
            <div className="product-card-container" key={id}>
                  <img src={imageUrl} alt={name} />
                  <div className="footer">
                        <span className="name">{name}</span>
                        <span className="price">{price}</span>
                  </div>
                  <Button buttonType={BUTTON_TYPE_CLASSES.inverted} onClick={addProductToCart}>Add to cart</Button>
            </div>
      )
}
export default ProductCard