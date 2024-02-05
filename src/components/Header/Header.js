import { LOGO_URL } from "../../utils/constants";
import { useState,useEffect } from "react";
import { Link } from "react-router-dom";

const Header = () => {
    const [isLoggedIn, setLogged] = useState(false);

    // If there is no dependency array(2 agr), useEffect() called on every render
    // If there is dependency array is empty = [], useEffect() called on initial render only
    // If there is dependency array has some value;eg; = [isLoggedIn], useEffect() called everytime isLoggedIn is updated
    useEffect(() => {
        console.log('USE EFFECT CALLED');
    }),[isLoggedIn];

    return (
        <div className="header">
            <div className="logo-container">
                <img className="logo" src={LOGO_URL} alt="" />
            </div>
            <div className="nav-items">
                <ul>
                    <li><Link to={'/'}>Home</Link></li>
                    <li><Link to={'/about-us'}>About Us</Link></li>
                    <li><Link to={'/contact-us'}>Contact Us</Link></li>
                    <li>
                        <button className="auth-bth" onClick={()=>{
                            setLogged(!isLoggedIn)
                        }}>
                            {isLoggedIn ? 'Log Out' : 'Login'}
                        </button>
                    </li>
                </ul>
            </div>
        </div>
    )
}
export default Header;