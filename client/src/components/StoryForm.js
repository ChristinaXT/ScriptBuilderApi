import React from 'react';
import { updateStoryForm } from '../actions/storyForm'
import { connect } from 'react-redux'


// This means Redux gives us back a prop called updateStoryForm
// which when invoked, Redux will now dispatch
const StoryForm = ({ formData, updateStoryForm, userId, story, handleSubmit, editMode }) => {

  const { synopsis, title, epoch, inciting_incident, setting } = formData

  const handleChange = event => {
    const { name, value } = event.target
    // it's now Redux dispatching the action built by the action
    // creator with the appropriate arguments
    updateStoryForm(name, value)
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
              onChange={handleChange}
              value={title}
            />
            <br></br>
            <input
              placeholder="Synopsis"
              name="summary"
              onChange={handleChange}
              value={synopsis}
              />
              <br></br>
              <input
                placeholder="Epoch"
                name="timeperiod"
                onChange={handleChange}
                value={epoch}
                />
                <br></br>
                <input
                  placeholder="Inciting_incident"
                  name="description"
                  onChange={handleChange}
                  value={inciting_incident}
                  />
                  <br></br>
                  <input
                    placeholder="Setting"
                    name="place"
                    onChange={handleChange}
                    value={setting}
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
