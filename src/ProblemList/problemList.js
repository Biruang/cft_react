import React, { Component } from 'react';
import style from './problemListStyle';
import Card from './Card/card';
//import problems from './problems'
import SingleProblem from './SingleProblem/singleProblem'

class ProblemList extends Component {

    constructor(props){
        super(props)
        this.state = {
            SingleId: null,
            isSettings: false,
            login: this.props.login,
            problemList: []
        }
    }

    getProblems() {
        var xhr = new XMLHttpRequest();
        xhr.open("GET", 'http://104.211.23.214:1488/get_problems', true);
        xhr.send();
        xhr.onload = () => {
            var json = JSON.parse(xhr.responseText)
            this.setState({
                problemList: json
            })
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
                    cardText={element.problem_description}
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
                        cardText={element.problem_description}
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
        this.getProblems()
        return(
            <div className="container" style={style.Container}>
                {this.fill(this.state.problemList)}
            </div>
        );
    }
    
}

export default ProblemList;