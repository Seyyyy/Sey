import React from 'react'
import ReactDOM from 'react-dom'
import LoadHome from './components/loadHome'
import Fadein from './styles/fadein'

const Home = React.lazy(() => import('./components/home'));

function App() {
  return (
    <React.Fragment>
      <React.Suspense fallback={<LoadHome />}>
        <Fadein>
          <Home />
        </Fadein>
      </React.Suspense>
    </React.Fragment>
  )
}

ReactDOM.render(<App />, document.querySelector('#root'))
