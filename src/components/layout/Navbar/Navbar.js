//import './App.css';
import "./Navbar.css";
import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { routes } from "../routes";

function Navbar() {
  const [cat, setCat] = useState([]);
  const [catPath, setCatPath] = useState([]);

  const getCategoris = async () => {
    await fetch("https://fakestoreapi.com/products/categories")
      .then((res) => res.json())
      .then((data) => {
        //  const dataPath= data.map((item) => item.replaceAll(" ", "-"));
        setCat(data);
      })
      .catch((error) => console.log(error));
  };
  const createPath = (item) => {
    return item.replaceAll(" ", "-");
  };

  useEffect(() => {
    getCategoris();
  }, []);

  //const [Cat] = useContext(Navbarcontext)
  //  const {
  //    root,
  //    electronics,
  //    jewelery,
  //    mansclothing,
  //    womensclothing,
  //  } = routes;
  return (
    <nav className="navbar navbar-expand-lg navbar-light">
      <div className="container-fluid container">
        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNavAltMarkup"
          aria-controls="navbarNavAltMarkup"
          aria-expanded="false"
          aria-label="Toggle navigation"
        ></button>

        <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
          <div className="navbar-nav">
            <li className="nav-item">
              <p>Paintings:</p>
              {/* <Link className="nav-link" aria-current="page" to={routes.root}>
                Home
              </Link> */}

              {cat.length
                ? cat.map((item, index) => (
                    <Link
                      key={index + 1}
                      className="nav-link"
                      aria-current="page"
                      to={`/categories/${createPath(item)}`}
                    >
                      {item}
                    </Link>
                  ))
                : "loding.."}
            </li>
          </div>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
