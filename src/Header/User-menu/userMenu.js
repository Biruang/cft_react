import React, { Component } from 'react';

class UserMenu extends Component {
    constructor(props){
        super(props)
        this.state = {
            login : this.props.login,
            coins : this.props.coins
        }
    }

    addBtn = () => {
        this.props.setDisplay('add')
    }

    settingsBtn = () => {
        this.props.setDisplay('settings')
    }

    logOff = () => {
        this.props.setLogin(null)
    }
//{this.state.coins}
    render() {
        return (
            <div className="UserMenu form-inline">
                <h4 className="mr-sm-2">Coins: 45</h4>
                <div className="dropdown my-2 my-sm-0"></div>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">{this.state.login}</button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={this.addBtn}>Add problem</button>
                    <button className="dropdown-item" onClick={this.settingsBtn}>Settings</button>
                    <button className="dropdown-item" onClick={this.logOff}>Log off</button>
                </div>
            </div> 
        )
    }
  }

export default UserMenu;