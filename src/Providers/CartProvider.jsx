import React, { useEffect, useState } from 'react';
import { CartContext } from './Contexts';
import { getCart } from '../Utils';

const CartProvider = ({children}) => {
    const [cart, setCart] = useState([]);
    useEffect(()=>{
        // local storage e giye dekhbe kono cart data ache kina
        setCart(getCart());
    }, [])
    return (
        <CartContext.Provider value={{cart, setCart}} >
            {children}
        </CartContext.Provider>
    );
};

export default CartProvider;