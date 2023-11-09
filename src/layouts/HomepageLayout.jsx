import Header from '../components/Header/index.jsx'

const MainLayout = props => {
  return (
    <div className="fullHeight">
      <Header />
      {props.children}
    </div>
  )
}

export default MainLayout