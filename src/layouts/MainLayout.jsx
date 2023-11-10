import Header from '../components/Header/index.jsx'
import Footer from '../components/Footer/index.jsx'

const MainLayout = props => {
  return (
    <div>
      <Header />
      <div className="main">
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default MainLayout