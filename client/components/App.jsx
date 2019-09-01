import React from 'react'
import Cats from './Cats'

export default function App (props) {
  let {cats, name} = props.data
  let newCats = [{name: 'ben', color: 'orange'}]
  return (
    <div>
      <div id='bananas' style={{backgroundColor: 'red'}}>hello {name}</div>
      <Cats cats={cats} />
    </div>
  )
}
