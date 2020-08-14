import React, { Component } from "react";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css";
import UserList from "./components/users-list.component";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
    };
  }

  componentDidMount() {
    axios
      .get("/users/")
      .then((res) => {
        this.setState({ users: res.data });
      })
      .catch((err) => {
        console.log(err);
      });
  }

  render() {
    return (
      <div className="container" style={{ marginLeft: "450px" }}>
        <br />
        <br />
        <div className="card promoting-card bg-light border-info rounded w-50">
          <div className="card-body">
            <h1 className="text-info mb-3">
              <strong>
                <i> Users List</i>
              </strong>
            </h1>
          </div>
        </div>
        <br />
        <div className="card promoting-card bg-light border-info rounded w-50">
          <div className="card-body">
            <br />
            <UserList users={this.state.users} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
