import React, { createContext, useState } from 'react'

export const CartContext = createContext()

const CartContextProvider = ({children}) => {

    const [cart, setCart] = useState([])

    const addItem = (item, cantidad) => {
        if (isInCart(item.id)) {
            let pos = cart.findIndex(e => e.id === item.id)
            cart[pos].cantidad += cantidad
        } else {
            setCart([...cart, {...item, cantidad:cantidad}])
        }
    }

    const removeItem = (id) => {
        const products = cart.filter(e => e.id !== id)
        setCart(products)
    }

    const clear = () => {
        setCart([])
    }

    const isInCart = (id) => {
        return cart.some(e => e.id === id)
    }

    const cartTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad, 0)
    }

    const priceTotal = () => {
        return cart.reduce((total, item) => total += item.cantidad * item.precio, 0)
    }

    return (
        <CartContext.Provider value={{cart, addItem, removeItem, clear, cartTotal, priceTotal}}>
            {children}
        </CartContext.Provider>
    )
}

export default CartContextProvider