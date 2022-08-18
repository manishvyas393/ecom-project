import React, { useContext } from 'react'
import { Link, Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assests/crown.svg"
import { UserContext } from '../../contexts/user.context'
import { CartContext } from '../../contexts/cart.context'
import { signOutUser } from '../../utils/firebase/firebase'
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropDown from '../../components/cart-dropdown/CartDropDown'
import { NaviGationContainer, LogoContainer, NavLink, NavLinks } from "./navigation.styles.jsx"
const Navigation = () => {
      const { currentUser } = useContext(UserContext)
      const { isCartOpen } = useContext(CartContext)
      return (
            <>
                  <NaviGationContainer>
                        <LogoContainer to='/'>
                              <Logo />
                        </LogoContainer>

                        <NavLinks>
                              <NavLink to='/shop'>SHOP</NavLink>
                              {
                                    currentUser ? (
                                          <NavLink as='span' onClick={signOutUser}>
                                                SIGN OUT
                                          </NavLink>
                                    ) :
                                          (
                                                <NavLink to={"/signin"}>SIGN IN</NavLink>

                                          )
                              }
                              <CartIcon />
                        </NavLinks>
                        {isCartOpen && <CartDropDown />}
                  </NaviGationContainer>
                  <Outlet />
            </>
      )
}

export default Navigation