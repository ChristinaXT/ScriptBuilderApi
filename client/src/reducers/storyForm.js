const initialState = {
  name: "",
  synopsis: "",
}

export default (state=initialState, action) => {
  switch (action.type) {
    case "UPDATE_NEW_STORY_FORM":
      const returnVal = {
        ...state,
        [action.formData.name]: action.formData.value
      }
      return returnVal
    case "RESET_NEW_STORY_FORM":
      return initialState
    case "SET_FORM_DATA_FOR_EDIT":
      return action.storyFormData
    default:
      return state
  }
}
