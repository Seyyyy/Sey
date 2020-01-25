import React from 'react'
import ReactDOM from 'react-dom'
import Home from '~/components/home'

function App() {
  return (
    <React.Fragment>
      <Home />
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
