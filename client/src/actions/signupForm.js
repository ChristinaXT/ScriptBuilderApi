// synchronous action creators
export const updateSignupForm = formData => {
  return {
    type: "UPDATE_SIGNUP_FORM",
    formData
  }
}

export const resetSignupForm = () => {
  return {
    type: "RESET_SIGNUP_FORM"
  }
}

//every time I build action creators, need to build corresponding reducers to allow them to work
