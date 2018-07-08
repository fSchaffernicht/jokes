import {
  APP_INIT,
  FETCH_JOKE,
  FETCH_JOKE_FAILED,
  FETCH_JOKE_SUCCESS
} from './types'

const initialState = {
  loading: false,
  data: {},
  errors: []
}

export default (state = initialState, action) => {
  if (action.type === APP_INIT) {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === FETCH_JOKE) {
    return {
      ...state,
      loading: true
    }
  }

  if (action.type === FETCH_JOKE_SUCCESS) {
    return {
      ...state,
      loading: false,
      data: action.payload.value
    }
  }

  if (action.type === FETCH_JOKE_FAILED) {
    return {
      ...state,
      loading: false,
      data: {},
      error: action.payload
    }
  }

  return state
}
