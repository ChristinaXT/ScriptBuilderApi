import React from 'react';
import StoryForm from './StoryForm'
import { updateStory, deleteStory } from '../actions/myStories'
import { setFormDataForEdit, resetStoryForm } from '../actions/storyForm'
import { connect } from 'react-redux'

class EditStoryFormWrapper extends React.Component {
  componentDidMount(){
    this.props.story && this.props.setFormDataForEdit(this.props.story)
  }

  componentDidUpdate(prevProps) {
    this.props.story && !prevProps.story && this.props.setFormDataForEdit(this.props.story)
  }

  componentWillUnmount() {
    this.props.resetStoryForm()
  }

  handleSubmit = (formData) => {
    const { updateStory, story, history } = this.props
    updateStory({
      ...formData,
      storyId: story.id
    }, history)
  }

  render() {
    const { history, deleteStory, story } = this.props
    const storyId = story ? story.id : null
    return  <>
              <StoryForm editMode handleSubmit={this.handleSubmit} />
              <br/>
              <button style={{color: "blue"}} onClick={()=>deleteStory(storyId, history)}>Delete this Story</button>
            </>
  }
};

export default connect(null, { updateStory, setFormDataForEdit, resetStoryForm, deleteStory })(EditStoryFormWrapper);
