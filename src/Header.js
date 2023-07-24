import React from 'react';
import './Header.css';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import { Link } from 'react-router-dom';
import { useStateValue } from './StateProvider';

function Header() {
    const [{cart},dispatch] = useStateValue();
    return (
        <div className='header'>
            <Link to="/">
            <img className="header--logo" src="https://pngimg.com/uploads/amazon/amazon_PNG11.png" alt=""/>
            </Link>


            <div className="header--search">
              <input className="header--searchInput" type="text" />
              {/* Material UI */}
             <SearchIcon className="header--searchIcon"/>
            </div>

            <div className="header--nav">
                <div className='header--option'>
                    <span className='header--optionLineOne'>Hello Guest</span>
                    <span className='header--optionLineTwo'>Sign In</span>
                </div>

                <div className='header--option'>
                    <span className='header--optionLineOne'>Return</span>
                    <span className='header--optionLineTwo'>& Orders</span>
                </div>

                <div className='header--option'>
                    <span className='header--optionLineOne'>Your</span>
                    <span className='header--optionLineTwo'>Prime</span>
                </div>
            </div>

            <Link to="/checkout">
            <div className="header--optionBasket">
            <ShoppingCartIcon/>
            <span className="header--optionLineTwo header--basketCount">{cart?.length}</span>
            </div>
            </Link>
            
        </div>
    )
}

export default Header;