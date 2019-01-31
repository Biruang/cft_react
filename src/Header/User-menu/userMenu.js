import React, { Component } from 'react';

class UserMenu extends Component {
    settingsBtn = () => {
        this.props.setDisplay('settings')
    }

    logOff = () => {
        this.props.setLogin(null)
    }

    render() {
        return (
            <div className="UserMenu form-inline">
                <h4 className="mr-sm-2">Carma:</h4>
                <h4 id="Carma" className="mr-sm-4">0</h4>
                <div className="dropdown my-2 my-sm-0"></div>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown">{this.props.login}</button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item" onClick={this.settingsBtn}>Settings</button>
                    <button className="dropdown-item" onClick={this.logOff}>Log off</button>
                </div>
            </div> 
        )
    }
  }

export default UserMenu;