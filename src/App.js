import React, { Component } from 'react';
import Registration from './Registration/registration'
import Singin from './Singin/singin';
import Header from './Header/header'
import Settings from './Settings/settings'
import ProblemList from './ProblemList/problemList'
import CreateCard from './CreateCard/createCard'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: true,
      carma: null,
      onRegistration: false,
      display: 'add'
    }
  }

  setLogin = state => {
    this.setState({
      login: state
    });
  }

  setCarma = state => {
    this.setState({
      carma: state
    });
  }

  setRegistration = state =>{
    this.setState({
      onRegistration: state
    });
  }

  setDisplay = state => {
    this.setState({
        display: state
    });
}

getProblems = () => {
  var xhr = new XMLHttpRequest();
  xhr.open("GET", 'http://52.233.199.97:1488/get_problems', true);
  xhr.send();
  xhr.onload = () => {
    JSON.parse(xhr.responseText)
  }
}

  render() {
    if (this.state.onRegistration === true)
    {
      return(
      <div className="App">
        <Registration setRegistration={this.setRegistration}/>
      </div>)
    }
    if (this.state.login === null)
    {
      return (
      <div className="App">
        <Singin setLogin={this.setLogin} setRegistration={this.setRegistration} setCarma={this.setCarma}/>
      </div>)
    }
    if (this.state.display === "settings")
    {
      return (
      <div className="App">
        <Header setDisplay={this.setDisplay} login={this.state.login} setLogin={this.setLogin}/>
        <Settings />
      </div>)
    }
    if(this.state.display ==='add') {
      return(
        <div className="App">
          <Header setDisplay={this.setDisplay} login={this.state.login} carma={this.state.carma} setLogin={this.setLogin}/>
          <CreateCard />
      </div>)
    }    
    return (
      <div className="App">
        <Header setDisplay={this.setDisplay} login={this.state.login} carma={this.state.carma} setLogin={this.setLogin}/>
        <ProblemList login={this.state.login} display={this.state.display} getProblems={this.getProblems}/>
      </div>)
  }
}

export default App;
