import React from 'react'
import request from 'superagent'

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      char: 'No character just yet friends',
      homeworld: 'Press the button to find out!',
      species: 'Press the button to find out!',
      eyes: 'Press the button to find out!',
      hair: 'Press the button to find out!'
    }
  }

  getChar = () => {
    request.get('https://swapi.co/api/people/5/')
    .then(result => {
      console.log(result)
      this.setState({
        char: result.body.name,
        homeworld: result.body.homeworld,
        species: result.body.species,
        eyes: result.body.eye_color,
        hair: result.body.hair_color
      })
    })
  }

  render() {
    return (
      <React.Fragment>
        <button onClick={this.getChar}>Grab that character!</button>
        <h1>Character: {this.state.char}</h1>
        <h1>Homeworld: {this.state.homeworld}</h1>
        <h1>Species: {this.state.species}</h1>
        <h1>Eye Colour: {this.state.eyes}</h1>
        <h1>Hair Colour: {this.state.hair}</h1>
      </React.Fragment>
    )
  }
}

export default App