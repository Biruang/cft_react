import React, { Component } from 'react';
import UserMenu from './User-menu/userMenu'
import logo from './logo.svg'

class Header extends Component {

    logoClick = () =>
    {
        this.props.setDisplay('list');
    }

    render() {
        return (
            <div className="Header">
                <header className="navbar navbar-light text-white bg-primary shadow-lg">
                    <div onClick={this.logoClick} className="navbar-brand text-white">
                        <img src={ logo } width="30" height="30" className="d-inline-block align-top mr-2" alt="" />
                        Good work 
                    </div>
                    <UserMenu setDisplay={this.props.setDisplay} login={this.props.login} coins={this.props.coins} setLogin={this.props.setLogin}/>
                </header>
            </div>
        )
    }
  }

export default Header;