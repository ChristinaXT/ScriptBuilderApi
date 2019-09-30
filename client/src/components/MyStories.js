import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyStories = props => {
  const storyBriefs = props.stories.length > 0 ?
    props.stories.map(t => (<p key={t.id}><Link to={`/stories/${t.id}`}>{t.attributes.name}</Link></p>)) :
    null

  return storyBriefs
}

// we provide mapStateToProps to Redux in order to tell Redux:
// "Excuse me Redux, would you please provide use access to your state
// so that we may pick and choose the pieces of state we would like availble
// to this particular component as props."

const mapStateToProps = state => {
  return {
    stories: state.myStories
  }
}

export default connect(mapStateToProps)(MyStories)
