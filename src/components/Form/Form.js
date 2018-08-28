import React, { Component } from "react";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      search: '',
    }

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e) {
    this.setState({search: e.target.value});
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.search(this.state.search);
  }
  
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <input type="text" name="search" onChange={this.handleChange}></input>
        <input type="submit" value="search"></input>
      </form>
  )}
}

export default Form;
