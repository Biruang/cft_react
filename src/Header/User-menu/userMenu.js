import React, { Component } from 'react';

class UserMenu extends Component {
    render() {
        return (
            <div className="UserMenu form-inline">
                <h4 className="mr-sm-2">Carma:</h4>
                <h4 id="Carma" className="mr-sm-4">0</h4>
                <div className="dropdown my-2 my-sm-0"></div>
                <button className="btn btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton" data-toggle="dropdown"></button>
                <div className="dropdown-menu dropdown-menu-right" aria-labelledby="dropdownMenuButton">
                    <button className="dropdown-item">Settings</button>
                    <button className="dropdown-item">Log off</button>
                </div>
            </div> 
        )
    }
  }

export default UserMenu;