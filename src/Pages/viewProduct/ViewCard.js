import { paintings } from "../../data";
import ViewData from ".";
import { useSelector } from "react-redux";
import { useContext } from "react";
import SetIdcontext from "../../Context/SetIdcontext";
import "./viewProduct.css";
function ViewCard() {
  const [Id, setId] = useContext(SetIdcontext);
  
  const selectPro = paintings.filter((item)=>item.id==Id)
  return (
    
            selectPro.map((item) => (
            <ViewData key={item.id} {...item} />
          ))
     
  );
}

export default ViewCard;
