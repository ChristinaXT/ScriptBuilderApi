import React from 'react'
import {Link} from 'react-router-dom'

const StoryBrief = ({ story }) => {
  return (
    story ?
      <div>
        <h2>{story.attributes.title}</h2>
        <p>{story.attributes.epoch}</p>
        <p>{story.attributes.setting}</p>
        <p>{story.attributes.inciting_incident}</p>
        <p>{story.attributes.character}</p>
        <p>{story.attributes.character_history}</p>
        <p>{story.attributes.synopsis}</p>
        <br></br>
        <p>{story.attributes.notes}</p>

        <Link to={`/stories/${story.id}/edit`}>Edit this Story</Link>
      </div> :
      <p>Blank story brief</p>
  )
}

export default StoryBrief
