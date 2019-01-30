import React from 'react';
import style from './problemListStyle';
import Card from './Card/card';
import problems from './problems';

let output = []

function ProblemList() {

    fill(problems);

    return(
        <div className="container" style={style.Container}>
            {output}
        </div>
    );
}

function fill(problems) {
    problems.forEach(element => {
        output.push(
        <Card
            key={element._id}
            _id={element._id}
            cardTitle={element.problem_title}
            cardText={element.problem_descrition}
            coins={element.coins}
        />)
    });
}

export default ProblemList;