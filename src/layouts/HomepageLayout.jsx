import Header from '../components/Header/index.jsx'
import Footer from '../components/Footer/index.jsx'

const MainLayout = props => {
  return (
    <div className="fullHeight">
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}

export default MainLayout