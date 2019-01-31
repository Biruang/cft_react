import React, { Component } from 'react';
import style from './registrationStyle'

class Registration extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: '',
            password: ''
        }
    }

    onFormSubmit = event => {
        var xhr = new XMLHttpRequest();
        event.preventDefault()
        var url = 'http://52.233.199.97:1488/reg?login='+ this.state.login +'&password=' + this.state.password
        xhr.open("GET", url);
        xhr.send();
        this.props.setRegistration(false)
    }

    onLoginChange = event => {
        this.setState({
            login: event.target.value
        })
    }

    onPasswordChange = event => {
        this.setState({
            password: event.target.value
        })
    }

    backToLoginClick = () =>{
        this.props.setRegistration(false)
    }

    render(){
        return(
            <div className="container col-xl-4" style={style.Container}>
                <form className="rounded border p-4 m-3 shadow-lg" method='GET' onSubmit={this.onFormSubmit}>
                  <div className="form-group">
                    <h2 className="p-2">Tell us about yourself</h2>
                  </div>
                  <div className="form-group">
                    <label>Login:</label>
                    <input className="form-control shadow-sm" type="text" onChange={this.onLoginChange}  placeholder="Login" aria-describedby="helpId" required />
                  </div>
                  <div className="form-group">
                    <label>Password:</label>
                    <input className="form-control shadow-sm" type="password" onChange={this.onPasswordChange}  placeholder="Password" aria-describedby="helpId" required />
                    <input className="form-control shadow-sm" type="password"  placeholder="Repeat password" aria-describedby="helpId" required />
                  </div>
                  <div onClick={this.backToLoginClick}>Already have account?</div>
                  <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div> 
        );
    }
}

export default Registration