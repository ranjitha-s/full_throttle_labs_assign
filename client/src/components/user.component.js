import React from "react";
import ActivityModal from "./ActivityModal";
import "bootstrap/dist/css/bootstrap.min.css";

function User(user) {
  return (
    <div className="container">
      <div className="card promoting-card bg-light border-info rounded w-60">
        <div className="card-body">
          <div className="text-info mb-3">
            <div>
              User <i>"{user.name}"</i> is from {user.location}
            </div>
            <br />
            <div>
              Click here
              <i>
                <ActivityModal
                  name={user.name}
                  active_periods={user.active_periods}
                />
              </i>
              to know the activity of {user.name}
            </div>
          </div>
        </div>
      </div>
      <br />
    </div>
  );
}

export default User;
