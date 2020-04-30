import React, { Component } from "react";
import List from "../components/EmployeeDirectory/List";
import axios from "axios";

class EmployeeDirectory extends Component {
  state = {
    employees: []
  };

  componentDidMount() {
    this.getEmployees();
  }

  getEmployees = () => {
    axios
      .get("http://dummy.restapiexample.com/api/v1/employees")
      .then((response) => {
        this.setState({
          employees: response.data.data,
        });
      })
      .catch((err) => {
        console.log(err);
      });
  };

  render() {
    return (
      <div>
        <h1>Welcome to the employee directory.</h1>
        <List employees={this.state.employees} />
      </div>
    );
  }
}

export default EmployeeDirectory;
