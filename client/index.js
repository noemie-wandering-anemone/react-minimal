import React from 'react'
import ReactDOM from 'react-dom'

import App from './components/App'

DocumentFragment.addEventListner('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,

    document.getElementById('app')
  )
})
