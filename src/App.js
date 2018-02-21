import React, { Component } from "react";
import axios from "axios";
import config from "./config/config";
import { Header } from "./components/Header";
import BeerCard from "./components/BeerCard";

class App extends Component {
  constructor() {
    super();
    this.state = {
      beers: []
    };
  }
  componentWillMount() {
    let $this = this;
    axios
      .get("http://localhost:4040/beers")
      .then(function(response) {
        $this.setState({
          beers: response.data
        });
      })
      .catch(function(error) {
        console.log(error);
      });
  }
  render() {
    return (
      <div>
        <Header title={config.title} />
        <div>
          {this.state.beers.map((beer, i) => (
            <BeerCard
              key={i}
              title={beer.name}
              brewery={beer.brewery}
              ibu={beer.ibu}
              abvrange={beer.abvrange}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default App;
