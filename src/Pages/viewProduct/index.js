import { useSelector } from "react-redux/es/exports";
import { Navigate, useNavigate } from "react-router-dom";
import { useState } from "react";
import { useDispatch } from "react-redux/es/exports";
function ViewData({ title, des, price, image, id }) {
  
  const Navigate = useNavigate();
  const [Fav, setFav] = useState(false);
  const setFavqtyDispatch = useDispatch();
  function addToCart() {
    // if (!localStorage.getItem("cart")) {
    //   const checkOut = [{ title, des, price, image, id }];
    //   localStorage.setItem("cart", JSON.stringify(checkOut));
    //   Navigate("/AddToCart");
    // } else {
    //    const checkOut = JSON.parse(localStorage.getItem("cart"));
    //    checkOut.push({ title, des, price, image, id });
    //   localStorage.setItem("cart", JSON.stringify(checkOut));
    //    Navigate("/AddToCart");
    // }
    let checkOut = [];
    if (localStorage.getItem("cart")) {
      checkOut = JSON.parse(localStorage.getItem("cart"));
    }
    checkOut.push({ title, des, price, image, id });
    localStorage.setItem("cart", JSON.stringify(checkOut));
    Navigate("/AddToCart");
  }
  function toggleFav() {
    setFav(!Fav);
    if (Fav == true) {
      setFavqtyDispatch({ type: "removeFav" });
    } else {
      setFavqtyDispatch({ type: "addFavqty" });
    }
  }
  return (
    <div className="card mb-3 productZoomBox container gradiant-custom">
      <div className="row g-0">
        <div className="col-md-4 productZoom">
          <img src={image} className="img-fluid rounded-start" alt="..." />
        </div>
        <div className="col-md-8 productInfo">
          <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">description:{des}</p>
            <p className="card-text">
              <span className="text-muted">Size:</span>
            </p>
            <p className="card-text">
              <small className="text-muted">price: {price}</small>
            </p>
            <button className="btn btn-primary" onClick={addToCart}>
              add to cart
            </button>
            <br />
            <button className="btn btn-primary" onClick={toggleFav}>
              add to favorite
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default ViewData;
