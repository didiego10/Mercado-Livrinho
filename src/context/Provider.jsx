import React, { useState } from 'react'
import propTypes from 'prop-types'
import Appcontext from './AppCOntext';

function Provider({children}) {

    const [products, setProducts] = useState([])
    const [cartItems, setCartItems] = useState([])
    const [loading, setLoading] = useState(true)
    const [isCartVisible, setCardVisible] = useState(false)

    const value = {
        products,
        setProducts,
        loading,
        setLoading,
        cartItems,
        setCartItems,
        isCartVisible,
        setCardVisible
    }

    return ( 
        <Appcontext.Provider value={value}>
            {children}
        </Appcontext.Provider>
     )
}

export default Provider

Provider.prototypes = {
    children: propTypes.any,
}.isRequired