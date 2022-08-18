import "./checkout.scss"
import React, { useContext } from 'react'
import { CartContext } from "../../contexts/cart.context"
import CheckOutItem from "../../components/check-out-item/CheckOutItem"
const CheckOut = () => {
      const { cartItems,total} = useContext(CartContext)
      return (
            <div className="checkout-container">
                  <div className="checkout-header">
                        <div className="header-block">
                              <span>Product</span>
                        </div>
                        <div className="header-block">
                              <span>Description</span>
                        </div>
                        <div className="header-block">
                              <span>Quantity</span>
                        </div>
                        <div className="header-block">
                              <span>Price</span>
                        </div>
                        <div className="header-block">
                              <span>remove</span>
                        </div>
                  </div>
                  {
                        cartItems.map((cartItem) => (
                              <CheckOutItem key={cartItem.id} cartItem={cartItem} />
                        ))
                  }
                  <span className="total">Total:${total}</span>
            </div>
      )
}
export default CheckOut