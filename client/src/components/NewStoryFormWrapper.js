import React from 'react';
import StoryForm from './StoryForm'
import { createStory } from '../actions/myStories'
import { connect } from 'react-redux'

const NewStoryFormWrapper = ({ history, createStory }) => {

  const handleSubmit = (formData, userId) => {

    createStory({
      ...formData,
      userId
    }, history)
    
  }
  return  <StoryForm history={history} handleSubmit={handleSubmit} />
};

export default connect(null, { createStory })(NewStoryFormWrapper);
