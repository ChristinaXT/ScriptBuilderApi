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
    title: story.attributes.title,
    synopsis: story.attributes.synopsis,
    epoch: story.attributes.epoch,
    inciting_incident: story.attributes.inciting_incident,
    setting: story.attributes.setting

  }
  return {
    type: "SET_FORM_DATA_FOR_EDIT",
    storyFormData
  }
}
