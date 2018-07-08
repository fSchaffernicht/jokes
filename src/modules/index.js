import { combineReducers } from 'redux'
import { combineEpics } from 'redux-observable'

import reducer from './reducer'
import { fetchEpic } from './actions'

export const rootEpic = combineEpics(
  fetchEpic
)

export const rootReducer = combineReducers({
  reducer
})
