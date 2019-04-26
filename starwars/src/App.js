import React, { Component } from 'react';
import Character from './components/Characters.js'
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      starwarsChars: [],
      character:{
        name: "", 
        height: "", 
        mass: "", 
        hair_color: "", 
        skin_color: "", 
        eye_color: "", 
        birth_year: "", 
        gender: "", 
        homeworld: "", 
        films: [],
        species: [], 
        vehicles:[] ,
        starships:[] ,
        created: "", 
        edited: "", 
        url: "",
      }
    };
  }

  componentDidMount() {
    this.getCharacters('https://swapi.co/api/people/');
  }

  getCharacters = URL => {
    
    fetch(URL)
      .then(res => {
        return res.json();
      })
      .then(data => {
        this.setState({ starwarsChars: data.results });
      })
      .catch(err => {
        throw new Error(err);
      });
  };

  render() {
    return (
      <div className="App">
          <h1 className="Header">React Wars</h1>
          <div className="all-chars">
              <div className="chars-list">
                  {this.state.starwarsChars.map(character=>(
                  <Character character={character} key={character.name} />
                  ))}
              </div>
          </div>
      </div>
    );
  }
}

export default App;
