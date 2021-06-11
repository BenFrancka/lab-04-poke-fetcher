import React, { Component } from 'react'
import './Input.css';

export default class Input extends Component {
    render() {
        return (
            <>
               <input onChange={this.props.handleChange} placeholder= "Search Pokemon Names">
               </input>
            </>
        )
    }
}
