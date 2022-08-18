import { Routes, Route } from "react-router-dom";
import Home from "../Pages/Home";
import Login from "../Pages/Forms/Login";
import SignUp from "../Pages/Forms/SignUp";
import { products } from "../data.js";
import { Categories } from "../data.js";
import Paintings from "../Pages/paintings/index.js";
import PaintingsPage from "../Pages/paintings/index.js";
import AddToCart from "../Pages/CheckOut/index.js";
import ViewData from "../Pages/viewProduct/index.js";
import Body from "../components/Body/Body.js";
import { useEffect, useState } from "react";
import { setSelectionRange } from "@testing-library/user-event/dist/utils/index.js";
import ViewCard from "../Pages/viewProduct/ViewCard.js";
const routes = {
  root: "/",
  login: "/Login",
  signup: "/SignUp",
  logout: "/Logout",
  paintings: "/Paintings",
  viewproduct: "/ViewProduct",
  category: "/categories/:category",
  addtocart: "/AddToCart"
};

function RoutesMap() {
  const [Cat, setCat] = useState([]);
  // useEffect(()=>{
  //   fetch("https://fakestoreapi.com/products/categories")
  //   .then((res) => res.json())
  //   .then((data) => setCat(data))
  //   .catch((error) => console.log(error))
  // })


    const { root, login, signup, logout, category, paintings, viewproduct, addtocart } =
      routes;
  return (
    <Routes>
      <Route exact path={root} element={<Home />} />
      {/* {Cat.map((category) => (
        <Route
          
          path={`/${category}`}
          element={<Body keyvan={category} />}
        />
      ))} */}
      <Route exact path={category} element={<Body />} />
      <Route exact path={paintings} element={<PaintingsPage />} />
      <Route exact path={viewproduct} element={<ViewCard />} />
      <Route exact path={addtocart} element={<AddToCart />} />
      <Route exact path={login} element={<Login />} />
      <Route path={signup} element={<SignUp />} />
      <Route path={logout} element={<Home />} />
    </Routes>
  );
}

export { routes, RoutesMap };
