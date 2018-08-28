import React, { Component } from 'react';
import './App.css';
import Form from './components/Form';
import Data from './components/Data';

const axios = require('axios');

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movie: false,
      message: '',
    }
    this.search = this.search.bind(this);
  }

  search(str) {
    if(str.length <2) {
      this.setState({message: "Search needs to include at least 2 characters"});
      return
    } else {
      const newStr = str.replace(/\s/gi, '+');
      const url = 'http://www.omdbapi.com/?apikey=977d388a&t='+ newStr;
      axios.get(url)
      .then((res) => {
        console.log("success!", res.data);
        this.setState({movie: res.data});
        console.log(this.state.movie);
      })
      .catch((err) => {
        console.log("error!", err);
        if(this.data.data.error) {
          this.setState({message: this.data.data.error});
        } 
      })
    }
  }

  render() {
    return (
      <div className="App">
        <h1>Movie Data</h1>
        <Form search={this.search}/>
        <p>{this.state.message}</p>
        <Data movie={this.state.movie}/>
      </div>
    );
  }
}

export default App;
