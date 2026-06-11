import { Route, Routes } from "react-router";
import InicioPage from "./pages/InicioPage";
import "./App.css";
import { CarritoContext } from "./context/CarritoContext";
import CarritoPages from "./pages/CarritoPages";
import { useState } from "react";
function App() {
const [carrito,setCarrito] = useState([])


  return (
    <>
      <CarritoContext.Provider value={{carrito,setCarrito}}>
        <Routes>
          <Route path="/" element={<InicioPage />} />
          <Route path="/carrito" element={<CarritoPages />} />
        </Routes>
      </CarritoContext.Provider>
    </>
  );
}

export default App;
