import React, { useState, useEffect, useCallback, useContext } from "react";
import { useDispatch, useSelector } from "react-redux";
import { BrowserRouter as Router, Routes, Route, Link, } from "react-router-dom";

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
import AddDrinkForm from "./components/Staff/AddDrinkForm";
import DrinkTypes from "./components/DrinkTypes";
import DrinkTypesPage from "./components/Staff/DrinkTypesPage";
import Order from "./components/Order";
import CheckoutRequests from "./components/Staff/CheckoutRequests";

import { logout } from "./slices/auth";

import EventBus from "./common/EventBus";

const AppContext = React.createContext(null);

export const useAppContext = () => {
  return React.useContext(AppContext);
};

const Footer = () => {
  return (

    <footer className="w-full p-4 bg-white border-t border-gray-200 shadow md:flex md:items-center md:justify-between md:p-6 dark:bg-gray-800 dark:border-gray-600">
      <span className="text-sm font-medium text-gray-500 sm:text-center dark:text-gray-400">
        OngbauOrder © 2023 developed by{" "}
        <a href="https://nguyenhuuanhtuan.netlify.app/" target="_blank" className="hover:underline">
          Nguyễn Hữu Anh Tuấn
        </a>
        . All Rights Reserved. Windows Server 2022 - Microsoft IIS 10 - ASP.NET Core 7
      </span>
      <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
        {/* Your list items */}
      </ul>
    </footer>


  );
};



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


  const [cartItems, setCartItems] = React.useState([]);
  const addItemToCart = product => {
    // check product
    const existedProduct = cartItems.find(item => item.id === product.id);
    if (existedProduct) {
      setCartItems([
        ...cartItems.filter(item => item.id !== product.id),
        { ...existedProduct, quantity: (existedProduct.quantity || 0) + 1 },
      ]);
    } else {
      setCartItems([...cartItems, { ...product, quantity: 1 }]);
    }
  };

  const removeItemFromCart = product => {
    const existedProduct = cartItems.find(item => item.id === product.id);
    if (existedProduct && existedProduct.quantity === 1) {
      return setCartItems([...cartItems.filter(item => item.id !== product.id)]);
    }
    if (existedProduct) {
      setCartItems([
        ...cartItems.filter(item => item.id !== product.id),
        { ...existedProduct, quantity: (existedProduct.quantity || 0) - 1 },
      ]);
    }
  };


  return (
    <AppContext.Provider
      value={{
        cartItems: cartItems.sort((p1, p2) => p1.name.localeCompare(p2.name)),
        addItemToCart,
        removeItemFromCart,
        setCartItems
      }}>
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
              <li className="nav-item">
                <Link to={"/menu"} className="nav-link">
                  Menu
                </Link>
              </li>

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/staff/checkoutrequests"} className="nav-link">
                    Nhận order
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/staff/adddrinkform"} className="nav-link">
                    Thêm đồ uống
                  </Link>
                </li>
              )}

              {currentUser && (
                <li className="nav-item">
                  <Link to={"/staff/drinktypespage"} className="nav-link">
                    QL danh mục
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
                    Staffs
                  </Link>
                </li>
              )}
            </div>

            {currentUser ? (
              <div className="navbar-nav ml-auto">
                <div className="nav-item dropdown">
                  <a href="/profile" data-toggle="dropdown" className="nav-item nav-link">
                    <div className="d-flex align-items-center"> {/* Add a container for the avatar and username */}
                      <img
                        style={{ borderRadius: '50%', width: '30px', height: '30px', marginRight: '5px' }} // Adjust margin
                        src="https://github.com/entykey.png"
                        className="avatar"
                        alt="Avatar"
                      />
                      <span>{currentUser.user.userName}</span> {/* Display the username */}
                    </div>
                  </a>
                  {/* Dropdown menu */}
                </div>

                <li className="nav-item">
                  <Link to={"/profile"} className="nav-link">
                    {currentUser.username}
                  </Link>
                </li>
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link" onClick={logOut}>
                    LogOut
                  </Link>
                </li>
              </div>
            ) : (
              <div className="navbar-nav ml-auto">
                <li className="nav-item">
                  <Link to={"/login"} className="nav-link">
                    Login
                  </Link>
                </li>

                {/* <li className="nav-item">
                    <Link to={"/register"} className="nav-link">
                      Sign Up
                    </Link>
                  </li> */}
              </div>
            )}

            {/* Cart */}
            <Link to="/order" className="checkoutButton">
              <img
                style={{ borderRadius: '50%', width: '30px', height: '30px', marginRight: '5px' }}
                src="https://cdn-icons-png.flaticon.com/512/2038/2038792.png"
                alt="Checkout"
              />
              {cartItems.length > 0 && (
                <span className="badge">{cartItems.length}</span>
              )}
            </Link>

          </nav>

          <div className="container mt-3">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/home" element={<Home />} />
              <Route path="/login" element={<Login />} />
              {/* <Route path="/register" element={<Register />} /> */}
              <Route path="/profile" element={<Profile />} />
              <Route path="/user" element={<BoardUser />} />
              <Route path="/mod" element={<BoardModerator />} />
              <Route path="/admin" element={<BoardAdmin />} />

              {/* OngBau routes */}
              <Route path="/menu" element={<DrinkTypes />} />
              <Route path="/order" element={<Order />} />
              <Route path="/staff/adddrinkform" element={<AddDrinkForm />} />
              <Route path="/staff/checkoutrequests" element={<CheckoutRequests />} />
              <Route path="/staff/drinktypespage" element={<DrinkTypesPage />} />
            </Routes>
          </div>
        </div>
      </Router>
      <Footer />
    </AppContext.Provider>
  );
};

export default App;
