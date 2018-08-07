import React from 'react'
import {render} from 'react-dom'
import {SeatedBehaviour} from './components/seated-behaviour'

window.React = React

render(
  <SeatedBehaviour total={184} seated={102} movement={true} ledStrip={true} />,
  document.getElementById('react-container')
)
