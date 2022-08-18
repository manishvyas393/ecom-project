import { createContext, useEffect, useState } from "react"
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

export const CartProvider = ({ children }) => {
      const [isCartOpen, setIsCartOpen] = useState(false)
      const [cartItems, setCartItems] = useState([])
      const [cartCount, setCount] = useState(0)
      const [total, setTotal] = useState(0)
      useEffect(() => {
            const newCount = cartItems.reduce((total, cartItem) => total + cartItem.quantity, 0)
            setCount(newCount)
      }, [cartItems])
      useEffect(() => {
            const newTotal = cartItems.reduce((total, cartItem) => total + cartItem.quantity * cartItem.price, 0)
            setTotal(newTotal)
      }, [cartItems])

      const addItemsToCart = (productToAdd) => {
            setCartItems(addCartItem(cartItems, productToAdd))
      }

      const removeItemsToCart = (productToRemove) => {
            setCartItems(deleteItemFromCart(cartItems, productToRemove))
      }

      const clearItemsToCart = (productToRemove) => {
            setCartItems(clearProductFromCart(cartItems, productToRemove))
      }

      const value = { isCartOpen, setIsCartOpen, addItemsToCart, cartItems, cartCount,total, removeItemsToCart, clearItemsToCart }
      return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}