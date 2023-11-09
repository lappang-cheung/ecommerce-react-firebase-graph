import { Route, Routes } from 'react-router-dom'

import Header from './components/Header'
import HomePage from './pages/HomePage'
import Registration from './pages/Registration'

import './default.scss'

const App = () => {

  return (
    <div className="App">
      <Header />
      <div className="main">
        <Routes>
          <Route path="/" Component={HomePage} exact/>
          <Route path="/registration" Component={Registration} />
        </Routes>
      </div>
    </div>
  )
}

export default App
