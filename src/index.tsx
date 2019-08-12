import React from 'react'
import ReactDOM from 'react-dom'
// import Home from './components/home'
import LoadHome from './components/loadHome'

const Home = React.lazy(() => import('./components/home'));

function App() {
  return (
    <React.Fragment>
      <React.Suspense fallback={<LoadHome />}>
        <Home />
      </React.Suspense>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
