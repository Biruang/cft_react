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
        var url = ' http://104.211.23.214:1488/login?login='+ this.state.login +'&password=' + this.state.password
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => {
            var json = JSON.parse(xhr.responseText)
            console.log(json.auth)
            if (json.auth === 'ok'){
                this.props.setLogin(this.state.login)
                this.getUserCarma(this.state.login)
            }
        }
    }

    getUserCarma(login) {
        var url = ' http://104.211.23.214:1488/user?login=' + login
        var xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.send();
        xhr.onload = () => { 
            var json = JSON.parse(xhr.responseText)
            this.props.setCarma(json.coins)
            console.log(json.coins)
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
            <div className="container col-xl-2 col-10 col-sm-10 col-md-6 col-lg-6" style={style.Container}>
                <form className="col-12 rounded border p-4 m-3 shadow-lg" onSubmit={this.onFormSubmit}>
                <div className="form-group">
                    <h2 className="p-2">Please sign in</h2>
                </div>
                <div className="form-group">
                    <input className="form-control" type="text" onChange={this.onLoginChange}  placeholder="Login" required autoFocus />
                    <input className="form-control" type="password" onChange={this.onPasswordChange}  placeholder="Password" required />
                </div>
                <div className="mb-3" onClick={this.regClick}>Register now</div>
                <button className="btn btn-lg btn-primary btn-block" type="submit">Sign in</button>
                </form>
            </div> 
        );
    }
}

export default Singin