import  React  from "react";
import CartButton from "../CartButton/CartButton";
import SearchBar from "../SearchBar/SearchBar";


import './Header.css'


function Header() {
    return(
        <header className="header" >
          <div className="container" >
             
            <SearchBar/>
            <CartButton/>
            <h3 className="app-name">Mercado livre do Diegão</h3>


          </div>
        </header>
    )
}

export default Header