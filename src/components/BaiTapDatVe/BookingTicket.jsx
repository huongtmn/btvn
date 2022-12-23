import React, { Component } from 'react'

import { connect } from 'react-redux';

class BookingTicket extends Component {
  render() {
    const {soGhe, gia} = this.props.element;

    return (
        <tbody>
            <tr>
            <td className="font-body">{soGhe}</td>
            <td className="font-body">{gia}</td>
            <td onClick={() => this.props.removeTicket(this.props.element)} className="font-remove"><i class="fa-solid fa-trash"></i></td>
            </tr>
        </tbody>    
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return{
        removeTicket(chair) {
            dispatch({
                type: "REMOVE_TICKET",
                payload: chair,
            });
        },
    };
}

export default connect(null, mapDispatchToProps)(BookingTicket);