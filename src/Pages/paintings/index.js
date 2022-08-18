

import Card from "../../components/Card";
import { paintings } from "../../data";
import "./paintings.css";
import { useSelector } from "react-redux";
function PaintingsPage() {
  const Id = useSelector((state)=>state.UseId.Id)
  //alert(Id)
  
  return (
    <>
      {/* <div className="d-flex container"> */}
      {/* <div className="col-2"></div> */}
      <div className="col">
        {/* <Slider /> */}
        <div className="container">
          {/* <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4">
            {products.map((item) => (
              <Card
                Key={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div> */}
          <h2>Paintings</h2>
          <div className="row row-cols-1 row-cols-md-3 row-cols-lg-5 g-4 mt-2">
            {paintings.map((item) => (
              <Card
                Key={item.id}
                id={item.id}
                image={item.image}
                title={item.title}
                price={item.price}
              />
            ))}
          </div>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}
export default PaintingsPage;
