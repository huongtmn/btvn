import React, { Component } from "react";

import data from "../data/datashoes.json";
import ChiTietGiay from "./ChiTietGiay";
import DanhSachGiay from "./DanhSachGiay";
console.log(data);

export default class BaiTapGiay extends Component {
    state = {
        shoeDetail: data,
    }

    renderShoesList = () => {
        return data.map((element) => {
        return (
            <div className="col-4 mb-3" key={element.id}>
            <DanhSachGiay 
                element={element} 
                showDetail={this.showDetail}
            />
            </div>
        );
        });
    };

    showDetail = (shoe) => {
        this.setState({
            shoeDetail: shoe,
        })
    }

    render() {
        return (
        <div>
            <h3 className="text-center m-3">Shoes Shop</h3>
            <div className="row container mx-auto">{this.renderShoesList()}</div>      
            <ChiTietGiay 
                shoeDetail={this.state.shoeDetail}
            />
        </div>
        );
    }
}
