import React from 'react';
import './styles.css';
import { Link } from 'react-router-dom';
import { useState } from 'react';
import { set,ref } from 'firebase/database';
import { db } from '../../firebase/config';
import { v4 as uuidv4 } from 'uuid';
import { getAuth } from 'firebase/auth';
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';



const Newsletter = () => {

    const auth = getAuth();
    const user = auth.currentUser;

    const [review, setReview] = useState("");

    const handleReviewChange = (e) => {
        setReview(e.target.value);
    }

    const addToDatabase = (e) => {
        e.preventDefault();
        if (user){
            if (document.querySelector('.input-field').value === ''){
                toast.error("Bình luận trống !!",{
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: true,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                });
                return;
            }
            const uuid = uuidv4();
            const today = new Date();
            const time = `${today.getDate()}/${today.getMonth()+1}/${today.getFullYear()} ${today.getHours()}:${today.getMinutes()}:${today.getSeconds()}`
            set(ref(db, `Reviews/${uuid}`), {
                review: review,
                uuid: uuid,
                time: time,
                photoURL: user.photoURL,
                displayName: user.displayName,
            })
            document.querySelector('.input-field').value = '';
            toast.success('Cám ơn bạn đã đóng góp', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
            });
        }
        else {
            toast.error('Bạn phải đăng nhập để sử dụng tính năng này',{
                position:"top-center"
            });
        }
    }

    const checkUser = (e) => {
        if (!user){
            e.preventDefault();
            toast.error('Bạn phải đăng nhập để sử dụng tính năng này',
            {
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

    return (
        <>
            
            <section className="newsletter" data-scroll-section>
                <div className="newsletter__wrapper">
                    <div className="container">
                        <div className="row align-items-lg-center">
                            <div className="col-lg-6">
                                <div className="newsletter__info">
                                    <h2 className="section-heading color-black">Subscribe to our newsletter.</h2>
                                    <form className="newsletter__info--field">
                                        <input type="text" placeholder="Let us know your feedback" className="input-field" onChange={handleReviewChange} />
                                        <button className="button" onClick={addToDatabase}><span>Submit</span></button>
                                    </form>
                                </div>
                                
                            </div>
                        <div className="col-lg-6">
                            <div className="newsletter__img">
                                <img src="https://64.media.tumblr.com/7c52157b98835e347f0edb86103ad6ff/61f85295f9f5d993-ee/s640x960/2915d333e3f55c45af73e282912ab6a0db78d68d.png" alt="image"/>
                            </div>
                        </div>
                        </div>
                    </div>
                    <Link to="/reviews" className="button visit__rating--btn" onClick={checkUser}>Xem bình luận</Link>
                </div>

            </section>
        </>
    );
}

export default Newsletter;
