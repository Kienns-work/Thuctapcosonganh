import React from 'react';
import './Review.css';

const Review = (props) => {
    return (
        <div className="review-page">
            <img src={props.photoURL} alt="Avatar" />
            <p>{props.review}</p>
            <span className="time-right">{props.time}</span>
        </div>
    );
}

export default Review;
