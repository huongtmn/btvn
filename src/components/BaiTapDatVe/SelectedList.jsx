import React, { Component } from 'react'
import ChairInfo from './ChairInfo'
import DetailBooking from './DetailBooking'

export default class SelectedList extends Component {
  render() {
    return (
      <div className="col-5">
        <ChairInfo/>
        <DetailBooking />
      </div>
    )
  }
}
