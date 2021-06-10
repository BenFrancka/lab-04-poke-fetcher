import React, { Component } from 'react'
import request from 'superagent';
import './App.css';
import PokeList from './PokeList';
import Dropdown from './Dropdown';
import LoadDisplay from './LoadDisplay';

const sleep = (x) => new Promise((res, rej) => setTimeout(() => { res() }, x))

export default class App extends Component {

  state= {
    pokeDex: [],
    loading: false,
    query: '',
    order: ''
  }

  componentDidMount = async () => {
    await sleep(3000)
    await this.fetchPokemon();
  }

  handleClick = async () => {
    await this.fetchPokemon();
  }

  handleChange = (e) => {
    this.setState({ query: e.target.value });
  }

  handleOrder = (e) => {
    this.setState({ order: e.target.value });
  }

  fetchPokemon = async () => {
    this.setState({ loading: true });

    const URL = this.state.query
      ? `https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon=${this.state.query}&sort=pokemon&direction=${this.state.order}`
      : 'https://pokedex-alchemy.herokuapp.com/api/pokedex?pokemon='

      const pokemon = await request.get(URL)
      await sleep (3000)

      this.setState({ loading: false });
      this.setState( { pokeDex: pokemon.body.results});
  }

  render() {
  
  return (
    <div className="App">
      <Dropdown
        displayOrder ={this.handleOrder}
      />
      <input onChange={this.handleChange} />
      <button onClick={this.handleClick}>Search</button>
      {this.state.loading
        && <LoadDisplay />}
      <PokeList 
        display={this.state.pokeDex}
      />
    </div>
  );
}
}
