import logo from '../resources/cart-icon.svg';
import styling from '../Navbar.module.css';
import { Outlet, useNavigate } from 'react-router-dom';

function Navbar(){
    
    const navigate  = useNavigate();

    function navigateToWishlist(){
        navigate("/wishlist")
    }

    return (
        <>
            <div className={styling.navbelt}>
                <button className={styling.logo} onClick={navigateToWishlist}>Amazon.in</button>
                <div className={styling["user-component"]}> 
                    Hello, User
                    <div className={styling.cartnumber}>99</div>
                    <img src={logo} height="50" width="50"></img>
                </div>
            </div>
            <div>
                <Outlet/>
            </div>
            
        </>
    )
}

export default Navbar