import React from 'react'
import {Link} from 'react-router-dom'

const StoryBrief = ({ story }) => {
  return (
    story ?
      <div className="story">
        <h2>{story.attributes.title}</h2>
        <div className="story-brief">
          <p>EPOCH: {story.attributes.epoch}</p>
          <p>SETTING: {story.attributes.setting}</p>
          <p>INCITING INCIDENT: {story.attributes.inciting_incident}</p>
          <p>CHARACTERS: {story.attributes.character}</p>
          <p>CHARACTERS HISTORIES: {story.attributes.character_history}</p>
          <p>SYNOPSIS: {story.attributes.synopsis}</p>
          <br></br>
          <p>SPECIAL NOTES: {story.attributes.notes}</p>
        </div>

        <Link to={`/stories/${story.id}/edit`}>Edit this Story</Link>
      </div> :
      <p>Blank story brief</p>
  )
}

export default StoryBrief
