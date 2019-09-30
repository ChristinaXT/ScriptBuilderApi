// sync actions

export const updateStoryForm = (name, value) => {
  const formData = { name, value }
  return {
    type: "UPDATE_NEW_STORY_FORM",
    formData
  }
}

export const resetStoryForm = () => {
  return {
    type: "RESET_NEW_STORY_FORM",
  }
}

export const setFormDataForEdit = story => {
  const storyFormData = {
    name: story.attributes.name,
    synopsis: story.attributes.synopsis
  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    storyFormData
  }
}
