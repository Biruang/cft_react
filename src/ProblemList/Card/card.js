import React from 'react';
import style from './cardStyle';

function Card(props) {
    return(
        <div className="card text-left m-2 shadow custom-card custom-card" id={props._id}>
            <div className="card-body" id="cardTemplate">
                <h3 className="card-title">{props.cardTitle}</h3>   	
				<div className="cope_text line-clamp">
				    <p className="card-text" style={style.CardText}>{props.cardText}</p>
                </div>
				<button href="#" className="btn btn-primary float-right" id="cardBtn" style={style.CardBtn} >Coins: {props.coins}</button>
            </div>
        </div>
    );
}

export default Card;