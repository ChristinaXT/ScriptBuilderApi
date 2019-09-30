import React from 'react';
//  Grab the action creator
import { updateStoryForm } from '../actions/storyForm'
import { connect } from 'react-redux'


// This means Redux gives us back a prop called updateStoryForm
// which when invoked, Redux will now dispatch
const StoryForm = ({ formData, updateStoryForm, userId, story, handleSubmit, editMode }) => {

  const { name } = formData

  const handleChange = event => {
    console.log("trigger Handle change")
    const { name, value } = event.target
    // This is not an invocation of just the action creator,
    // it's now Redux dispatching the action built by the action
    // creator with the appropriate arguments
    updateStoryForm(name, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <input
        placeholder="name"
        name="name"
        onChange={handleChange}
        value={name}
      /><br/>
      <input
        placeholder="synopsis"
        name="synopsis"
        onChange={handleChange}
        value={synopsis}
      /><br/>
      <input
        type="submit"
        value={editMode ? "Update Story" : "Create Story" }
      />
    </form>
)};

const mapStateToProps = state => {
  const userId = state.currentUser ? state.currentUser.id : ""
  return {
    formData: state.storyForm,
    userId
  }
}

// We pass the action creator to redux's connect function
// using either mapDispatchToProps or the shorthand object syntax seen below.
export default connect(mapStateToProps, { updateStoryForm })(StoryForm);
