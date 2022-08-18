import React, { useContext, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "./Card.css";
import SetIdcontext from "../../Context/SetIdcontext";
import HTMLReactParser from "html-react-parser";
import Showqtycontext from "../../Context/Showqtycontext";
import { useSelector, useDispatch } from "react-redux";
import { Navigate, useNavigate } from "react-router-dom";

function Card({ title, des, price, image, id }) {
  const [Id, setId] =  useContext(SetIdcontext)
  const [qty, setqty] = useState(0);
  const [Fav, setFav] = useState(false);
  const [proId, setProId] = useState(0)
  const Login = useSelector((state) => state.LoginReducer.Login);
  const [Showqty, setShowqty] = useContext(Showqtycontext);
  const setQtyTotalDispatch = useDispatch();
  const setFavqtyDispatch = useDispatch();
  
  const Navigate = useNavigate()
  var sum1 = 0;
  function plus() {
    sum1 = sum1 + 1;
    if (qty < 9) {
      setqty(qty + 1);
      setQtyTotalDispatch({ type: "Increase" }); 
      
    }
  }
  const minus = () => {
    if (qty > 0) {
      setqty(qty - 1);
      
      setQtyTotalDispatch({ type: "Decrease" });
    }
  };
  const view = () => {
    setId(id);
     Navigate("/viewproduct");
  };
  function toggleFav() {
    setFav(!Fav);
     if (Fav == true) {
       setFavqtyDispatch({ type: "removeFav" });
     } else {
       setFavqtyDispatch({ type: "addFavqty" });
     };
  }
  return (
    <div className="col">
      <div className="card h-100 wow fadeInUp cardProduct">
        <img src={image} className="card-img-top fadeInUp" alt="products" />
        <div className="card-body">
          <h5 className="card-title">{title}</h5>
          <p className="card-text">{des}</p>
          <p>
            {price}$
          </p>
        </div>
        <div className="addqty">
          <div className="addqty-1">
            {Login == true ? (
              <div className="float-left">
                {Fav == false ? (
                  <i class="bi bi-heart" onClick={toggleFav}></i>
                ) : (
                  <i
                    class="bi bi-heart-fill text-danger"
                    onClick={toggleFav}
                  ></i>
                )}
              </div>
            ) : (
              <p></p>
            )}
            {/* <button className="button-pm" onClick={minus}>
              -
            </button>
            <div className="text-center">{qty}</div>
            <button className="button-pm" onClick={plus}>
              +
            </button> */}
          </div>
        </div>
        <button className="btn-primary" onClick={view}>
          More Info
        </button>
        <div></div>
        <div className="card-footer">
          <small className="text-muted"></small>
        </div>
      </div>
    </div>
  );
}

export default Card;
