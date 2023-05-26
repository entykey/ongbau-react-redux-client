import React, { useState, useEffect, useCallback } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";

import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

import Login from "./components/Login";
import Register from "./components/Register";
import Home from "./components/Home";
import Profile from "./components/Profile";
import BoardUser from "./components/BoardUser";
import BoardModerator from "./components/BoardModerator";
import BoardAdmin from "./components/BoardAdmin";

// OngBau components:
import AddDrinkForm from "./components/AddDrinkForm";

import { logout } from "./slices/auth";

import EventBus from "./common/EventBus";

const App = () => {
  const [showModeratorBoard, setShowModeratorBoard] = useState(false);
  const [showAdminBoard, setShowAdminBoard] = useState(false);

  const { user: currentUser } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logOut = useCallback(() => {
    dispatch(logout());
  }, [dispatch]);

  useEffect(() => {
    if (currentUser) {
      //setShowModeratorBoard(currentUser.roles.includes("ROLE_MODERATOR"));
      //setShowAdminBoard(currentUser.roles.includes("ROLE_ADMIN"));
    } else {
      setShowModeratorBoard(false);
      setShowAdminBoard(false);
    }

    EventBus.on("logout", () => {
      logOut();
    });

    return () => {
      EventBus.remove("logout");
    };
  }, [currentUser, logOut]);

  return (
    <Router>
      <div>
        <nav className="navbar navbar-expand navbar-dark bg-dark">
          <Link to={"/"} className="navbar-brand">
            OngBau Order
          </Link>
          <div className="navbar-nav mr-auto">
            
            <li className="nav-item">
              <Link to={"/home"} className="nav-link">
                Home
              </Link>
            </li>

            {currentUser && (
              <li className="nav-item">
                <Link to={"/staff/adddrinkform"} className="nav-link">
                  Add Drink
                </Link>
              </li>
            )}

            {showModeratorBoard && (
              <li className="nav-item">
                <Link to={"/mod"} className="nav-link">
                  Moderator Board
                </Link>
              </li>
            )}

            {showAdminBoard && (
              <li className="nav-item">
                <Link to={"/admin"} className="nav-link">
                  Admin Board
                </Link>
              </li>
            )}

            {currentUser && (
              <li className="nav-item">
                <Link to={"/user"} className="nav-link">
                  User
                </Link>
              </li>
            )}
          </div>

          {currentUser ? (
              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  {/* <a href="#" data-toggle="dropdown" className="nav-item nav-link dropdown-toggle user-action"> */}
                  <a href="#" data-toggle="dropdown" className="nav-item nav-link">
                    <img
                      style={{ borderRadius: '50%', width: '30px', height: '30px', margin: 'auto 10px auto 10px', }}
                      src="https://github.com/entykey.png"
                      className="avatar"
                      alt="Avatar"
                    />
                    {currentUser ? currentUser.username : "cant get name"}
                  </a>
                  {/* <div className="dropdown-menu">
                    <a href="#" className="dropdown-item"><i className="fa fa-user-o"></i> Profile</a>
                    <a href="#" className="dropdown-item"><i className="fa fa-calendar-o"></i> Calendar</a>
                    <a href="#" className="dropdown-item"><i className="fa fa-sliders"></i> Settings</a>
                    <div className="divider dropdown-divider"></div>
                    <a href="#" className="dropdown-item"><i className="material-icons">&#xE8AC;</i> Logout</a>
                  </div> */}
                </div>

                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <a href="/login" className="nav-link" onClick={logOut}>
                    LogOut
                  </a>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                <li className="nav-item">
                  <Link to={"/register"} className="nav-link">
                    Sign Up
                  </Link>
                </li>
              </div>
            )}
        </nav>

        <div className="container mt-3">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
            <Route path="/profile" element={<Profile />} />
            <Route path="/user" element={<BoardUser />} />
            <Route path="/mod" element={<BoardModerator />} />
            <Route path="/admin" element={<BoardAdmin />} />

            {/* OngBau routes */}
            <Route path="/staff/adddrinkform" element={<AddDrinkForm />} />
          </Routes>
        </div>
      </div>
    </Router>
  );
};

export default App;
