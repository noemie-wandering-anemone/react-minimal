import React from 'react'
import request from 'superagent'
const xml2jsParser = require('superagent-xml2jsparser')


class Joke extends React.Component {
    constructor(props) {
        super(props)
        this.state={
                joke:''
        }
        this.getJoke = this.getJoke.bind(this)

        this.getJoke()

    }
    getJoke() {
        return request.get('/api/jokes')
            .then(result => {
                this.setState({
                    joke: result.body.attachments[0].fallback
                })
            })
    }
    render() {
        return (
            <div className='joke'>
                <button onClick={() => this.getJoke()}> Tell me a dad joke!</button>
                <p>{this.state.joke}</p>
            </div>
        )
    }
}

export default Joke