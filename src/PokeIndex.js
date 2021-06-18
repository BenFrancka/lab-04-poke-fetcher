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
    direction: '',
    page: 1,
    count: 1
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
  handleDirection = async (e) => {
    await this.setState({ direction: e.target.value });
    this.fetchPokemon();
  }

  handleNextPage = async (e) => {
      await this.setState({page: this.state.page + 1});
      this.fetchPokemon();
  }

  handlePreviousPage = async (e) => {
    await this.setState({page: this.state.page - 1});
    this.fetchPokemon();
}

  //fetches data from pokemon api
  fetchPokemon = async () => {
    this.setState({ loading: true });

    //specifies URL pathing from the API based on user query
        const display = new URLSearchParams({
            sort: 'pokemon',
            direction: this.state.direction,
            page: this.state.page
        });
        if (this.state.query) {
            display.set('pokemon', this.state.query);
        }

        const data = await request.get(
            `https://pokedex-alchemy.herokuapp.com/api/pokedex?${display.toString()}`
        );
        
        this.setState({loading: false});
        this.setState({ pokeDex: data.body.results });
        this.setState({ count:data.body.count })
    };
  

    render() {
        console.log(this.state.count)
        return (
            <>
            <div className="input">
                <Dropdown
                    displayDirection ={this.handleDirection}
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
                {
                this.state.page !== 1 &&
                <button onClick={this.handlePreviousPage}>
                    Previous Page
                </button>
                }
                {
                this.state.page !==
                Math.ceil(this.state.count/20) &&
                <button onClick={this.handleNextPage}>
                    Next Page 
                </button>
                }
            </>
        )
    }
}

