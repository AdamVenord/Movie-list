import React, { Component } from "react"
import List from "./List"
// import { Container, } from "semantic-ui-react"
import MovieForm from './MovieForm'
import Footer from './Footer'

class App extends Component {
  state = {
    movies: [
      { id: 1, name: "Baby Driver", complete: false, },
      { id: 2, name: "Lotr", complete: false, },
      { id: 3, name: "My hero acadamia", complete: false, },
      { id: 4, name: "Howl Floating castle", complete: false, },
      { id: 5, name: "Hotel Chavalier", complete: false, },
    ], 
    fliter: 'All'
  }

  setFilter = (filter) => {
    this.setState({ filter })
  }

  getUniqId = () => {
    return Math.floor((1 + Math.random()) * 0x10000)
    .toString(16)
    .substring(1)
  }

  addItem = (name) => {
    const { movies } = this.state;
    const movie = { name, id: this.getUniqId() , complete: false }
    this.setState({ movies: [movie, ...movies] });
  }

  handleClick = (id) => {
    const { movies } = this.state;
    this.setState({
      movies: movies.map( movie => {
        if (movie.id === id) {
          return {
            ...movie, 
            complete: !movie.complete
          }
        }
        return movie
      })
    })
  }

  visibleItems = () => {
    const { movies, filter } = this.state;
    switch(filter){
      case 'Active':
        return movies.filter( t => !t.complete )
      case 'Complete':
        return movies.filter( t=> t.complete )
      default:
        return movies;
    }
  }

  render() {
    const { movie, filter } = this.state;

    return (
      <div>
        <MovieForm addItem={this.addItem} />
        <List name="Movie List" items={this.visibleItems()} movieClick={this.handleClick} />
        <Footer filter={filter} setFilter={this.setFilter} />
      </div>
    );
  }
}

export default App;