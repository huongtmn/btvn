import React, { Component } from 'react'

export default class ChiTietGiay extends Component { 
    render() {
        const {image, name, price, description} = this.props.shoeDetail;

        return (
            <div>
                <div className="modal fade" id="modelId" tabIndex={-1} role="dialog" aria-labelledby="modelTitleId" aria-hidden="true">
                    <div className="modal-dialog" role="document">
                        <div className="modal-content">
                            {/* Modal Header */}
                            <div className="modal-header">
                            <h4 className="modal-title">Shoes Detail</h4>
                            <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                                <span aria-hidden="true">×</span>
                            </button>
                            </div>
                            {/* Modal Body */}
                            <div className="modal-body">
                                <div class="container mx-auto" style={{ border: "1px solid #a0a0c86e", borderRadius: 8 }}>
                                    <div className="row">
                                        <div className="col-12">
                                        <h4></h4>
                                        <img className="rounded mx-auto d-block" src={image} alt="" width={180} />
                                        </div>
                                        <div className="col-12 mt-3">
                                        <table className="table">
                                            <thead>
                                                <tr colSpan="2">
                                                    <h5>Detail</h5>
                                                </tr>
                                                <tr>
                                                    <td>Name</td>
                                                    <td>{name}</td>
                                                </tr>
                                                <tr>
                                                    <td>Price</td>
                                                    <td>${price}</td>
                                                </tr>
                                                <tr>
                                                    <td>Description</td>
                                                    <td>{description}</td>
                                                </tr>
                                            </thead>
                                        </table>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            {/* Modal Footer */}
                            <div className="modal-footer">
                                <button className="btn btn-dark">
                                    <span>Add to carts </span> 
                                    <i class="fa-solid fa-cart-shopping"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
