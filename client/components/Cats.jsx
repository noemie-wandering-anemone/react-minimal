import React from 'react'
import Cat from './Cat'

export default function Cats(props) {
  let {cats} = props
  return (
    <ul>
      {cats.map((catData) => <Cat key={catData.name} cat={catData} favouriteFood='bananas' />)}
    </ul>
  )
}
