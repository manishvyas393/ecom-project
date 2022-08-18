import "./productcard.scss"
import React,{useContext} from 'react'
import Button, { BUTTON_TYPE_CLASSES } from "../button/button"
import { CartContext } from "../../contexts/cart.context"
const ProductCard = ({ product }) => {
      const {addItemsToCart}=useContext(CartContext)
      const { id, name, price, imageUrl } = product
      const addProductToCart=()=>addItemsToCart(product)
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