/*import React, { Component } from 'react';
import ProblemList from './ProblemList/problemList'
import Settings from './Settings/settings';

class MainPage extends Component{
    constructor(props){
        super(props)
        this.state = {
            display: this.props.display
        }
    }

    setDisplay = state => {
        this.setState({
            display: state
        });
    }

    render() {
        if (this.state.display === 'settings'){
            return(
                    <Settings/>
            )
        } else {
            return(
                    <ProblemList />
            )
        }
    }
}

export default MainPage*/