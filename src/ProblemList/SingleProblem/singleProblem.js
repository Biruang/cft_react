import React, { Component } from 'react';
import style from './singleProblemstyle';

class SingleProblem extends Component {
    
    cardClick = event => {
        if (event.target.tagName === 'BUTTON'){ 
            this.onBtnClick()
            return
        }
        this.props.setSingleId(null)
    }

    onBtnClick = () => {
        var url = "http://52.233.199.97:1488/decide_task?extend=" + this.props.login + "&problem_title=" + this.props.cardTitle
        fetch(url).then(
            response => {
                console.log(response)
            }
        ).catch(Error)
    }

    render(){
        return(
            <div className="container-fluid" style={style.Container}>
                <div className="card text-left m-2 shadow custom-card" onClick={this.cardClick} id={this.props._id}>
                    <div className="card-body">
                        <h3 className="card-title">{this.props.cardTitle}</h3> 
                        <p className="card-text">{this.props.cardText}</p>
                        <p className="card-text ">Coins: {this.props.coins}</p>
                        <button className="btn btn-primary float-right" style={style.CardBtn} >I can help</button>      
                    </div>
                </div>
	        </div>
        );
    }
    
}

export default SingleProblem;