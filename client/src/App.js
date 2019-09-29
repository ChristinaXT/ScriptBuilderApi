import React from 'react';
import './App.css';
import { connect } from 'react-redux'
import { getCurrentUser } from "./actions/currentUser.js"
import NavBar from './components/NavBar.js'
import Login from './components/Login.js'
import Signup from './components/Signup.js'
import MyStories from './components/MyStories.js'
import StoryCard from './components/StoryCard.js'
import NewStoryFormWrapper from './components/NewStoryFormWrapper.js'
import EditStoryFormWrapper from './components/EditStoryFormWrapper.js'
import { Route, Switch, withRouter } from 'react-router-dom'

class App extends React.Component {

  componentDidMount() {
      this.props.getCurrentUser()
    }

  render (){
    const { loggedIn, stories } = this.props
   return (
     <div className="App">
         { loggedIn ? <NavBar location={this.props.location}/> : <Home/> }
         <Switch>
           <Route exact path='/signup' render={({history})=><Signup history={history}/>}/>
           <Route exact path='/login' component={Login}/>
           <Route exact path='/stories' component={MyStories}/>
           <Route exact path='/stories/new' component={NewStoryFormWrapper}/>
           <Route exact path='/stories/:id' render={props => {

               const story = stories.find(story => story.id === props.match.params.id)
               console.log(story)
               return <StoryCard story={story} {...props}/>
             }
           }/>
         <Route exact path='/stories/:id/edit' render={props => {

               const story = stories.find(story => story.id === props.match.params.id)
               // dispatch updateForm -> story
               return <EditStoryFormWrapper story={story} {...props}/>
             }
           }/>
         </Switch>
       </div>
     );

   }
 }


 const mapStateToProps = state => {
   return ({
     loggedIn: !!state.currentUser,
     stories: state.myStories
   })
 }

 export default withRouter(connect(mapStateToProps, { getCurrentUser })(App));
