import React, { Component } from 'react'

import {connect} from "react-redux";

class Chair extends Component {

    render() {
        const {hang} = this.props;
        const {dangChon, daDat} = this.props.chair;

        return (
            <>
                {(!dangChon)  ? (
                    !daDat ? (
                        !hang ? (
                            <div className={`chair number`}>{this.props.name}</div>
                        ) : (
                            <div onClick={() => this.props.selectChair(this.props.chair)} className={`chair available`}>{this.props.name}</div>   
                        )
                    ) : (
                        <div className={`chair booked`}>{this.props.name}</div>
                    )                  
                ) : (
                     <div onClick={() => this.props.selectChair(this.props.chair)} className={`chair selected`}>{this.props.name}</div>
                )}
            </> 
        )
    }
}

const mapStateToProps = (state) => {
    return {
        selectedList: state.ticketReducer.selectedList,
    }
}

const mapDispatchToProps = (dispatch) => {
    return {
        selectChair(chair) {
            dispatch({
                type: "SELECT_CHAIR",
                payload: chair,
            });
        },
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Chair);
