import * as React from "react";
import './Card.css';

function Card(props) {
    
    return (
            <div className="card-main-container">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
            </div>
    )
}

export default Card;