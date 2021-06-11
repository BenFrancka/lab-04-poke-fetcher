import React, { Component } from 'react'

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
