import React, { Component } from 'react';
import UserMenu from './User-menu/userMenu'

class Header extends Component {

    logoClick = () =>
    {
        this.props.setDisplay('list');
    }

    render() {
        return (
            <div className="Header">
                <header className="navbar navbar-light bg-dark text-white shadow-lg">
                    <div onClick={this.logoClick} className="navbar-brand text-white">
                        <h3>Logo</h3>
                    </div>
                    <UserMenu setDisplay={this.props.setDisplay} login={this.props.login} setLogin={this.props.setLogin}/>
                </header>
            </div>
        )
    }
  }

export default Header;