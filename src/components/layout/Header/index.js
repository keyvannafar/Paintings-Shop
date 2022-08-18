import "./Header.css";
import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import { Link } from "react-router-dom";
import { routes } from "../../../routes";
import { useContext } from "react";
import { useDispatch } from "react-redux/es/exports";
import Showqtycontext from "../../../Context/Showqtycontext";
import { useSelector } from "react-redux";
import FavUndermenu from "../../FavUndermenu";
function Header() {
  const { root, login, signup, logout } = routes;

  const Showqty = useContext(Showqtycontext);
  //###############   Redux  #################
  const qtyTotal = useSelector((state) => state.qtyTotalReducer.qtyTotal);
  const Favqty = useSelector((state) => state.FavQtyReducer.Favqty);
  const Login = useSelector((state) => state.LoginReducer.Login);
  const setLoginDispatch = useDispatch();
  //###############   Redux  #################
  const [Sgn, setSgn] = useState(false);
  const [Lan, setLan] = useState(false);

  function toggleLogin() {
    if (Login == true) {
      setLoginDispatch({ type: "Login" });
    }
    // if (Login == false) {
    //   setLoginDispatch({ type: "LogOut" });
    // }
  }

  function toggleLan() {
    setLan(!Lan);
  }
  function sgn() {
    setSgn(!Sgn);
  }

  return (
    <nav className="navbar navbar-light border-bottom header">
      <div className="container-fluid container">
        <a className="navbar-brand">MyShop</a>
        <div className="d-flex">
          <button className="btn nav-item dropdown">
            <a
              class="text-black"
              href="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              {Lan == false ? <span>En</span> : <span>De</span>}
            </a>

            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                {Lan == false ? (
                  <Link class="dropdown-item" to="#" onClick={toggleLan}>
                    De
                  </Link>
                ) : (
                  <Link class="dropdown-item" to="#" onClick={toggleLan}>
                    En
                  </Link>
                )}
              </li>
            </ul>
          </button>

          <button className="btn nav-item dropdown me-1">
            <Link
              class="text-black"
              to="#"
              id="navbarDropdown"
              role="button"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              <i class="bi bi-person-fill"></i>
            </Link>

            <ul class="dropdown-menu" aria-labelledby="navbarDropdown">
              <li>
                {Login == false ? (
                  <Link class="dropdown-item" to={login} onClick={toggleLogin}>
                    Login
                  </Link>
                ) : (
                  <Link class="dropdown-item" to={root} onClick={toggleLogin}>
                    LogOut
                  </Link>
                )}
              </li>
              <li>
                {Login == false ? (
                  <Link class="dropdown-item" to={signup}>
                    Sign up
                  </Link>
                ) : (
                  <Link class="dropdown-item" to={signup}></Link>
                )}
              </li>
              <li>
                <hr class="dropdown-divider" />
              </li>
              <li>
                <a class="dropdown-item" href="#">
                  Something else here
                </a>
              </li>
            </ul>
          </button>

          {Login == true ? (
            <>
              <div className="favMenu">
                <button className="btn d-flex border position-relative">
                  <span className="text-warning font-size me-1 ">{Favqty}</span>
                  <i class="bi bi-heart text-white"></i>
                </button>
                <div className="position-absolute favUndermenu">
                  <FavUndermenu />
                </div>
              </div>

              <button className="btn d-flex border ms-1 me-1">
                <span className="p-0 text-warning font-size">{qtyTotal}</span>

                <i className="fa-solid fa-cart-flatbed-empty awe"></i>
                <i class="bi bi-cart2 text-white ms-1"></i>
              </button>
            </>
          ) : (
            ""
          )}

          <form className="d-flex">
            <input
              className="form-control me-0"
              type="search"
              placeholder="Search"
              aria-label="Search"
            />

            <button
              className="btn btn-1 btn-outline-success text-white ms-0"
              type="submit"
            >
              <i class="bi bi-search text-white"></i>
            </button>
          </form>
          {/* {Log == true ? (
            <button
              className="btn btn-outline-success text-white"
              onClick={toggleLog}
            >
              LogOut
            </button>
          ) : (
            <button
              className="btn btn-outline-success text-white"
              onClick={toggleLog}
            >
              <i class="bi bi-person-fill"></i>
            </button>
          )}
          {Sgn == true ? (
            <button
              className="btn btn-outline-success text-white"
              type="submit"
              onClick={sgn}
            >
              SignOut
            </button>
          ) : (
            <button
              className="btn btn-outline-success text-white"
              type="submit"
              onClick={sgn}
            >
              Signin
            </button>
          )} */}
        </div>
      </div>
    </nav>
  );
}

export default Header;
