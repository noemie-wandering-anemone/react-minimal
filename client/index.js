import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

const data = {
  name: 'humans',
  cats: [
    {name: 'tom', color: 'grey'},
    {name: 'jerry', color: 'brown'}
  ]
}

const placeToMount = document.getElementById('root')

ReactDOM.render(<App data={data} />, placeToMount)
