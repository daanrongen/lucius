import React from 'react'
import text from './titles.json'

export const hello = (
  <h1
    id="title"
    className="header"
    style={{
      backgroundColor: '#1a1919',
      color: '#fefefe',
      fontFamily: 'Avenir Next'
    }}
  >
    {text.hello}
  </h1>
)

export const goodbye = (
  <h1
    id="title"
    className="header"
    style={{
      backgroundColor: '#fefefe',
      color: '#1a1919',
      fontFamily: 'Avenir Next'
    }}
  >
    {text.goodbye}
  </h1>
)
