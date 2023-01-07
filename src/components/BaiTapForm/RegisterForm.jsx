import React, { Component } from "react";

import { connect } from "react-redux";
import { reset, reduxForm } from 'redux-form';

class RegisterForm extends Component {
    constructor(props) {
        super(props);
    
        this.formRef = React.createRef();
    } 
      
    state = {
        values: [
            {
                id: "",
                studentId: "",
                fullName: "",
                phoneNumber: "",
                email: "",
            }
        ],
        errors: [
            {
                id: "",
                studentId: "",
                fullName: "",
                phoneNumber: "",
                email: "",
            }
        ],
    };

    handleChange = (event) => {
        const { name, value } = event.target;

        this.setState({
            values: {
                ...this.state.values,
                [name]: value,
            },
        });
    };
    
    handleSubmit = (event) => {
        event.preventDefault();

        let isExisted = false;
        const isValid = event.target.checkValidity();
        
        if(!isValid) {
            return;
        }

        for(let i in this.props.studentList) {
            if (this.state.values.studentId == this.props.studentList[i].studentId) {
                alert("Student ID is existing. Please input another ID!");
                return isExisted = true;
            } 
        }     
        
        if(!isExisted) {
            this.props.dispatch({
                type: "ADD_STUDENT",
                payload: this.state.values,
            });
        }
    };

    handleUpdate = (event) => {
        event.preventDefault();

        const isValid = event.target.checkValidity();

        if(!isValid) {
            return;
        }

        this.props.dispatch({
            type: "UPDATE_STUDENT",
            payload: this.state.values,
        });
    }

    handleBlur = (event) => {
        let message = "";
        const {name, validity, title, minLength, maxLength} = event.target;
        const {valueMissing, tooShort, tooLong, patternMismatch} = validity;

        if(valueMissing) {
            message = `${title} is required!`;
        }

        if(tooShort || tooLong) {
            message = `${title} have length from ${minLength} to ${maxLength} chars.`;
        }

        if(patternMismatch) {
            message = `${title} is invalid pattern!`;
        }

        this.setState({
            errors: {
                ...this.state.errors,
                [name]: message,
            }
        })
    }

    static getDerivedStateFromProps(nextProps, currentState) {
        console.log({
            nextProps: JSON.parse(JSON.stringify(nextProps)),
            currentState: JSON.parse(JSON.stringify(currentState)),
        });

        if(nextProps.selectedStudent && currentState.values.id !== nextProps.selectedStudent.id) {
            currentState.values = nextProps.selectedStudent;
        }

        return currentState;
    }

    render() {
        const {
            studentId = "", 
            fullName = "", 
            phoneNumber = "", 
            email = "",
        } = this.state.values || {};

        return (
        <div>
            <div className="container mx-auto">
                <div className="heading mb-2 bg-dark text-white px-3 py-2">
                    <h4>Student Information</h4>
                </div>
                <form name="myForm" ref={this.formRef} onSubmit={this.handleSubmit} noValidate>
                    <div className="form-row">
                        <div className="form-group col-md-6">
                            <label className="title-field">Student ID</label>
                            <input
                                required
                                title="Student ID"
                                pattern="^[1-9][0-9]*$"
                                maxLength={6}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                name="studentId"
                                value={studentId}
                                className="form-control"
                                placeholder="Student ID"
                                disabled={this.props.selectedStudent}
                            />
                            <span className="text-danger">{this.state.errors.studentId}</span>
                        </div>
                        <div className="form-group col-md-6"> 
                            <label className="title-field">Full Name</label>
                            <input
                                required
                                title="Full Name"
                                minLength={5}
                                maxLength={30}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                name="fullName"
                                value={fullName}
                                className="form-control"
                                placeholder="Full Name"
                            />
                            <span className="text-danger">{this.state.errors.fullName}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="title-field">Phone Number</label>
                            <input
                                required
                                title="Phone Number"
                                minLength={10}
                                maxLength={12}
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                name="phoneNumber"
                                value={phoneNumber}
                                className="form-control"
                                placeholder="Phone Number"
                            />
                            <span className="text-danger">{this.state.errors.phoneNumber}</span>
                        </div>
                        <div className="form-group col-md-6">
                            <label className="title-field">Email</label>
                            <input
                                required
                                title="Email"
                                pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,}$"
                                onChange={this.handleChange}
                                onBlur={this.handleBlur}
                                name="email"
                                value={email}
                                className="form-control"
                                placeholder="Email"
                            />
                            <span className="text-danger">{this.state.errors.email}</span>
                        </div>
                        <button disabled={!this.formRef.current?.checkValidity() || this.props.selectedStudent} type="submit" className="btn btn-success mb-3 ml-1">Add new student</button>
                        <button onClick={this.handleUpdate} disabled={!this.formRef.current?.checkValidity() || !this.props.selectedStudent} type="button" className="btn btn-info mb-3 ml-1">Save changes</button>
                    </div>
                </form>
            </div>        
        </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        selectedStudent: state.studentReducer.selectedStudent,
        studentList: state.studentReducer.studentList,
    }
}

export default connect(mapStateToProps)(RegisterForm);
