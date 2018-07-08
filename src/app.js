import React from 'react'
import { connect } from 'react-redux'

import { initialize, fetchNextJoke } from './modules/actions'

const INITIAL_JOKE_ID = 528

class JokesApp extends React.Component {
  componentDidMount () {
    this.props.initialize(INITIAL_JOKE_ID)
  }

  render () {
    const {
      fetchNextJoke,
      data,
      error
    } = this.props

    if (error) {
      return (
        <div>something went wrong!</div>
      )
    }

    return (
      <div className='wrapper'>
        <div className='actions'>
          <button onClick={() => fetchNextJoke()}>gimme more!</button>
        </div>
        <h1 dangerouslySetInnerHTML={{ __html: data && data.joke }} />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
  data: state.reducer.data,
  loading: state.reducer.loading,
  error: state.reducer.error
})

const mapDispatchToProps = (dispatch) => ({
  fetchNextJoke: () => dispatch(fetchNextJoke()),
  initialize: jokeId => dispatch(initialize(jokeId))
})

export default connect(mapStateToProps, mapDispatchToProps)(JokesApp)
