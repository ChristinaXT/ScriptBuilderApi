import React from 'react'
import { connect } from 'react-redux'
import { updateLoginForm } from "../actions/loginForm.js"
import { login } from "../actions/currentUser.js"


const Login = ({ loginFormData, updateLoginForm, login, history }) => {

  const handleInputChange = event => {
    const { name, value } = event.target
    const updatedFormInfo = {
      ...loginFormData,
      [name]: value
    }
    updateLoginForm(updatedFormInfo)
  }

  const handleSubmit = event => {
    event.preventDefault()
    login(loginFormData, history)
  }

  return (
    <form onSubmit={handleSubmit}>
      <input placeholder="username" value={loginFormData.username} name="username" type="text" onChange={handleInputChange} /><br></br><br></br>
      <input placeholder="password" value={loginFormData.password} name="password" type="text" onChange={handleInputChange} /><br></br><br></br>
      <input type="submit" value="Log In"/>
    </form>
  )
}


const mapStateToProps = state => {
  return {
    loginFormData: state.loginForm
  }
}
// mapStateToProps connects the data to the reducer
export default connect(mapStateToProps, { updateLoginForm, login } )(Login)

//we use connect to connect it to our redux store. Connect takes two parameters:
//One function mapStateToProps which maps parts of the state into your
//components props and one function mapDispatchToProps which maps functions into your props which are,
//when called, dispatched to redux.
