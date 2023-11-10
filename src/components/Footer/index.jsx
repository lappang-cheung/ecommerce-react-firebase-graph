import './styles.scss'

const Footer = props => {
  return (
    <footer className="footer">
      <div className="wrap">
        &copy; eCommerce {new Date().getFullYear()}
      </div>
    </footer>
  )
}

export default Footer