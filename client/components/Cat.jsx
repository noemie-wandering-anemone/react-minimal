import React from 'react'

export default function Cat (props) {
  let {cat} = props
  return <li>{cat.name} - {cat.color}</li>
}
