import React from "react";
import User from "./user.component";

function UserList(props) {
  let users = props.users.map((user, i) => {
    return (
      <User
        key={i}
        name={user.name}
        location={user.location}
        active_periods={user.active_periods}
      />
    );
  });
  return (
    <div>
      <div>{users}</div>
    </div>
  );
}

export default UserList;
