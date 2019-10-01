import React from 'react';
import { updateStoryForm } from '../actions/storyForm'
import { connect } from 'react-redux'


// This means Redux gives us back a prop called updateStoryForm
// which when invoked, Redux will now dispatch
const StoryForm = ({ formData, updateStoryForm, userId, story, handleSubmit, editMode }) => {

  const { name, synopsis } = formData

  const handleChange = event => {
    const { name, synopsis, value } = event.target
    // it's now Redux dispatching the action built by the action
    // creator with the appropriate arguments
    updateStoryForm(name, synopsis, value)
  }

  return (
    <form onSubmit={event => {
    event.preventDefault()
    handleSubmit(formData)
    }}>
            <h1>Create a New Story: </h1>
            <br></br>
            <input
              placeholder="Title"
              name="name"
              type="text"
              onChange={handleChange}
              value={name}
            />
            <br></br>
            <input
              placeholder="synopsis"
              name="synopsis"
              type="text"
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
