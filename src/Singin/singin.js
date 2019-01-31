import React, { Component } from 'react';
import style from './singinStyle'

class Singin extends Component {
    constructor(props){
        super(props)
        this.state = {
            login: '',
            password: ''
        }
    }

    onFormSubmit = event => {
        event.preventDefault()
        var url = 'http://52.233.199.97:1488/login?login='+ this.state.login +'&password=' + this.state.password
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => {
            var json = JSON.parse(xhr.responseText)
            console.log(json.auth)
            if (json.auth === 'ok'){
                this.props.setLogin(this.state.login)
                this.getUserCarma(this.state.coins)
                console.log(json)
            }
        }
    }

    getUserCarma(login) {
        var url = 'http://52.233.199.97:1488/user?login=' + login
        var json  
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => { 
            json = JSON.parse(xhr.responseText)
            this.props.setCoins(json.coins)
            console.log(json)
        }
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

    regClick = () => {
        this.props.setRegistration(true)
    }

    render(){
        return(
            <div className="container w-25" style={style.Container}>
                <form className="col-12 rounded border p-4 m-3 shadow-lg" onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <h2 className="p-2">Please sign in</h2>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" onChange={this.onLoginChange}  placeholder="Login" required autoFocus />
                    <input className="form-control" type="password" onChange={this.onPasswordChange}  placeholder="Password" required />
                </div>
                <div className="" onClick={this.regClick}>Register now</div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div> 
        );
    }
}

export default Singin