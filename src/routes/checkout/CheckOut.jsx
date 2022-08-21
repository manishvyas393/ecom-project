import "./checkout.scss"
import { useSelector } from "react-redux"
import React from 'react'
import CheckOutItem from "../../components/check-out-item/CheckOutItem"
import { selectCartItems, selectCartTotal } from "../../store/cart/cart.selectors"
import PaymentForm from "../../components/payment-form/PaymentForm"
const CheckOut = () => {
      const cartItems = useSelector(selectCartItems)
      const total = useSelector(selectCartTotal)
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
                  <PaymentForm />
            </div>
      )
}
export default CheckOut