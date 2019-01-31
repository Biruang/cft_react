import React, { Component } from 'react';
import Registration from './Registration/registration'
import Singin from './Singin/singin';
import Header from './Header/header'
import Settings from './Settings/settings'
import ProblemList from './ProblemList/problemList'

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      login: 'ddd',
      onRegistration: false,
      display: 'list'
    }
  }

  setLogin = state => {
    this.setState({
      login: state
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
        <Singin setLogin={this.setLogin} setRegistration={this.setRegistration} />
      </div>)
    }
    if (this.state.display === "settings")
    {
      return (
      <div className="App">
        <Header setDisplay={this.setDisplay} login={this.state.login} setLogin={this.setLogin} />
        <Settings />
      </div>)
    }
    return (
      <div className="App">
        <Header setDisplay={this.setDisplay} login={this.state.login} setLogin={this.setLogin}/>
        <ProblemList login={this.state.login} display={this.state.display}/>
      </div>)
  }
}

export default App;
