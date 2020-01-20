import { resetStoryForm } from './storyForm'
// synchronous actions
export const setMyStories = stories => {
  return {
    type: "SET_MY_STORIES",
    stories
  }
}

export const clearStories = () => {
  return {
    type: "CLEAR_STORIES"
  }
}

export const addStory = story => {
  return {
    type: "ADD_STORY",
    story
  }
}

export const deleteStorySuccess = storyId => {
  return {
    type: "DELETE_STORY",
    storyId
  }
}

export const updateStorySuccess = story => {
  return {
    type: "UPDATE_STORY",
    story
  }
}

// async actions
// asynchronous action creators returns a function expression and returns a fetch that allows me to dispatch as needed
//fetch the data from our API. We decode the json coming in into an object.
export const getMyStories = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/stories", {
      credentials: "include",
      method: "GET",
      headers: {
        "Content-Type": "application/json"
      },
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setMyStories(response.data))
        }
      })
      .catch(console.log)
  }
}

export const createStory = (storyData, history) => {
  return dispatch => {
    const sendableStoryData = {
      title: storyData.title,
      epoch: storyData.epoch,
      inciting_incident: storyData.inciting_incident,
      setting: storyData.setting,
      synopsis: storyData.synopsis,
      character: storyData.character,
      character_history: storyData.character_history,
      notes: storyData.notes,
    }

    return fetch("http://localhost:3000/api/v1/stories", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableStoryData)
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(addStory(resp.data))
          dispatch(resetStoryForm())
          history.push(`/stories/${resp.data.id}`)

        }
      })
      .catch(console.log)

  }
}

export const updateStory = (storyData, history) => {
  return dispatch => {
    const sendableStoryData = {
      title: storyData.title,
      synopsis: storyData.synopsis,
      epoch: storyData.epoch,
      inciting_incident: storyData.inciting_incident,
      setting: storyData.setting,
      character: storyData.character,
      character_history: storyData.character_history,
      notes: storyData.notes,

    }
    return fetch(`http://localhost:3000/api/v1/stories/${storyData.storyId}`, {
      credentials: "include",
      method: "PATCH",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(sendableStoryData)
    })
    //Then we check for an error.
    //If an error happend we throw it and call our error function. If everything went okay, we call the success action.
    //The reducer handles the rest
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(updateStorySuccess(resp.data))
          history.push(`/stories/${resp.data.id}`)

        }
      })
      .catch(console.log)

  }
}

export const deleteStory = (storyId, history) => {
  return dispatch => {
    return fetch(`http://localhost:3000/api/v1/stories/${storyId}`, {
      credentials: "include",
      method: "DELETE",
      headers: {
        "Content-Type": "application/json"
      }
    })
      .then(r => r.json())
      .then(resp => {
        if (resp.error) {
          alert(resp.error)
        } else {
          dispatch(deleteStorySuccess(storyId))
          history.push(`/stories`)

        }
      })
      .catch(console.log)

  }

}
