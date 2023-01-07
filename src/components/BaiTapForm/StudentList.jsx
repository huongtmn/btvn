import React, { Component } from "react";

import { connect } from "react-redux";

class StudentList extends Component {
    state = {
        keyword: "",
    }

    renderContent = () => {
        const filteredData = this.props.studentList.filter((ele) => {
            return ele.fullName.toLowerCase().indexOf(this.state.keyword.toLocaleLowerCase()) !== -1
        }) 

        return filteredData.map((element, idx) => {
            return (
                <tbody key={element.id}>
                <tr>
                    <th scope="row">{idx + 1}</th>
                    <td>{element.studentId}</td>
                    <td>{element.fullName}</td>
                    <td>{element.phoneNumber}</td>
                    <td>{element.email}</td>
                    <td>
                        <button onClick={() => this.selectedStudent(element)} className="btn btn-info mr-2">Edit</button>
                        <button onClick={() => this.deleteStudent(element)} className="btn btn-danger">Delete</button>
                        </td>
                </tr>
                </tbody>
        );
        });
    };

    selectedStudent = (student) => {
        this.props.dispatch({
            type: "SELECT_STUDENT",
            payload: student,
        })
    }

    deleteStudent = (student) => {
        this.props.dispatch({
            type: "DELETE_STUDENT",
            payload: student,
        });
    };

    render() {
        return (
        <div>
            <div className="container student-list myForm">
                <div className="row">
                    <div className="col-4 d-flex">
                        <div className="form-group mb-1">
                            <input
                                type="text"
                                placeholder="Searching by full name ..."
                                className="form-control"
                                onChange={(event) => this.setState({keyword: event.target.value})}
                            />
                        </div>
                    </div>
                </div>
                <table className="table">
                    <thead className="thead-dark">
                    <tr>
                        <th scope="col">No.</th>
                        <th scope="col">Student ID</th>
                        <th scope="col">Full Name</th>
                        <th scope="col">Phone Number</th>
                        <th scope="col">Email</th>
                        <th scope="col">Update</th>
                    </tr>
                    </thead>
                    {this.renderContent()}
                </table>
            </div>
        </div>
        );
    }
}

const mapStateToProps = (state) => {
  return {
    studentList: state.studentReducer.studentList,
  };
};

export default connect(mapStateToProps)(StudentList);
