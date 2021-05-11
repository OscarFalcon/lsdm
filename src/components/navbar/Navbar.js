import React, {useState, useEffect} from 'react';
import { Link } from 'react-router-dom';
import Button from '../common/Buttons';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);

    const handleClick = () => setClick(!click);
    const closeMobileMenu = () => setClick(false)

    const isLoggedIn = false;

    const showButton = () => {
        if(window.innerWidth <= 960){
            setButton(false)
        }else{
            setButton(true)
        }
    };
/*
    const verrifyAuthToken = () => {
		const token = localStorage.getItem('token');
		var decodedToken = jwt.decode(token, {complete: true});
		var dateNow = new Date();
	
		return decodedToken.payload.exp > (dateNow.getTime() / 1000)
	}
*/
    useEffect(() => {
        showButton();
    }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className = "navbar">
                <div className = "navbar-container">
                    <Link to = "/" className = "navbar-logo" onClick = {closeMobileMenu}>
                         <i className="fab fa-dyalog"></i><i className="fab fa-foursquare"></i>
                    </Link>
                    <div className = 'menu-icon' onClick = {handleClick}>
                        <i className = {click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className = {click ? 'nav-menu active' : 'nav-menu'}>
                        <li className = 'nav-item'>
                            <Link to='/' className = 'nav-links' onClick = {closeMobileMenu}>
                                Home
                            </Link>
                        </li>
                        <li className = 'nav-item'>
                            <Link to='/Upload' className = 'nav-links' onClick = {closeMobileMenu}>
                                Upload
                            </Link>
                        </li>
                        <li>
                            <Link to = 'ImageAuth' className = 'nav-links' onClick={closeMobileMenu}>
                                Image Gallery
                            </Link>
                        </li>
                        <li>
                            <Link to ='/login' className = 'nav-links-mobile' onClick={closeMobileMenu}>
                                Log In
                            </Link>
                        </li>
                    </ul>
                    {button && <Button linkTo="/login" buttonStyle='btn--outline'>Log In</Button>}
                </div>
            </nav>
        </>
    )
}

export default Navbar
