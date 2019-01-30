import React, { Component } from 'react';
import UserMenu from './User-menu/userMenu'

class Header extends Component {
    render() {
        return (
            <div className="Header">
                <header className="navbar navbar-light bg-dark text-white shadow-lg">
                    <a href="./cardList.html" className="navbar-brand text-white">
                        <h3>Logo</h3>
                    </a>
                    <UserMenu />
                </header>
            </div>
        )
    }
  }

export default Header;