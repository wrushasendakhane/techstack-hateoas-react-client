import { combineReducers } from 'redux';
import capabilityReducer from './capability/capability.reducer';
export const rootReducer = combineReducers({ capability: capabilityReducer })