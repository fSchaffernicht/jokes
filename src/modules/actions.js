import { mergeMap, filter, map } from 'rxjs/operators'
import { ajax } from 'rxjs/ajax'

import {
  APP_INIT,
  FETCH_JOKE,
  FETCH_JOKE_FAILED,
  FETCH_JOKE_SUCCESS
} from './types'

export const fetchNextJoke = () => ({
  type: FETCH_JOKE
})

export const initialize = (jokeId) => ({
  type: APP_INIT,
  payload: jokeId
})

const fetchSuccess = payload => ({
  type: FETCH_JOKE_SUCCESS,
  payload
})

const fetchFailed = payload => ({
  type: FETCH_JOKE_FAILED,
  payload
})

const getData = (jokeId) => {
  let url = ''

  if (jokeId) {
    url = `http://api.icndb.com/jokes/${jokeId}`
  } else {
    url = 'http://api.icndb.com/jokes/random'
  }

  return ajax.getJSON(url)
    .pipe(
      map(response => {
        if (response.type === 'success') {
          return fetchSuccess(response)
        }

        return fetchFailed(response)
      })
    )
}

export const fetchEpic = $action => $action.pipe(
  filter(({ type }) => type === APP_INIT || type === FETCH_JOKE),
  mergeMap(({ type, payload }) => {
    if (type === APP_INIT) {
      return getData(payload)
    }

    return getData()
  })
)
