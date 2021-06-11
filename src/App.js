import React, { Component } from 'react'
import request from 'superagent';
import './App.css';
import PokeList from './PokeList';
import Dropdown from './Dropdown';
import LoadDisplay from './LoadDisplay';

//sets timer for loading spinner display validation
const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class App extends Component {

  //declares initial state for the app
  state= {
    pokeDex: [],
    loading: false,
    query: '',
    order: ''
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
    this.setState({ order: e.target.value }, this.fetchPokemon);
  }

  //fetches data from pokemon api
  fetchPokemon = async () => {
    this.setState({ loading: true });

    const queryURL = this.state.query
      ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.order}`
      : 'https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon='
    
      const orderURL = this.state.order
        ?  `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.order}`
        : 'https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon='

      const pokemon = await request.get(queryURL)
      const pokemonOrder = await request.get(orderURL)
      await sleep (3000)

      this.setState({ loading: false });
      this.setState( { pokeDex: pokemon.body.results });
      this.setState({order: pokemonOrder.body.results.direction });
  }

  render() {
  console.log(this.state.order);
  return (
    <main>
      <div className="App">

        <div className="input">
          <Dropdown
            displayOrder ={this.handleOrder}
            display={this.state.order}
          />

          <input onChange={this.handleChange} />
          <button onClick={this.handleClick}>Search</button>
        </div>

        {this.state.loading
          && <LoadDisplay />}

        <PokeList 
          display={this.state.pokeDex}
        />
      </div>
    </main>
  );
}
}
