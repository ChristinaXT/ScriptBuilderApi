const initialState = []

export default (state = initialState, action) => {
  switch (action.type) {
    case "SET_MY_STORIES":
      return action.stories
    case "ADD_STORY":
      return state.concat(action.story)
    case "UPDATE_STORY":
      return state.map(story => story.id === action.story.id ? action.story : story)
    case "DELETE_STORY":
      //console.log( "action.storyId is ", action.storyId)
      return state.filter(story => story.id === action.storyId ? false : true)
    case "CLEAR_STORIES":
      return initialState
    default:
      return state
  }
}
