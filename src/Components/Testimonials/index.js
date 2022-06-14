import React from 'react';
import './styles.css';
import star from '../../Assets/star.png';
import halfStar from '../../Assets/half-star.png';
import { Navigation, Autoplay, Pagination, Scrollbar, A11y } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';

{/*  */}
const Clients = () => {
    return (
        <> 
            <section className="testimonials section" id="testimonials">
                <div className='testi-wrapper'>
                <h2 className="section-heading color-black">Hear from what others had to say.</h2>

<div className="testi-content grid-2">
    <div className="column-1 reviews">
        <div className="swiper-container">
            <Swiper
                modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
                effect={"coverflow"}
                grabCursor={true}
                centeredSlides={true}
                slidesPerView={"auto"}
                coverflowEffect={{
                    rotate: 50,
                    stretch: 0,
                    depth: 100,
                    modifier: 1,
                    slideShadows: false,
                }}
                loop={true}
                autoplay={true}
                pagination={true}
                className="mySwiper"
            >
                <SwiperSlide>
                    <div className="swiper-slide review">
                        <div className="rate">
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                        </div>

                        <p className="review-text">
                        I am really impressed by the quality of services I received from Kien. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of Kien's help and I will definitely use your services again.
                        </p>

                        <div className="review-info">
                        <h3 className="review-name">Sy Kien</h3>
                        <h5 className="review-job">Professor, Vietnam</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide review">
                        <div className="rate">
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                        </div>

                        <p className="review-text">
                        I thank Kien for the wonderful job in helping us develop our program. Everyone was professional, excellent and hard working. Thanks to them, we were able to achieve our goal on time, and we look forward to continue working with them in the future.
                        </p>

                        <div className="review-info">
                        <h3 className="review-name">Cristiano Ronaldo</h3>
                        <h5 className="review-job">Footballer, Vietnam</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide review">
                        <div className="rate">
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                        </div>

                        <p className="review-text">
                        I am really impressed by the quality of services I received from Kien. You were right on schedule, charged reasonable prices, were professional and courteous in dealings, and delivered items well before time. I have got a good e-commerce site for my products. My revenue has increased because of Kien's help and I will definitely use your services again.
                        </p>

                        <div className="review-info">
                        <h3 className="review-name">Hai Yen</h3>
                        <h5 className="review-job">Student, Vietnam</h5>
                        </div>
                    </div>
                </SwiperSlide>
                <SwiperSlide>
                    <div className="swiper-slide review">
                        <div className="rate">
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={star} />
                            <img src={halfStar} />
                        </div>

                        <p className="review-text">
                        We have worked with Kien on various projects, and find that they provide quality service and expertise for our programming needs. It is rare to find a service provider with such professional consistency - he are a valued service provider to our business!
                        </p>

                        <div className="review-info">
                        <h3 className="review-name">Jason Mraz</h3>
                        <h5 className="review-job">Singer, USA</h5>
                        </div>
                    </div>
                </SwiperSlide>
                
            </Swiper>
        </div>
    </div>

    <div className="column-2 image">
    <img src="http://cmavn.org/wp-content/uploads/2015/07/day-ve-mario-h1.png" alt="" className="img-element" />
    </div>
</div>
                </div>
            </section>
        </>
    );
}

export default Clients;
