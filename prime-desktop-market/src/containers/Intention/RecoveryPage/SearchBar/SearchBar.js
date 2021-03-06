import React, { Component, PropTypes } from 'react'
import { bindActionCreators } from 'redux-polymorphic'
import { connect } from 'react-redux'
import { fetch } from 'redux/modules/intentions'
import Form from '../../FollowingPage/SearchBar/Form'

@connect(
  state => ({
    fetchParams: state.intentions.service.fetchParams,
    enumValues: state.enumValues,
  }),
  dispatch => ({
    ...bindActionCreators({ fetch }, dispatch, 'recovery')
  })
)
export default class SearchBar extends Component {
  static propTypes = {
    fetchParams: PropTypes.object.isRequired,
    enumValues: PropTypes.object.isRequired,
    fetch: PropTypes.func.isRequired
  }

  handleSubmit = data => {
    const { fetch, fetchParams } = this.props
    fetch('recovery', { ...fetchParams, query: data }, true)
  }

  render() {
    const { enumValues } = this.props

    return (
      <Form
        onSubmit={this.handleSubmit}
        enumValues={enumValues}
      />
    )
  }
}
