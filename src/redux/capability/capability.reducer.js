import CapabilityActionTypes from './capability.types';
const INITIAL_STATE = {
  capabilities: [],
  links: [],
  capability: null,
  errors: null,
}

const capabilityReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case CapabilityActionTypes.SET_CAPABILITIES:
      return {
        ...state,
        capabilities: action.payload?._embedded?.capabilityList,
        links: action.payload?._links
      }
    case CapabilityActionTypes.GET_CAPABILITY:
      return {
        ...state,
        capability: state.capabilities.find(capability => capability.id === action.payload)
      }
    case CapabilityActionTypes.CLEAR_CAPABILITY:
      return {
        ...state,
        capability: null,
        errors: null
      }
    case CapabilityActionTypes.CLEAR_ERROR:
      return {
        ...state,
        errors: null
      }
    case CapabilityActionTypes.ADD_CAPABILITY:
      return {
        ...state,
        capabilities: [action.payload, ...state.capabilities]
      }
    case CapabilityActionTypes.UPDATE_CAPABILITY:
      return {
        ...state,
        capabilities: state.capabilities.map(capability =>
          (capability.id === action.payload.id)
            ? action.payload : capability
        )
      }
    case CapabilityActionTypes.DELETE_CAPABILITY:
      return {
        ...state,
        capabilities: state.capabilities.filter(capability => capability.id !== action.payload)
      }
    case CapabilityActionTypes.ERROR_CAPABILITY:
      return {
        ...state,
        errors: action.payload
      }
    default:
      return state;
  }
}

export default capabilityReducer;