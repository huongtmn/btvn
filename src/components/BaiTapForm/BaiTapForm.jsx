import React, { Component } from 'react'
import RegisterForm from './RegisterForm'
import StudentList from './StudentList'

export default class BaiTapForm extends Component {
  render() {
    return (
      <div>
        <RegisterForm />
        <StudentList />
      </div>
    )
  }
}
