import logo from '../resources/cart-icon.svg';
import styling from '../Navbar.module.css';
import { Outlet, useNavigate } from 'react-router-dom';
import { useRecoilValue } from 'recoil';
import { cartTotalSelector } from '../store/cartTotalSelector';

function Navbar(){
    
    const navigate  = useNavigate();

    function navigateToWishlist(){
        navigate("/wishlist")
    }

    function navigateToCart(){
        navigate("/cart");
    }

    const cartItemsCount = useRecoilValue(cartTotalSelector)

    return (
        <>
            <div className={styling.navbelt}>
                <button className={styling.logo} onClick={navigateToWishlist}>Amazon.in</button>
                <div className={styling["user-component"]}> 
                    Hello, User
                    <div onClick={navigateToCart}>
                        <div className={styling.cartnumber}>{cartItemsCount>0 ? cartItemsCount: 0} </div>
                        <img src={logo} height="50" width="50"></img>
                    </div>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
            
        </>
    )
}

export default Navbar