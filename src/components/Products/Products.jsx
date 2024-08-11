import React, {useEffect, useContext} from 'react'



import './Products.css'
import feachProducts from '../../api/feachProducts'
import ProductCard from '../ProductCard/ProductCard';
import  Loading  from "../Loading/Loading";
import Appcontext from '../../context/AppCOntext';

function Products() {

    const {products, setProducts, loading, setLoading} = useContext(Appcontext)
    

    useEffect(() => {
        feachProducts('iphone').then((response) => {
            setProducts(response)
            setLoading(false)

        })

    }, []);
    

    return ( 
        (loading && <Loading/>) || (
          <section className='products container'>

          {products.map((product) => <ProductCard key={product.id} data={product} />)}
        </section>)
        )
}

export default Products;
