import React, { Component } from "react";

export default class ChairInfo extends Component {
  render() {
    return (
      <div>
        <h3 className="title1 mt-3 text-center">DANH SÁCH GHẾ BẠN CHỌN</h3>
        <div className="chair-detail mt-4">
          <div className="d-flex align-items-center mb-2">
            <div className="chair-icon chair booked"></div>
            <p className="chair-infor ml-2">Ghế đã đặt</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="chair-icon chair selected"></div>
            <p className="chair-infor ml-2">Ghế đang chọn</p>
          </div>
          <div className="d-flex align-items-center mb-2">
            <div className="chair-icon chair available"></div>
            <p className="chair-infor ml-2">Ghế chưa đặt</p>
          </div>
        </div>
      </div>
    );
  }
}
