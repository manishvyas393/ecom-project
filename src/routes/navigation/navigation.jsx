import React from 'react'
import {Outlet } from 'react-router-dom'
import { ReactComponent as Logo } from "../../assests/crown.svg"
import CartIcon from '../../components/cart-icon/CartIcon'
import CartDropDown from '../../components/cart-dropdown/CartDropDown'
import { NaviGationContainer, LogoContainer, NavLink, NavLinks } from "./navigation.styles.jsx"
import { selectCurrentUser } from '../../store/user/user.selector'
import { useDispatch, useSelector } from 'react-redux'
import { selectIsCartOpen } from '../../store/cart/cart.selectors'
import { signOutStart } from '../../store/user/user.action'
const Navigation = () => {
      const dispatch=useDispatch()
      const currentUser=useSelector(selectCurrentUser)
      const isCartOpen = useSelector(selectIsCartOpen)
      const signOut=()=>dispatch(signOutStart())
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
                                          <NavLink as='span' onClick={signOut}>
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