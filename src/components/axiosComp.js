import React, { Component } from 'react';
import DisplayBeer from './displayBeer'
const axios = require("axios")


class AxiosComp extends Component {
  state={
    beers: []
  }

  getApi = () => {
    return axios.get("https://api.punkapi.com/v2/beers")
      .then(function (response) {
        return response.data
        })
      .catch(function (error) {
      console.log(error);
        })
  }

  consoleBeers = async () => {
      let retrievedBeers = await this.getApi();
      let beerSpecs = []

      for (let i = 0; i < retrievedBeers.length; i++) {
        beerSpecs.push([retrievedBeers[i].name, retrievedBeers[i].tagline, retrievedBeers[i].brewers_tips, retrievedBeers.img_url])
      }

      this.setState({beers: beerSpecs})
  };

  render() {
    return (
      <div>
        <button onClick={this.consoleBeers}>
          BUBBA HOLD MY BEER
        </button>
        <div className="grid-container">
        <DisplayBeer beers={this.state.beers}/>
        </div>
      </div>
    )
  }
} 

export default AxiosComp;