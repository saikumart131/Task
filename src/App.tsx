import { createContext, useEffect } from "react";
import "./App.css";
import { useDispatch, useSelector } from "react-redux";
import { setBrands } from "./redux/appSplice";
import brandsJson from "./brand.json";
import { RootState } from "./redux/store";

import Brands from "./Brands";
import Header from "./Header";
import FilterVehicles from "./Filter";
import { BrowserRouter, Routes, Route } from "react-router-dom";


export const context = createContext({
  name: 'Demo App',
});

function App() {
  const dispatch = useDispatch();
  const appState = useSelector((state: RootState) => state.appState);

  

  useEffect(() => {
    dispatch(setBrands(brandsJson));
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  console.log("brands json", appState);

  return (
    <div className="App">
      <div className="container">
        <BrowserRouter>
          <Header />
          <Routes>
            <Route path="/" element={<Brands />}></Route>
            <Route path="search-filter" element={<FilterVehicles />}></Route>
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
