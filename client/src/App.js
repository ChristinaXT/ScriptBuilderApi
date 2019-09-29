import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'

class App extends React.Component {

  componentDidMount() {
      this.props.getCurrentUser()
    }

  render (){
    const { loggedIn, stories } = this.props
   return (
    <Login/>
  );
 }

 const mapStateToProps = state => {
   return ({
     loggedIn: !!state.currentUser,
    // stories: state.myStories
   })
 }

 export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
