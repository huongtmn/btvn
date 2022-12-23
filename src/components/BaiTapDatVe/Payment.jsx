import React, { Component } from 'react'

import { connect, Connect } from 'react-redux';
class Payment extends Component {
  render() {
    return (
        <div>
            <button onClick={() => this.props.payment(this.props.element)} className="btn btn-danger">Thanh toán</button>
        </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
    return {
        payment(chair) {
            dispatch({
                type: "PAYMENT",
                payload: chair,
            })
        }
    }
}

export default connect(null, mapDispatchToProps)(Payment);