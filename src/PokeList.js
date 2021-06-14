import React, { Component } from 'react'
import PokeItem from './PokeItem';
import './PokeList.css';
import { Link } from 'react-router-dom';

export default class PokeList extends Component {
    render() {
        return (
            <div className="poke-display">
                {this.props.display && this.props.display.map((item) =>
                <Link className="poke-box" key={item.id} to={`/pokemon/${item._id}`}>
                <PokeItem
                url= {item.url_image}
                name= {item.pokemon}
                />
                </ Link>
                )}
                
            </div>
        )
    }
}
