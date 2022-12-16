import React, { Component } from 'react'

export default class DanhSachGiay extends Component {
  render() {
    const {image, name, price} = this.props.element;

    return (
      <div>
         <div class="card" style={{width: 330, height: 520}}>
            <div>
                <img className="card-img-top" src={image} alt="" />
                <div className="card-body">
                    <h4 className="card-title">{name}</h4>
                    <p className="card-text">${price}</p>
                    <button onClick={() => this.props.showDetail(this.props.element)} type='button' className="btn btn-primary mr-2" data-toggle="modal" data-target="#modelId">
                        <span>Details</span> 
                    </button>
                    <button className="btn btn-dark">
                        <span>Add to carts </span> 
                        <i class="fa-solid fa-cart-shopping"></i>
                    </button>
                </div>
            </div>
        </div>
      </div>
    )
  }
}
