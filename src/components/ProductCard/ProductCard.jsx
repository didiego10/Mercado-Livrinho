import React, { useContext } from 'react'
import propsTypes from 'prop-types'
import './ProductCard.css'
import { TiShoppingCart } from "react-icons/ti";
import formatCurrency from '../../utils/formatCurrency';
import Appcontext from '../../context/AppCOntext';



function ProductCard({data}) {
    const {title,thumbnail, price} = data

    const {cartItems, setCartItems} = useContext(Appcontext)

    const handleAddCart = () => { setCartItems([ ...cartItems , data]) }

    return ( 
        <section className='product-card'>
           
           <img 
           src={thumbnail.replace(/\w\.jpg/gi, 'W.jpg')} 
           alt="product" 
           className='card__image'/>

        <div className="card__infos">
            <h2 className="card__price">{formatCurrency(price, 'BRL')}</h2>
            <h2 className='card__title' >{title}</h2>
        </div>

            <button 
            type='button' 
            className='button__add-cart'
            onClick={handleAddCart}
             >
                <TiShoppingCart/>
            </button>
        </section>
     );
}

export default ProductCard;

ProductCard.propsTypes = {
    data: propsTypes.shape({}),
}.isRequired;