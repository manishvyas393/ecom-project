import { createContext, useReducer } from "react"
import { createAction } from "../utils/reducer/reducer.util"
const addCartItem = (cartItems, productToAdd) => {
      const itemExists = cartItems.find((cartItem) => cartItem.id === productToAdd.id)
      if (itemExists) {
            return cartItems.map((cartItem) => cartItem.id === productToAdd.id ? { ...cartItem, quantity: cartItem.quantity + 1 } : cartItem)
      }
      return [...cartItems, { ...productToAdd, quantity: 1 }]
}
const deleteItemFromCart = (cartItems, productToRemove) => {
      const itemExists = cartItems.find((cartItem) => cartItem.id === productToRemove.id)
      if (itemExists.quantity === 1) {
            return cartItems.filter(cartItem => cartItem.id !== productToRemove.id)
      }
      return cartItems.map((cartItem) => cartItem.id === productToRemove.id ? { ...cartItem, quantity: cartItem.quantity - 1 } : cartItem)
}
const clearProductFromCart = (cartItems, product) => {
      return cartItems.filter(cartItem => cartItem.id !== product.id)
}
export const CartContext = createContext({
      isCartOpen: false,
      setIsCartOpen: () => { },
      cartItems: [],
      addItemsToCart: () => { },
      removeItemsToCart: () => { },
      clearItemsToCart: () => { },
      cartCount: 0,
      total: 0
})
const INITIAL_STATE = {
      isCartOpen: false,
      cartItems: [],
      cartCount: 0,
      total: 0
}
const CART_DISPATCH_ACTIONS = {
      SET_CART_ITEMS: "SET_CART_ITEMS",
      SET_IS_CART_OPEN:"SET_IS_CART_OPEN"
}
const cartReducer = (state, action) => {
      const { type, payload } = action;
      switch (type) {
            case CART_DISPATCH_ACTIONS.SET_CART_ITEMS:
                  return {
                        ...state,
                        ...payload
                  }
            case CART_DISPATCH_ACTIONS.SET_IS_CART_OPEN:
                  return {
                        ...state,
                        isCartOpen: payload
                  }
            default:
                  throw new Error(`unhandled type of ${type} in cartReducer`)
      }
}
export const CartProvider = ({ children }) => {
      const [{ cartItems, isCartOpen, cartCount, total }, dispatch] = useReducer(cartReducer, INITIAL_STATE)
      const updateCartItems = (newCartItems) => {
            const newCount = newCartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
            const newTotal = newCartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
            dispatch(createAction(CART_DISPATCH_ACTIONS.SET_CART_ITEMS, {
                  cartItems: newCartItems,
                  cartCount: newCount,
                  total: newTotal
            }))    
      }
      const addItemsToCart = (productToAdd) => {
            const newCartItems = addCartItem(cartItems, productToAdd)
            updateCartItems(newCartItems)
      }

      const removeItemsToCart = (productToRemove) => {
            const newCartItems = deleteItemFromCart(cartItems, productToRemove)
            updateCartItems(newCartItems)
      }

      const clearItemsToCart = (productToRemove) => {
            const newCartItems = clearProductFromCart(cartItems, productToRemove)
            updateCartItems(newCartItems)
      }
      const setIsCartOpen = (bool) => {
            dispatch(createAction(CART_DISPATCH_ACTIONS.SET_IS_CART_OPEN,bool ))
      }
      const value = { isCartOpen, addItemsToCart, setIsCartOpen, cartItems, cartCount, total, removeItemsToCart, clearItemsToCart }
      return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}