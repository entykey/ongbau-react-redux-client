import React, { useState, useEffect } from "react";

import UserService from "../services/user.service";
import EventBus from "../common/EventBus";

const BoardUser = () => {
  const [users, setUsers] = useState([]);
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    UserService.getUserBoard()
      .then((response) => {
        setUsers(response.data.users);
      })
      .catch((error) => {
        const errorMessage =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        if (error.response && error.response.status === 401) {
          setErrorMessage("Unauthorized"); // Set custom error message for unauthorized access
          EventBus.dispatch("logout");
        } else {
          setErrorMessage(errorMessage);
        }
      });
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h1>All users in dotnet api</h1>
        {errorMessage ? (
          <h5>{errorMessage}</h5>
        ) : (
          users && users.length > 0 ? (
            users.map((u) => (
              <h5 style={{ marginTop: 20 }} key={u.id}>
                {u.fullName} ({u.email}), Roles: {u.listroles}
              </h5>
            ))
          ) : (
            <h5>No users found</h5>
          )
        )}
      </header>
    </div>
  );
};

export default BoardUser;
