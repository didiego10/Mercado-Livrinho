import React , {useState, useContext} from "react";
import { CiSearch } from "react-icons/ci";

import './SearchBar.css'
import feachProducts from "../../api/feachProducts";
import Appcontext from "../../context/AppCOntext";

function SearchBar() {
  
  const {setProducts, setLoading} =useContext (Appcontext)
  const [searchValue, setSearchValue] = useState('');


  const handleSerch = async (event) => {
    event.preventDefault()
    setLoading(true)
    const products =  await feachProducts (searchValue)

    setProducts(products)
    setLoading(false)
    setSearchValue('')
  }
  
  return (
    <form className="search-bar" onSubmit={handleSerch}>
      {name}
      <input
        type="search"
        value={searchValue}
        placeholder="Buscar Produtos"
        className="search__input"
        onChange={({target}) => setSearchValue(target.value)}
        required
      />
      
      <button type="submit" className="search__button">
         <CiSearch/>
      </button>
    </form>
  );
}

export default SearchBar;
