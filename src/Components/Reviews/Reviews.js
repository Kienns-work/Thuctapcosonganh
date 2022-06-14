import React from 'react';
import Review from './Review';
import { useEffect, useState } from 'react';
import { ref, onValue } from 'firebase/database';
import { db } from '../../firebase/config';
import { Link } from 'react-router-dom';

const Reviews = () => {
    const [review, setReview ] = useState("")
    const [reviews, setReviews] = useState([]);
    useEffect(()=> {
        setReviews([]);
        onValue(ref(db,'Reviews/'), snapshot => {
            const data = snapshot.val();
            Object.values(data).map(todo => {
                setReviews(oldArr => [...oldArr,todo]);
            })
        })
    },[])
    return (
        <>
            <h1 className='reviews-title'>Thank you for feedback</h1>
            {reviews.map((item,key) => {
            return (<Review key={key} photoURL={item.photoURL} time={item.time} review={item.review} />)
            })}
            <Link to="/" className="button back-btn">Back To Home</Link>
        </>
    );
}

export default Reviews;
