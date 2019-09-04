import React from 'react'
import request from 'superagent'
import Meal from './Meal'

class App extends React.Component {
  

    render() {
        return (
            <React.Fragment>
                <Meal />
            </React.Fragment>
        )
    }
}

export default App