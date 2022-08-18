import {CartIconContainer,ItemCount } from "./carticon.styles.jsx"
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg"
import { useContext } from "react"
import { CartContext } from "../../contexts/cart.context"
const CartIcon = () => {
      const { isCartOpen, setIsCartOpen, cartCount } = useContext(CartContext)
      const toogleCartIcon = () => setIsCartOpen(!isCartOpen)
      return (
            <CartIconContainer onClick={toogleCartIcon}>
                  <ShoppingIcon className="shopping-icon" />
                  <ItemCount>{cartCount}</ItemCount>
            </CartIconContainer>
      )
}

export default CartIcon