import React from 'react'
import user from '../styles/userview.module.css'

//TODO fix so each name is modifiable. Currently can't select multiple values when re-using. 
export default function RatingBars() {
    return (
        <div className={user.ratings}>
        <input type="radio" id="strongly-disagree" name="rates" value="1"/>
        <label for="strongly-disagree">Strongly disagree</label>

        <input type="radio" id="disagree" name="rates" value="2"/>
        <label for="disagree">Disagree</label>

        <input type="radio" id="neutral" name="rates" value="3"/>
        <label for="neutral">Neutral</label>

        <input type="radio" id="agree" name="rates" value="4"/>
        <label for="agree">Agree</label>

        <input type="radio" id="Strongly-agree" name="rates" value="5"/>
        <label for="Strongly-agree">Strongly agree</label>

        </div>
    )
}

