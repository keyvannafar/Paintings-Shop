import React, { useContext, useState } from "react";
import { BrowserRouter } from "react-router-dom";
import { RoutesMap } from "./routes";
import { Provider } from "react-redux";
import { Link } from "react-router-dom";
import { routes } from "./routes";
import "./assets/css/App.css";
import Header from "./components/layout/Header";
import Footer from "./components/layout/Footer";
import "./assets/css/Sec.css";
import Showqtycontext from "./Context/Showqtycontext";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle";
import SetIdcontext from "./Context/SetIdcontext";
import store from "./redux/store";
import Sidebar from "./components/Sidebar";
function App() {
  const [Showqty, setShowqty] = useState(false);
  const [Id, setId] = useState(0);
  return (
    <>
      <BrowserRouter>
        <Showqtycontext.Provider value={[Showqty, setShowqty]}>
          <SetIdcontext.Provider value={[Id, setId]}>
            <Provider store={store}>
              <Header />
              <div class="wrapper">
                <div className="slidebar">
                  <nav id="sidebar">
                    <Sidebar />
                  </nav>
                </div>
                <div id="content">
                  <RoutesMap />
                </div>
              </div>
              <Footer />
            </Provider>
          </SetIdcontext.Provider>
        </Showqtycontext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
