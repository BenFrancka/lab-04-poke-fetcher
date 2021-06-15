import React, { Component } from 'react'
import './Home.css';

export default class Home extends Component {
    render() {
        return (
            <>
            <h1 className="home-title">
                Welome to the Poke-Fetcher!
            </h1>
            <div>
                <img className= "home-img"src="pokegroup.png" alt="pokemon group"></img>
            </div>
            </>
        )
    }
}
