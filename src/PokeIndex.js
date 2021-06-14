import React, { Component } from 'react'
import request from 'superagent';

import PokeList from './PokeList';
import Dropdown from './Dropdown';
import LoadDisplay from './LoadDisplay';
import Input from './Input';

//sets timer for loading spinner display validation
const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class PokeIndex extends Component {
    //declares initial state for the app
  state= {
    pokeDex: [],
    loading: false,
    query: '',
    order: 'asc'
  }

  //renders initial page with all images displayed
  componentDidMount = async () => {
    await sleep(3000)
    await this.fetchPokemon();
  }

  //fetches and displays images from api on button click
  handleClick = async () => {
    await this.fetchPokemon();
  }

  //sets state of what images will be displayed based on user input
  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  //sets state of how images will be ordered based on user selection
  handleOrder = (e) => {
    this.setState({ order: e.target.value });
  }

  //fetches data from pokemon api
  fetchPokemon = async () => {
    this.setState({ loading: true });

    //specifies URL pathing from the API based on user query
        const searchParams = new URLSearchParams({
            sort: 'pokemon',
            order: this.state.direction,
        });
        if (this.state.query) {
            searchParams.set('pokemon', this.state.query);
        }
        console.log(searchParams.toString());
        const {
            body: { results: data },
        } = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex?${searchParams.toString()}`
        );
        this.setState({loading: false});
        this.setState({ pokemon: data });
    };
  

    render() {
        return (
            <>
            <div className="input">
                <Dropdown
                    displayOrder ={this.handleOrder}
                />
                <Input 
                    handleChange ={this.handleChange}
                />
                <button onClick={this.handleClick}>Search</button>
            </div>

                {this.state.loading
                && <LoadDisplay />}

                <PokeList 
                display={this.state.pokeDex}
                />
            </>
        )
    }
}

