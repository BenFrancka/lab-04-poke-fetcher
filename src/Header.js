import React, { Component } from 'react'
import { NavLink } from 'react-router-dom';
import './Header.css';


export default class Header extends Component {
    render() {
        return (
            <div className= "header">
                <h1>
                    Poke-Fetcher
                </h1>
                <h2>
                <NavLink className="nav-link" exact to="/">
                        Home
                    </NavLink>
                    <NavLink className="nav-link" to="/pokemon">
                        Pokemon
                    </NavLink>
                </h2>
            </div>
        )
    }
}
