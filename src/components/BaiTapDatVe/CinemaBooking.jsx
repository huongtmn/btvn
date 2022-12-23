import React, { Component } from "react";

import chairList from "../../data/danhSachGhe.json";
import Chair from "./Chair";
import SelectedList from "./SelectedList";
import "./style.scss";

export default class CineBooking extends Component {
  renderContent = () => {
    return chairList.map((ele) => {
      return (    
        <div key={ele.hang}>
          {/* hàng */}
          <div className="seat">{ele.hang}</div>
          {/* ghế */}
          {ele.danhSachGhe.map((chair, idx) => {
            return (
                <Chair
                key={chair.soGhe}
                hang={ele.hang}
                chair={chair}     
                dangChon={chair.dangChon}
                daDat={chair.daDat}
                name={idx + 1}
                />                   
            );   
          })}
        </div>
      );
    });
  };

  render() {
    return (
      <div>
        <div className="row mx-auto">
          <div className="col-7 text-center">
            <h3 className="title mt-3">ĐẶT VÉ XEM PHIM</h3>
            <div className="content">
              <h5>Màn Hình</h5>
              <div className="screen"></div>
            </div>
            {this.renderContent()}
          </div>
          <SelectedList />
        </div>
      </div>
    );
  }
}
