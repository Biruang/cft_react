import React, { Component } from 'react';
import style from './cardStyle';

class Card extends Component {

    onCardClick = event =>{
        var target = event.target
        if (target.tagName === 'BUTTON') {
            this.onBtnClick()
            return
        } 
        do {
            if (target.className === 'card text-left m-2 shadow custom-card custom-card') {
                this.props.setSingleId(target.id)
            }
            target = target.parentNode;
        } while (target.className !== "container")
    }

    onBtnClick = () =>{
        var url = "http://104.211.23.214:1488/decide_task?extend=" + this.props.login + "&problem_title=" + this.props.cardTitle
        var xhr = new XMLHttpRequest();
        console.log(url)
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => {
            var json = JSON.parse(xhr.responseText)
            console.log(json)
        }
    }

    render(){
        return(
            <div className="card text-left m-2 shadow custom-card custom-card" name="card" onClick={this.onCardClick} id={this.props._id}>
                <div className="card-body" id="cardTemplate">
                    <h3 className="card-title">{this.props.cardTitle}</h3>   	
                    <div className="cope_text line-clamp">
                        <p className="card-text" style={style.CardText}>{this.props.cardText}</p>
                    </div>
                    <button className="btn btn-primary float-right" style={style.CardBtn} >Coins: {this.props.coins}</button>
                </div>
            </div>
        );
    }
    
}

export default Card;