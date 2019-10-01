import React from 'react';
//  Grab the action creator
import { updateStoryForm } from '../actions/storyForm'
import { connect } from 'react-redux'


// This means Redux gives us back a prop called updateStoryForm
// which when invoked, Redux will now dispatch
const StoryForm = ({ formData, updateStoryForm, userId, story, handleSubmit, editMode }) => {

  const { name, text } = formData

  const handleChange = event => {
  //  console.log("trigger Handle change")
    const { name, text, value } = event.target
    // This is not an invocation of just the action creator,
    // it's now Redux dispatching the action built by the action
    // creator with the appropriate arguments
    updateStoryForm(name, text, value)
  }

  return (
    <form onSubmit={event => {
      event.preventDefault()
      handleSubmit(formData)
    }}>
      <input
        placeholder="Title"
        name="name"
        onChange={handleChange}
        value={name}
      /><br/>
      <input
        placeholder="Synopsis"
        type="text"
        onChange={handleChange}
        value={text}
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
