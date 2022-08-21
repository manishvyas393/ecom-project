import { useDispatch, useSelector } from "react-redux"
import { CartIconContainer, ItemCount } from "./carticon.styles.jsx"
import { ReactComponent as ShoppingIcon } from "../../assests/shopping-bag.svg"
import { setIsCartOpen } from "../../store/cart/cart.action.js"
import { selectIsCartOpen, selectCartCount } from "../../store/cart/cart.selectors.js"

const CartIcon = () => {
      const dispatch = useDispatch()
      const isCartOpen = useSelector(selectIsCartOpen);
      const cartCount = useSelector(selectCartCount);
      const toggleIsCartOpen = () => dispatch(setIsCartOpen(!isCartOpen));

      return (
            <CartIconContainer onClick={toggleIsCartOpen}>
                  <ShoppingIcon className="shopping-icon" />
                  <ItemCount>{cartCount}</ItemCount>
            </CartIconContainer>
      )
}

export default CartIcon