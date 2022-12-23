import React, { Component } from "react";

import { connect } from "react-redux";
import BookingTicket from "./BookingTicket";
import Payment from "./Payment";


class DetailBooking extends Component {
    renderBookingList = () => {
        return this.props.selectedList.map((element) => {
            return <BookingTicket key={element.soGhe} element={element}/>
        })
    }

    totalPayment = () => {
        const data = [...this.props.selectedList];
        let totalPayment = 0;

        for(var i=0 ; i < data.length; i++){
            totalPayment += data[i].gia;
        }

        return totalPayment;
    }

    render() {
        return (
        <div>
            <table className="table table-bordered ">
                <thead>
                    <tr className="font-header">
                    <th scope="col">Số Ghế</th>
                    <th scope="col">Giá Tiền</th>
                    <th scope="col">Hủy</th>
                    </tr>
                </thead>
                {this.renderBookingList()}
                <tr className="font-header">
                <th scope="col">Tổng tiền</th>
                <th scope="col" className="font-body">{this.totalPayment()}</th>
                </tr>
            </table>
            <Payment 
                element={this.props.selectedList}
            />
        </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    selectedList: state.ticketReducer.selectedList,
  };
};

export default connect(mapStateToProps)(DetailBooking);
