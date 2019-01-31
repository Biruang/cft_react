import React, { Component } from 'react';
import style from './problemListStyle';
import Card from './Card/card';
import problems from './problems';
import SingleProblem from './SingleProblem/singleProblem'

class ProblemList extends Component {

    constructor(props){
        super(props)
        this.state = {
            SingleId: null,
            isSettings: false,
            login: this.props.login
        }
    }

    setSingleId = id => {
        this.setState({
            SingleId: id
        });
    }

    fill(problems) {
        var output = []
        if (this.state.SingleId === null){
            problems.forEach(element => {
                output.push(
                <Card
                    key={element._id}
                    _id={element._id}
                    cardTitle={element.problem_title}
                    cardText={element.problem_descrition}
                    coins={element.coins}
                    setSingleId = {this.setSingleId}
                    login = {this.state.login}
                />)
            });
        }else{
            problems.forEach(element => {
                if (element._id === this.state.SingleId)
                {
                    output.push(
                    <SingleProblem
                        key={element._id}
                        _id={element._id}
                        cardTitle={element.problem_title}
                        cardText={element.problem_descrition}
                        coins={element.coins}
                        setSingleId = {this.setSingleId}
                        login = {this.state.login}
                    />)
                }
            });
        }
        return output
    }

    render(){
        return(
            <div className="container" style={style.Container}>
                {this.fill(problems)}
            </div>
        );
    }
    
}

export default ProblemList;