import React from 'react';
import './styles.css';
import { Home } from '@material-ui/icons'
const Header = () => {
    return (
        <>
            <header className="header header-1" data-scroll-section>
                <div className="container">
                    <div className="header__wrapper">
                        <div className="header__logo">
                            <h1>
                                <a href="index.html">
                                    Nhom<span>HIGH</span>
                                </a>
                            </h1>
                        </div>
                        <div className="header__nav">
                            <ul className="header__nav-primary">
                                <li><a href="index.html">
                                    <Home 
                                        fontSize='large' 
                                    />
                                </a></li>
                                <li><a href="#feature">Features</a></li>
                                <li><a href="#feedback">Feedbacks</a></li>
                                <li><a href="#faq">FAQs</a></li>
                                <li><a href="#pricing">Pricing</a></li>
                            </ul>
                        <span><i className="fas fa-times"></i></span>
                        </div>
                        <div className="header__bars">
                            <i className="fa fa-solid fa-bars"></i>
                        </div>
                    </div>
                </div>
            </header>
        </>
    );
}

export default Header;
