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
                <button onClick={() => this.getTaco()}>Get Taco</button>

                <h4>Base Layer: {this.state.taco.baseLayer}</h4>
                <h4>Condiments: {this.state.taco.condiment}</h4>
                <h4>Mixin: {this.state.taco.mixin}</h4>
                <h4>Seasoning: {this.state.taco.seasoning}</h4>
                <h4>Shell: {this.state.taco.shell}</h4>
            </div>
        )
    }

}

export default Meal