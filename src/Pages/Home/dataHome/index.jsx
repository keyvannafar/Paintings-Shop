import { dataHomaEnglish } from "./dataHome";
import { Navigate, useNavigate } from "react-router-dom";

function DataHome({ image, id, text, title }) {
    const Navigate = useNavigate()
    function category(){
        if(id == 1){
        Navigate('/paintings')}
    }
  return (
    <div className="col">
      <div className="card h-100 wow fadeInUp  homeCategories">
        <img src={image} className="card-img-top fadeInUp" alt="products" />
        <div className="card-body">
          <h5 className="card-title">{text}</h5>
        </div>
        <button className="btn-primary" onClick={category}>Click here</button>
        <div></div>
        <div className="card-footer"></div>
      </div>
    </div>
  );
}

export default DataHome;
