import React, { useEffect } from 'react';
import './styles.css';
import "swiper/css/effect-coverflow";
import "swiper/css/pagination";
import "swiper/css";
import games from './slide.json';
import { Swiper, SwiperSlide } from 'swiper/react';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { auth } from '../../firebase/config';
import { toast } from 'react-toastify';


// import required modules
import {Parallax, EffectCoverflow, Pagination, Autoplay } from "swiper";


const Pricing = () => {

    const user = auth.currentUser;

    const [slides, setSlides] = useState(games);
    const [activeImg,setActiveImg] = useState(null);

    const checkUser = (e) => {
      if (!user){
        e.preventDefault();
        toast.error('Chưa đăng nhập', {
          position: "top-center",
          autoClose: 3000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        })
      }
     
    }

    useEffect(()=>{
      setActiveImg(document.querySelector('.pricing .swiper-slide-active img').getAttribute('src'));
    })
    return (
        <>
            <section className="pricing" id="pricing" style={{background:`url(${activeImg})`}} data-scroll-section>
                <div className="pricing__wrapper">
                    <h2 className="section-heading color-black">Easy pricing plans for your needs.</h2>
                    <Swiper
                        allowTouchMove={true}
                        effect={"coverflow"}
                        grabCursor={true}
                        initialSlide={4}
                        centeredSlides={true}
                        slidesPerView={"auto"}
                        coverflowEffect={{
                          rotate: 0,
                          stretch: 0,
                          depth: 100,
                          modifier: 3,
                          slideShadows: true,
                        }}
                        loop={true}
                        autoplay={{
                            delay:3000,
                            disableOnInteraction:false
                        }}
                        pagination={true}
                        modules={[EffectCoverflow, Pagination, Autoplay, Parallax]}
                        className="mySwiper"
                      >
                        <SwiperSlide >
                            <Link to="/error" onClick={checkUser}><img src="https://wallpaperaccess.com/full/3187880.jpg"/></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="/error" onClick={checkUser}><img src="https://genk.mediacdn.vn/139269124445442048/2021/4/16/league-of-legends-1-16185440791431765832411.jpg"/></Link>
                        </SwiperSlide>
                        <SwiperSlide >
                            <Link to="../Games/Tetris/tetris.html" onClick={checkUser}><img src="https://www.pdvg.it/wp-content/uploads/2017/10/1467720415-image-0.jpg"/></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="../Games/Snake/snake.html" onClick={checkUser}><img src="https://i0.wp.com/d9n64ieh9hz8y.cloudfront.net/wp-content/uploads/20170628123617/sp2.jpg?fit=1920%2C1080&ssl=1"/></Link>
                        </SwiperSlide>
                        <SwiperSlide>
                            <Link to="../src/Games/flappy/index.html"  onClick={checkUser}><img src="https://images-na.ssl-images-amazon.com/images/I/91L7SO5ZyoL.png"/></Link>
                        </SwiperSlide>
                        <SwiperSlide onClick={checkUser}>
                            <a href="././src/Games/Shooting/shooting.html"><img  onClick={checkUser} src="https://store-images.s-microsoft.com/image/apps.21875.14592034656833738.76075d6b-71ef-42d9-9f3b-7c12566b7883.e49f5301-cc08-45e4-9eb9-f96a89ac599b?mode=scale&q=90&h=1080&w=1920"/></a>
                        </SwiperSlide>
                        <SwiperSlide onClick={checkUser}>
                            <Link to="/error"  onClick={checkUser}><img src="https://subwaysurfers-game.com/wp-content/uploads/2016/04/Subway-surfers-game-2.jpg"/></Link>
                        </SwiperSlide>
                        <SwiperSlide onClick={checkUser}>
                            <Link to="/error"  onClick={checkUser}><img src="https://cdn.wallpapersafari.com/51/0/wuXaKl.jpeg"/></Link>
                        </SwiperSlide>

                      </Swiper>
                </div>
                </section>
        </>
    );
}

export default Pricing;
