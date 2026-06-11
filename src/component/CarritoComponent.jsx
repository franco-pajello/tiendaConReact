import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import CardComponent from "./CardComponent";
import ButtonComponent from "./ButtonComponent";

function CarritoComponente() {
  const { carrito, setCarrito } = useContext(CarritoContext);

  function sumarCantidad(index) {
    const nuevoCarrito = [...carrito];
    nuevoCarrito[index].cantidad++;
    setCarrito(nuevoCarrito);
  }

  function restarCantidad(index) {
    const nuevoCarrito = [...carrito];
    if (nuevoCarrito[index].cantidad > 1) {
      nuevoCarrito[index].cantidad--;
      setCarrito(nuevoCarrito);
    }
  }

  function eliminarProducto(indexABorrar) {
    const productosFiltrados = carrito.filter(
      (_, index) => index !== indexABorrar,
    );
    setCarrito(productosFiltrados);
  }

  return (
    <>
      {carrito.length === 0 ? (
        <h1>El carrito está vacío</h1>
      ) : (
        <div className="carrito-lista">
          {carrito.map((producto, index) => {
            return (
              <div key={index} style={{ marginBottom: "15px" }}>
                <CardComponent producto={producto} index={index} />
                {/* Mostramos la cantidad actual */}
                <span>Cantidad: {producto.cantidad} </span>

                <ButtonComponent
                  onBotonClick={() => sumarCantidad(index)}
                  text="+"
                />
                <ButtonComponent
                  onBotonClick={() => restarCantidad(index)}
                  text="-"
                />
                <ButtonComponent
                  onBotonClick={() => eliminarProducto(index)}
                  text="x"
                />
              </div>
            );
          })}
        </div>
      )}
    </>
  );
}

export default CarritoComponente;
