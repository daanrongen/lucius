const {render} = ReactDOM

const style = {
  backgroundColor: 'var(--black)',
  color: 'var(--white)',
  fontFamily: 'Avenir Next'
}

render(
  <h1 id="title" className="header" style={style}>
    Hello World
  </h1>,
  document.getElementById('react-container')
)
