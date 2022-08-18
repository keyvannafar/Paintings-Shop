
import { useState } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
function ProductCartItem({id, image, price, title, removeItem}){
  const [Fav, setFav] = useState(false);
  const setFavqtyDispatch = useDispatch();
  const qtyTotal = useSelector((state) => state.qtyTotalReducer.qtyTotal);
  const Favqty = useSelector((state) => state.FavQtyReducer.Favqty);
  let Favlist = []
  
  const toggleFav = () =>{
    setFav(!Fav);
    if (Fav == true) {

      if (localStorage.getItem("Fav")) {
        Favlist = JSON.parse(localStorage.getItem("Fav"));
      }
        const newFavlist = Favlist.filter(item => item.id !== id)
        localStorage.setItem("Fav", JSON.stringify(newFavlist));
      
      
      setFavqtyDispatch({ type: "removeFav" });
    } else {

      if (localStorage.getItem("Fav")) {
        Favlist = JSON.parse(localStorage.getItem("Fav"));
      }
        Favlist.push({ Favqty, id });
        localStorage.setItem("Fav", JSON.stringify(Favlist));
      setFavqtyDispatch({ type: "addFavqty" });
    }
  }
    return (
      <div class="card-body">
        <div class="row">
          <div class="col-lg-3 col-md-12 mb-4 mb-lg-0">
            <div
              class="bg-image hover-overlay hover-zoom ripple rounded"
              data-mdb-ripple-color="light"
            >
              <img src={image} class="w-100" alt="Blue Jeans Jacket" />
              <a href="#!">
                <div class="mask"></div>
              </a>
            </div>
          </div>

          <div class="col-lg-5 col-md-6 mb-4 mb-lg-0">
            <p>
              <strong>{title}</strong>
            </p>
            <p>Color: blue</p>
            <p>Size: M</p>
            <button
              type="button"
              class="btn btn-primary btn-sm me-1 mb-2 mt-2"
              data-mdb-toggle="tooltip"
              title="Remove item"
              onClick={() => removeItem(id)}
            >
              <i class="bi bi-trash"></i>
            </button>
            <button
              type="button"
              class="btn btn-danger btn-sm mb-0"
              data-mdb-toggle="tooltip"
              title="Move to the wish list"
              onClick={toggleFav}
            >
              <i class="bi bi-heart-fill"></i>
            </button>
          </div>

          <div class="col-lg-4 col-md-6 mb-4 mb-lg-0">
            <div class="d-flex mb-4">
              <button
                class="btn btn-primary px-3 me-2 "
                onclick="this.parentNode.querySelector('input[type=number]').stepDown()"
              >
                <i class="bi bi-dash"></i>
              </button>

              <div class="form-outline mt-2">
                <input
                  id="form1"
                  min="0"
                  name="quantity"
                  value="1"
                  type="number"
                  class="form-control"
                />
              </div>

              <button
                class="btn btn-primary px-3 ms-2"
                onclick="this.parentNode.querySelector('input[type=number]').stepUp()"
              >
                <i class="bi bi-plus"></i>
              </button>
            </div>

            <p class="text-start text-md-center">
              <strong>{price}</strong>
            </p>
          </div>
        </div>

        <hr class="my-4" />
      </div>
    );
}

export default ProductCartItem;