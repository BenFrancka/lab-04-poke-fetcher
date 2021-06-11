import React, { Component } from 'react'
import './LoadDisplay.css';

export default class LoadDisplay extends Component {
    render() {
        return (
            <p className= "pokeball">
                <img src="pokespinner.gif" width= "200" alt="spinner" />
            </p>
        )
    }
}
