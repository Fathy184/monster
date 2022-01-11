import React, { Component } from "react";
import "./App.css";
import axios from "axios";
import CardList from "./components/card-list/card-list.component.jsx";
import SearchBox from "./components/search-box/search-box.component";
class App extends Component {
  constructor() {
    super();
    this.state = {
      monsters: [],
      searchField: "",
    };
  }
  async componentDidMount() {
    const { data } = await axios("https://jsonplaceholder.typicode.com/users");
    this.setState({ monsters: data });
  }
  handleChange = (e) => {
    this.setState({
      searchField: e.target.value,
    });
  };
  render() {
    const { monsters, searchField } = this.state;
    const filteredMonsters = monsters.filter(({ name }) => {
      return name.toLowerCase().includes(searchField.toLowerCase());
    });
    return (
      <div className="App">
        <h1>Monster Rolodex</h1>
        <SearchBox
          handleChange={this.handleChange}
          type="search"
          placeholder="Search Box"
        />
        <CardList monsters={filteredMonsters} />
      </div>
    );
  }
}

export default App;
