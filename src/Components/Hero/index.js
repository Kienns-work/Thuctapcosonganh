import Typed from 'typed.js';
import React from 'react';
import { useEffect } from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';


const Hero = () => {
    const user = auth.currentUser;

    const checkUser = (e) => {
        if (user){
            e.preventDefault();
            toast.warning("You're currently signed in ",{
                position: "top-right",
                autoClose: 5000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
    }

	const el = React.useRef(null);
    
    const typed = React.useRef(null);

  useEffect(() => {
    const typed = new Typed(el.current, {
      strings: ["Innovative", "Impactful", "Great"], 
      
      typeSpeed: 150,
      backSpeed: 150,
      loop:true
    });

    return () => {
      typed.destroy();
    };
  }, []);
  
    return (
        <>
            <ToastContainer style={{fontSize:"1.8rem"}}/>
            {/* <ToastContainer style={{fontSize:"1.8rem"}} 
                            position="top-right"
                            autoClose={3000}
                            hideProgressBar={false}
                            newestOnTop={false}
                            closeOnClick
                            rtl={false}
                            pauseOnFocusLoss
                            draggable
                            pauseOnHover="false"
            /> */}
            <section className="hero" data-scroll-section>
                <div className="hero__wrapper">
                    <div className="container">
                    <h1 className="main-heading color-black">We are building something <span className='typing' ref={el}></span></h1>
                                <p className="paragraph">Welcome to our temporarily website</p>
                                <p className="paragraph">The real thing will be ready very soon, but we couldn't wait to let you know about our upcoming projects</p>
                                <div className="download-buttons">
                                    <a href="#" className="google-play" >
                                        <div className="button-content">
                                            <span>about us</span>
                                        </div>
                                    </a>
                                    <Link to="/login"  className="apple-store" onClick={checkUser}>
                                        <div className="button-content">
                                            <span>Login</span>
                                        </div>
                                    </Link>
                                </div>
                    </div>
                </div>
            </section>
        </>
    );
}

export default Hero;
