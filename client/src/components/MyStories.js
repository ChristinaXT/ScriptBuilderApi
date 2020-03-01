import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyStories = props => {
  const storyBriefs = props.stories.length > 0 ?

          props.stories.map(t => (<div className="menu-inner-container"><p key={t.id}><Link to={`/stories/${t.id}`}>{t.attributes.title}</Link>

          <button onClick={() => props.addFavorite(t.id)}> Favorite</button>

          </p></div>)):
          null


//refactor - create a button that will allow for us to mark which our favorites are
  return storyBriefs
 }


const mapStateToProps = state => {
  return {
    stories: state.myStories
  }
}

export default connect(mapStateToProps)(MyStories)
// props, function declaration, components
