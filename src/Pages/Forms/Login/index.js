import "./Login.css";

import { useState } from "react";
import { Link, Navigate, useNavigate } from "react-router-dom";
import { routes } from "../../../routes";
import loginValidation from "../../../utils/Validation/Login";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";
function Login() {
  const Navigate = useNavigate();
  const Log = useSelector((state) => state.LoginReducer.Login);
  const setLogDispatch = useDispatch();

  const { root, login, signup, logout } = routes;
  const [errors, setErrors] = useState([]);
  //const [log, setLog] = useState(false);
  const [loginWarning, setLoginWarning] = useState(true);
  const [loginInfo, setLoginInfo] = useState({
    Email: "",
    Password: "",
  });
  //const userInfo = JSON.parse(localStorage.getItem("signup"));
  const Login = (e) => {
    const result = loginValidation(loginInfo);
    
    if (result.length) {
      setErrors(result);
    } else if (localStorage.getItem("signup")) {
      const userInfo = JSON.parse(localStorage.getItem("signup"));
      setErrors([]);
      if (
        loginInfo.Email == userInfo.Email &&
        loginInfo.Password == userInfo.Password
      ) {
        if (Log == true) {
          setLogDispatch({ type: "Login" });
        } else if (Log == false) {
          setLogDispatch({ type: "LogOut" });
        }
        Navigate("/");
      }else{ setLoginWarning(false);}
    } else if (errors.length && Log == false) {
      setLoginWarning(false);
      setErrors([]);
    }
  };
  return (
    <section class="vh-100 Loginform">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample image"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form>
              <div class="form-outline mb-4">
                <input
                  type="email"
                  id="form3Example3"
                  class="form-control form-control-lg"
                  placeholder="Email address"
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, Email: e.target.value })
                  }
                  // placeholder="Enter a valid email address"
                />

                {errors.length ? (
                  <div>
                    {errors.map((item) =>
                      item.target == "Email" ? (
                        <span>{item.message}</span>
                      ) : (
                        <span></span>
                      )
                    )}
                  </div>
                ) : (
                  <p></p>
                )}
              </div>

              <div class="form-outline mb-3">
                <input
                  type="password"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Password"
                  onChange={(e) =>
                    setLoginInfo({ ...loginInfo, Password: e.target.value })
                  }
                  // placeholder="Enter password"
                />

                {errors.length ? (
                  <div>
                    {errors.map((item) =>
                      item.target == "Password" ? (
                        <span>{item.message}</span>
                      ) : (
                        <span></span>
                      )
                    )}
                  </div>
                ) : (
                  <p></p>
                )}
              </div>

              <div class="d-flex justify-content-between align-items-center">
                <div class="form-check mb-0">
                  <input
                    class="form-check-input me-2"
                    type="checkbox"
                    value=""
                    id="form2Example3"
                  />
                  <label class="form-check-label" for="form2Example3">
                    Remember me
                  </label>
                </div>
                <a href="#!" class="text-body">
                  Forgot password?
                </a>
              </div>
              {loginWarning == false ? (
                <span>Email or password is not valid</span>
              ) : (
                ""
              )}
              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  onClick={Login}
                >
                  Login
                </button>

                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <Link to={signup} class="link-danger">
                    Register
                  </Link>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Login;
