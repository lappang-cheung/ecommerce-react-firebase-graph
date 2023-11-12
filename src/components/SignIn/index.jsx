import { Component } from 'react'

import Buttons from '../Forms/Button/'

import './styles.scss'
import {signInWithGoogle} from '../../firebase/utils'

class SignIn extends Component {

  handleSubmit = async e => {
    e.preventDefault()
  }

  render() {
    return (
      <div className="signIn">
        <div className="wrap">
          <h2>LogIn</h2>
          <div className="formWarp">
            <form onSubmit={this.handleSubmit}>
              <div className="socialSignin">
                <div className="row">
                  <Buttons onClick={signInWithGoogle}>
                    Sign In With Google
                  </Buttons>
                </div>
              </div>
            </form>
          </div>
        </div>
      </div>
    )
  }
}

export default SignIn
