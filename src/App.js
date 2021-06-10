import React, { Component } from 'react'
import request from 'superagent';
import './App.css';
import PokeList from './PokeList';
import Dropdown from './Dropdown';

export default class App extends Component {

  state= {
    pokeDex: [],
    loading: false,
    query: ''
  }

  componentDidMount = async () => {
    await this.fetchPokemon();
  }

  handleClick = async () => {
    await this.fetchPokemon();
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  fetchPokemon = async () => {
    this.setState({ loading: true });

    const URL = this.state.query
      ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}`
      : 'https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon='

      const pokemon = await request.get(URL)

      this.setState({ loading: false });
      this.setState( { pokeDex: pokemon.body});
  }

  render() {
  return (
    <div className="App">
      <Dropdown />
      <input onChange={this.handleChange} />
      <button onClick={this.handleClick}>Search</button>
      <PokeList />
    </div>
  );
}
}
