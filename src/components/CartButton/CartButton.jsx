import React, { useContext } from 'react'
import { CiShoppingCart } from "react-icons/ci";

import './CartButton.css'
import Appcontext from '../../context/AppCOntext';

function CartButton() {

    const {cartItems, isCartVisible, setCardVisible} = useContext(Appcontext)

    return ( 
        <button 
        type='button'
         className='cart__button'
         onClick={() => setCardVisible(!isCartVisible) }
         >

        <CiShoppingCart />
         { cartItems.length > 0 && <span className='cart-status'>{cartItems.length}</span>}
        </button>

     );
}

export default CartButton;