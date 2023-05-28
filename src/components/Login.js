import React, { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Navigate, useNavigate, useLocation } from "react-router-dom";
import { Formik, Field, Form, ErrorMessage } from "formik";
import * as Yup from "yup";

import { login } from "../slices/auth";
import { clearMessage } from "../slices/message";

const Login = () => {
  let navigate = useNavigate();
  let location = useLocation();

  const [loading, setLoading] = useState(false);

  const { isLoggedIn } = useSelector((state) => state.auth);
  const { message } = useSelector((state) => state.message);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(clearMessage());
  }, [dispatch]);

  // Store the previous page information in session storage
  useEffect(() => {
    sessionStorage.setItem("previousPage", location.pathname);
  }, [location.pathname]);

  const initialValues = {
    username: "",
    password: "",
  };

  const validationSchema = Yup.object().shape({
    username: Yup.string().required("This field is required!"),
    password: Yup.string().required("This field is required!"),
  });

  const handleLogin = (formValue) => {
    const { username, password } = formValue;
    setLoading(true);

    dispatch(login({ username, password }))
      .unwrap()
      .then(() => {
        navigate("/profile");
        window.location.reload();
      })
      .catch(() => {
        setLoading(false);
      });
  };


  // if user is logged in but try to access this Login page:
  
  if (isLoggedIn) {
    return <Navigate to="/profile" />;
  }


  return (
    <div className="col-md-12 login-form">
      {/* <div className="relative px-4 py-10 bg-white mx-8 md:mx-0 shadow rounded-3xl sm:p-10"> */}
      <div>
        {/* <h3 className="">Login</h3> */}
        <img
          src="//ssl.gstatic.com/accounts/ui/avatar_2x.png"
          alt="profile-img"
          className="profile-img-card"
        />
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={handleLogin}
        >
          <Form>
            <div className="mb-4">
              <label htmlFor="username" className="block mb-2 text-sm font-medium text-gray-900">
                Username
              </label>
              <Field
                name="username"
                type="text"
                className="bg-gray-50 w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <ErrorMessage
                name="username"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <div className="mb-4">
              <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900">
                Password
              </label>
              <Field
                name="password"
                type="password"
                className="bg-gray-50 w-full px-3 py-2 mb-1 border-2 border-gray-200 rounded-xl focus:outline-none focus:border-indigo-500 transition-colors"
              />
              <ErrorMessage
                name="password"
                component="div"
                className="text-red-500 text-sm"
              />
            </div>

            <button class="w-full py-2.5 font-medium text-white bg-indigo-600 hover:bg-indigo-500 rounded-xl border-indigo-500 hover:shadow inline-flex space-x-2 items-center justify-center focus:ring focus:ring-violet-300" disabled={loading}>
              {loading ? (
                <span className="spinner-border spinner-border-sm"></span>
              ) : 
              (
                <>
              <svg xmlns="http://www.w3.org/2000/svg" class="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
                <path stroke-linecap="round" stroke-linejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
              </svg>
              <span>Login</span></>)
              }

              
            </button>

            {/* <div className="mb-4">
              <button
                type="submit"
                className="bg-indigo-500 hover:bg-indigo-600 text-white font-bold py-2 px-4 rounded focus:ring focus:ring-violet-300"
                disabled={loading}
              >
                
                {loading && (
                  <span className="spinner-border spinner-border-sm"></span>
                )}
                <span>Login</span>
              </button>
            </div> */}
          </Form>
        </Formik>
      </div>

      {message && (
        <div className="form-group">
          <div className="alert alert-danger" role="alert">
            {message}
          </div>
        </div>
      )}
    </div>
  );
};

export default Login;
