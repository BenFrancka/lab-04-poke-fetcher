import React, { Component } from 'react'
import request from 'superagent';
import LoadDisplay from './LoadDisplay';

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

        const pokemonId = this.props.match.params.pokeId;
        const data = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex/${pokemonId}`
        );
    
        this.setState({ pokemonDetail: data.body });
        this.setState({ loading: false });
    };
    render() {
        return (
            <div>
                {this.state.loading
                && <LoadDisplay />}
                {!this.state.loading && (
                    <>
                    <h1>
                        Pokemon Details 
                    </h1>
                    <p>
                        {this.props.match.params.pokemonId}
                    </p>
                    <p>
                        {this.state.pokemonDetail.pokemon}
                    </p>
                    </>
                )}
            </div>
        )
    }
}
