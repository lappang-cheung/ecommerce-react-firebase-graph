// Required
import { Route, Routes } from 'react-router-dom'
// Layouts
import MainLayout from './layouts/MainLayout.jsx'
import HomepageLayout from "./layouts/HomepageLayout.jsx";
// Pages
import HomePage from './pages/HomePage'
import Registration from './pages/Registration'
import Login from './pages/Login/'

import './default.scss'

const App = () => {

  return (
    <div className="App">
      <Routes>
        <Route exact path="/" Component={() => (
          <HomepageLayout>
            <HomePage />
          </HomepageLayout>
        )} />
        <Route path="/registration" Component={() => (
          <MainLayout>
            <Registration />
          </MainLayout>
        )}/>
        <Route path="/login" Component={() => (
          <MainLayout>
            <Login />
          </MainLayout>
        )}/>
      </Routes>
    </div>
  )
}

export default App
