import React, { Component } from 'react'
import PokeItem from './PokeItem';
import './PokeList.css';

export default class PokeList extends Component {
    render() {
        return (
            <div className="poke-display">
                {this.props.display && this.props.display.map((item, i) =>
                <PokeItem
                key= {i}
                url= {item.url_image}
                name= {item.pokemon}
                />
                )}
                
            </div>
        )
    }
}
