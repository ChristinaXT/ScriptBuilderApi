import { resetLoginForm } from "./loginForm.js"
import { resetSignupForm } from "./signupForm.js"
import { getMyStories, clearStories } from "./myStories.js"

// synchronous action creators returns javascript objects
export const setCurrentUser = user => {
  return {
    type: "SET_CURRENT_USER",
    user
  }
}

export const clearCurrentUser = () => {
  return {
    type: "CLEAR_CURRENT_USER"
  }
}

// asynchronous action creators returns a function expression and returns a fetch that allows me to dispatch as needed
export const login = (credentials, history) => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/login", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(credentials)
    })

      .then(r => r.json())
      .then(response => {
        //console.log(response)
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getMyStories())
          dispatch(resetLoginForm())
          history.push('/')
        }
      })
      // .catch(console.log)
  }
}

export const signup = (credentials, history) => {
  return dispatch => {
    const userInfo = {
      user: credentials
    }
    return fetch("http://localhost:3000/api/v1/signup", {
      credentials: "include",
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(userInfo)
    })
      .then(r => r.json())
      .then(response => {
        if (response.error) {
          alert(response.error)
        } else {
          dispatch(setCurrentUser(response.data))
          dispatch(getMyStories())
          dispatch(resetSignupForm())
          history.push('/')
        }
      })
      // .catch(console.log)
  }
}


export const logout = event => {
  return dispatch => {
    dispatch(clearCurrentUser())
    dispatch(clearStories())
    return fetch('http://localhost:3000/api/v1/logout', {
      credentials: "include",
      method: "DELETE"
    })
  }
}

export const getCurrentUser = () => {
  return dispatch => {
    return fetch("http://localhost:3000/api/v1/get_current_user", {
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
          dispatch(setCurrentUser(response.data))
          dispatch(getMyStories())
        }
      })
      // .catch(console.log)
    }
}
