import NavComponent from "../component/NavComponent";
import CardComponent from "../component/CardComponent";
import ButtonComponent from "../component/ButtonComponent";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";

function InicioPage() {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const productos = [
    { nombre: "telefono", precio: 1500, stock: 100, cantidad: 1 },
  ];
  function agregarAlCarrito(producto) {
    setCarrito([...carrito,producto]);
  }
  function detalle() {}
  return (
    <>
      <NavComponent />
      {productos.map((producto, index) => {
        return (
          <div key={producto.id || index}>
            <CardComponent producto={producto} index={index} />
            <ButtonComponent
              text={"Agregar al acriito"}
              onBotonClick={() => agregarAlCarrito(producto)}
            />
            <ButtonComponent
              text={"Detalle"}
              onBotonClick={() => detalle(index)}
            />
          </div>
        );
      })}
    </>
  );
}

export default InicioPage;
