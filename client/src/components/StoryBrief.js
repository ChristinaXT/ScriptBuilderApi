import React from 'react'
import {Link} from 'react-router-dom'

const StoryBrief = ({ story }) => {
  return (
    story ?
      <div>
        <h3>{story.attributes.title}</h3>
        <p>{story.attributes.synopsis}</p>

        <Link to={`/stories/${story.id}/edit`}>Edit this Story</Link>
      </div> :
      <p>Blank story brief</p>
  )
}

export default StoryBrief
