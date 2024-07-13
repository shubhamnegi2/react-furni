import React, { useState } from 'react'
import CartContex from './CartContex'
const cartData = {
    ids: [],
    quantities: []
}
const CartContexProvider = ({ children }) => {
    const [cart, setCart] = useState(cartData)

    return (
        <CartContex.Provider value={{ cart, setCart }}>
            {children}
        </CartContex.Provider>
    )

}
export default CartContexProvider;