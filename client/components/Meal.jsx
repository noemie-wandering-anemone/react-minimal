import React from 'react'
import request from 'superagent';

class Meal extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            taco: {
                baseLayer: 'base layer',
                condiment: 'condiment',
                mixin: 'mix in',
                seasoning: 'seasoning',
                shell: 'shell',
            }
        }
        this.getTaco = this.getTaco.bind(this)

        this.getTaco
    }
    getTaco() {
        request.get('http://taco-randomizer.herokuapp.com/random/')
            .then(result => {
                console.log(result.body)
                this.setState({
                    taco: {
                        baseLayer: result.body.base_layer.name,
                        condiment: result.body.condiment.name,
                        mixin: result.body.mixin.name,
                        seasoning: result.body.seasoning.name,
                        shell: result.body.shell.name,
                    }

                })
            })
    }
    render() {
        return (
            <div className='meal'>
                <h2>Base Layer: {this.state.taco.baseLayer}</h2>
                <h2>Condiments: {this.state.taco.condiment}</h2>
                <h2>Mixin: {this.state.taco.mixin}</h2>
                <h2>Seasoning: {this.state.taco.seasoning}</h2>
                <h2>Shell: {this.state.taco.shell}</h2>

                <button onClick={() => this.getTaco()}>Get Taco</button>
            </div>
        )
    }

}

export default Meal