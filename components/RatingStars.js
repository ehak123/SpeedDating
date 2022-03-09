import React, { useState } from 'react'
import { FaStar } from 'react-icons/fa';
import user from '../styles/userview.module.css'

//TODO fix so each name is modifiable. Currently can't select multiple values when re-using. 

const RatingStars = () => {
    const [rating, setRating] = useState(null);
    const [hover, setHover] = useState(null);

    return <div>
        {[...Array(5)].map((star, i) => {
            const ratingVal = i + 1;

            return <label>
                <input
                    type="radio"
                    className={user.rates}
                    value={ratingVal}
                    onClick={() => setRating(ratingVal)}
                    />
                <FaStar
                    className={user.star} 
                    size={35} 
                    color={ratingVal <= (hover || rating) ? "#ffc107" : "#e4e5e9"} 
                    onMouseEnter={() => setHover(ratingVal)}
                    onMouseLeave={() => setHover(null)}
                    />
            </label>
        })}
    </div>
}
export default RatingStars;

