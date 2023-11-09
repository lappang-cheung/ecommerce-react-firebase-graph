import Header from './components/Header/index.jsx'
import HomePage from './pages/HomePage/index.jsx'

import './default.scss'

const App = () => {

  return (
    <div className="App">
      <Header />
      <div className="main">
        <HomePage />
      </div>
    </div>
  )
}

export default App
