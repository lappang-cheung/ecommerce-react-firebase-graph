import Header from '../components/Header/index.jsx'

const MainLayout = props => {
  return (
    <div>
      <Header />
      <div className="main">
        {props.children}
      </div>
    </div>
  )
}

export default MainLayout