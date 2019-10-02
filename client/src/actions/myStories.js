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
      user_id: storyData.userId
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
      setting: storyData.setting
    }
    return fetch(`http://localhost:3000/api/v1/stories/${storyData.storyId}`, {
      credentials: "include",
      method: "PATCH",
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
