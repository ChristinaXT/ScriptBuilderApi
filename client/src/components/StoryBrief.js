import React from 'react'
import {Link} from 'react-router-dom'

const StoryBrief = ({ story }) => {
  return (
    story ?
      <div>
        <h3>{story.attributes.name}</h3>

        <Link to={`/stories/${story.id}/edit`}>Edit this Story</Link>
      </div> :
      <p>Blank story brief</p>
  )
}

export default StoryBrief
