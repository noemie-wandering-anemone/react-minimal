import React from 'react'
import request from 'superagent'
import Meal from './Meal'
import Joke from './Jokes'

class App extends React.Component {
  

    render() {
        return (
            <React.Fragment>
                <h1>REACT and WEB APIs</h1>
                <p></p>
                <h2>Make a Taco</h2>
                <Meal />
                <p></p>
                <h2>Dad Jokes</h2>
                <Joke /> 
                <h2>Joke</h2>
                <Joke /> 
                <h2>Joke</h2>
                <Joke /> 
            </React.Fragment>
        )
    }
}

export default App