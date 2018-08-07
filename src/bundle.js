'use strict'

var _ReactDOM = ReactDOM,
  render = _ReactDOM.render

var style = {
  backgroundColor: 'var(--black)',
  color: 'var(--white)',
  fontFamily: 'Avenir Next'
}

render(
  React.createElement(
    'h1',
    {id: 'title', className: 'header', style: style},
    'Hello World'
  ),
  document.getElementById('react-container')
)
