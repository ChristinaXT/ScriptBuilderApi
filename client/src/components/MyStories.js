import React from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

const MyStories = props => {
  const storyBriefs = props.stories.length > 0 ?
    props.stories.map(t => (<p key={t.id}><Link to={`/stories/${t.id}`}>{t.attributes.title}</Link></p>)) :
    null

  return storyBriefs
}

// mapStateToProps says these are the pieces of data that I need
// state of the redux store
// returning data type of object whose keys are whatever I want to call it and it comes from the actual store

const mapStateToProps = state => {
  return {
    stories: state.myStories
  }
}

export default connect(mapStateToProps)(MyStories)
