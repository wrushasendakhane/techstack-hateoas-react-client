import axios from "axios"
import CapabilityActionTypes from "./capability.types"

let URL = "http://localhost:8080/dashboard"

if (process.env.NODE_ENV === 'production') {
  URL = "https://techstack-hateoas-api.herokuapp.com/dashboard"
}

export const fetchCapabilities = () => {
  return dispatch => {
    axios.get(URL)
      .then(response => dispatch(setCapabilities(response.data)))
      .catch(error => dispatch(errorCapability(error.response.data)))
  }
}
export const getCapability = (id) => {
  return {
    type: CapabilityActionTypes.GET_CAPABILITY,
    payload: id
  }
}

export const clearCapability = () => {
  return {
    type: CapabilityActionTypes.CLEAR_CAPABILITY,
  }
}

export const clearError = () => {
  return {
    type: CapabilityActionTypes.CLEAR_ERROR,
  }
}

export const setCapabilities = (capabilities) => {
  return {
    type: CapabilityActionTypes.SET_CAPABILITIES,
    payload: capabilities
  }
}

export const addCapability = (capability, createLink, hideModal) => {
  return dispatch => {
    axios.post(createLink, capability)
      .then(response => {
        dispatch({
          type: CapabilityActionTypes.ADD_CAPABILITY,
          payload: response.data
        })
        hideModal()
      })
      .catch(error =>
        dispatch(errorCapability(error.response.data))
      )
  }
}

export const updateCapability = (capability, updateLink, hideModal) => {
  return dispatch => {
    axios.put(updateLink, capability)
      .then(response => {
        dispatch({
          type: CapabilityActionTypes.UPDATE_CAPABILITY,
          payload: response.data
        })
        hideModal()
      })
      .catch(error =>
        dispatch(errorCapability(error.response.data))
      )
  }
}

export const deleteCapability = (id, deleteLink) => {
  return dispatch => {
    axios.delete(deleteLink)
      .then(response =>
        dispatch(
          {
            type: CapabilityActionTypes.DELETE_CAPABILITY,
            payload: id
          }
        ))
      .catch(error => dispatch(errorCapability(error.response.data)))
  }
}

export const errorCapability = (errors) => {
  return {
    type: CapabilityActionTypes.ERROR_CAPABILITY,
    payload: errors
  }
}