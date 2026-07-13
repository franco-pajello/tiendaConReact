import { Route, Routes } from "react-router";
import Catalogo from "./pages/Catalogo";
import "./App.css";
import NavComponent from "./component/NavComponent";
import { CarritoContext } from "./context/CarritoContext";
import CarritoPages from "./pages/CarritoPages";
import { useState } from "react";
import { BusquedaContext } from "./context/BusquedaContext";
import DetallePage from "./pages/DetallePage";
import NosotrosPages from "./pages/NosotrosPage";
import FooterComponent from "./component/FooterComponent";
import InicioPage from "./pages/InicioPage";
import { productos } from "./data/productos";
import ContactoPages from "./pages/ContactoPages";
import FinalizarCompraPages from "./pages/FinalizarCompraPages";
import PaginaNoEncontradaPages from "./pages/PaginaNoEncontradaPages";

function App() {
  const [carrito, setCarrito] = useState([]);
  const [busqueda, setBusqueda] = useState("");

  return (
    <BusquedaContext.Provider value={{ busqueda, setBusqueda }}>
      <CarritoContext.Provider value={{ carrito, setCarrito }}>
        <div className="d-flex flex-column min-vh-100">
          <NavComponent />

          <main className="flex-grow-1">
            <Routes>
              <Route path="/" element={<InicioPage />} />
              <Route
                path="/catalogo"
                element={<Catalogo productos={productos} />}
              />
              <Route path="/carrito" element={<CarritoPages />} />
              <Route path="/detalle/:id" element={<DetallePage />} />
              <Route path="/nosotros" element={<NosotrosPages />} />
              <Route path="/contacto" element={<ContactoPages />} />
              <Route path="/Compra" element={<FinalizarCompraPages />} />
              <Route path="*" element={<PaginaNoEncontradaPages />} />
            </Routes>
          </main>

          <FooterComponent />
        </div>
      </CarritoContext.Provider>
    </BusquedaContext.Provider>
  );
}

export default App;
