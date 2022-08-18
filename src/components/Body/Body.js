import Card from "../Card";
import react, { useEffect, useState } from "react";
// import { products } from "../data.js";
import { useParams } from "react-router-dom";

function Body() {  
  const {category}= useParams()
  const [products, setProducts] = useState([])
  const [cat, setCat] = useState([]);

  // const [myid, setmyid] = useState(0);
  // const hallo = (id) => {
  //   setmyid(id);
  // }
  // const products_filter=products.filter((item) => item.category == keyvan); 
 useEffect(()=>{
    setCat(category)
 })
  useEffect(()=>{
    fetch(
      "https://fakestoreapi.com/products/category/" +
        category.replaceAll("-", " ")
    )
      .then((res) => res.json())
      .then((data) => setProducts(data))
      .catch((error) => console.log(error));
  },[cat])
 
  return (
    <div className="container">
      <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
        {products.map((item) => (
          <Card
            key={item.id}
            // id={item.id}
            // image={item.image}
            // title={item.title}
            // price={item.price}
            // click={hallo}
            {...item}
          />
        ))}
      </div>
    </div>
  );
}

export default Body;
