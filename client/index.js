const React = require('react')
const ReactDOM = require('react-dom')

import App from '././components/App'

document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.getElementById('root')
  )
})