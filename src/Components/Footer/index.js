import './styles.css';
import React from 'react';
import arrow from '../../Assets/arrow-link.png';
import fb from '../../Assets/fb-symbol.png';
import ig from '../../Assets/ig-symbol.png';
import tt from '../../Assets/twitter-symbol.png';
import yt from '../../Assets/yt-symbol.png';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
import { signOut, getAuth } from 'firebase/auth';




const Footer = () => {
  const auth = getAuth();
  const user = auth.currentUser;

  const checkUser = (e) => {
    if (user){
        e.preventDefault();
        toast.warning("Bạn đang ở đây rồi ",{
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

  const signOutUser = (e) => {
    if (!user){
      e.preventDefault();
      toast.error('Bạn phải đăng nhập để sử dụng tính năng này',{
        position: "top-center",
        autoClose: 3000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      })
    }
    else {
      signOut(auth).then(() => {
        toast.success('Đăng xuất thành công',{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
        console.log('Đăng xuất thành công');
        window.location.reload(false);
      }).catch((error) => {
        toast.error('Đăng xuất thất bại',{
          position: "top-right",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      });
    }
  }

    return (
        <>
            <footer className="footer" data-scroll-section>
  <div className="footer__wrapper">
    <div className="container">
      <div className="row">
        <div className="col-lg-4">
          <div className="footer__info">
            <div className="footer__info--logo">
              <h2>
                <a href="index.html">
                  Nhom<span>HIGH</span>
                </a>
              </h2>
            </div>
            <div className="footer__info--content">
              <p className="paragraph dark">We are here to help you
                organize yourself on the daily basis
                using systematic algorithms to
                achieve success.</p>
              <div className="social">
                <ul>
                  <li className="facebook"><a href="#"><img src={fb} /></a></li>
                  <li className="twitter"><a href="#"><img src={ig} /></a></li>
                  <li className="linkedin"><a href="#"><img src={tt} /></a></li>
                  <li className="youtube"><a href="#"><img src={yt} /></a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
        <div className="col-lg-8">
          <div className="footer__content-wrapper">
            <div className="footer__list">
              <ul>
                <li>Explore</li>
                <li><a href="#">About</a></li>
                <li><a href="#">Our Team</a></li>
                <li><a href="#">Features</a></li>
                <li><a href="#">Blog</a></li>
                <li><a href="#">How It Works</a></li>
              </ul>
            </div>
            <div className="footer__list">
              <ul>
                <li>Help</li>
                <li><a href="#">FAQ</a></li>
                <li><a href="#">Privacy Policy</a></li>
                <li><a href="#">Support</a></li>
                <li><a href="#">Terms of Service</a></li>
                <li><a href="#">Contact</a></li>
              </ul>
            </div>
            <div className="download-buttons">
              <h5>Sign</h5>
              <Link to="/" className="google-play" onClick={signOutUser}>
                <div className="button-content">
                  <span>
                    Sign Out
                  </span>
                </div>
              </Link>
              <Link to="/login" className="apple-store" onClick={checkUser}>
                <div className="button-content">
                  <span>Sign In</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="footer__copy">
          <h5>Copyright©2022 All rights reserved | Made by nhom<span>HIGH</span></h5>
        </div>
      </div>
    </div>
  </div>
</footer>

        </>
    );
}

export default Footer;
