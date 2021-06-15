import React, { Component } from 'react'
import request from 'superagent';
import LoadDisplay from './LoadDisplay';
import './PokeDetail.css';

export default class PokeDetail extends Component {

    state = {
        pokemonDetail: {},
        loading: false,
    };
    componentDidMount() {
        this.fetchDetail();
    }

    fetchDetail = async () => {
        this.setState({ loading: true });

        const pokemonId = this.props.match.params.id;
        const data = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex/${pokemonId}`
        );
    
        this.setState({ pokemonDetail: data.body });
        this.setState({ loading: false });
    };
    render() {
        return (
            <>
            <p className="poke-ball">
                {this.state.loading
                && <LoadDisplay />}
            </p>
            <div className="detail-display">
                {!this.state.loading && (
                    <>
                    <h1>
                        Pokemon Details 
                    </h1>
                    <p>
                        Variety: 
                        {this.state.pokemonDetail.pokemon}
                    </p>
                    <p>
                        <img src={this.state.pokemonDetail.url_image} alt="pokemon" />
                    </p>
                    <p>
                        Height:
                        {this.state.pokemonDetail.height}
                    </p>
                    <p>
                        Weight:
                        {this.state.pokemonDetail.weight}
                    </p>
                    <p>
                        Type: 
                        {this.state.pokemonDetail.type_1}
                    </p>
                    </>
                )}
            </div>
            </>
        )
    }
}
