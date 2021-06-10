import React, { Component } from 'react'

export default class PokeItem extends Component {
    render() {
        return (
            <div className="poke-box">
                <p>
                    <img src={this.props.url} width="100" height="100" alt="pokemon" />
                </p>
                <p>
                    {this.props.name}
                </p>
            </div>
        )
    }
}
