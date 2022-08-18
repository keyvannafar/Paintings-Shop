import DataHome from "./dataHome";
import Slider from "../../components/Slider/Slider";
import "./Home.css";
import { dataHomaEnglish } from "./dataHome/dataHome";
function Home() {
  return (
    <>
      <div className="catTitle">
        <Slider />
        {/* <ViewCard /> */}
        <div className="container catTitle">
          <h2>Categories</h2>
        </div>
        <div className="mt-5">
          <div className="container">
            <div className="row row-cols-1 row-cols-md-3 row-cols-lg-3 g-4">
              {dataHomaEnglish.map((item) => (
                <DataHome key={item.id} {...item} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
export default Home;
