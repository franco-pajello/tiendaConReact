import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import ButtonComponent from "./ButtonComponent";
import ImagenRedondaComponent from "./ImagenRedondaComponent";
import TotalCarritoComponent from "./TotalCarritoComponent";
import CardCatalogo from "./CardCatalogo";
import { Link } from "react-router";

function CarritoComponente() {
  const { carrito, setCarrito } = useContext(CarritoContext);

  function sumarCantidad(index) {
    const nuevoCarrito = [...carrito];
    if (nuevoCarrito[index].cantidad < nuevoCarrito[index].stock) {
      nuevoCarrito[index].cantidad++;
      setCarrito(nuevoCarrito);
    }
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
        <div className="container flex-grow-1 d-flex flex-column justify-content-center align-items-center py-5 my-auto text-center">
          <div className="p-5 rounded-4 bg-white shadow-sm border">
            <h1 className="display-6 fw-bold text-dark mb-3">
              El carrito está vacío
            </h1>
            <p className="text-muted mb-4">
              ¡Agrega algunos productos maravillosos para alegrar a tu mascota!
            </p>
            <Link to="/catalogo" className="btn btn-dark px-4 py-2 fw-semibold">
              Ir al catálogo
            </Link>
          </div>
        </div>
      ) : (
        <>
          <div>
            {carrito.map((producto, index) => {
              return (
                <div key={producto.id || index} className="container my-4">
                  <div className="row g-4 align-items-stretch">
                    <div className="col-12 col-md-6">
                      <ImagenRedondaComponent
                        src={producto.imagen[0]}
                        alt={producto.alt}
                      />
                    </div>

                    <div className="col-12 col-md-6 ">
                      <CardCatalogo producto={producto} className="h-100">
                        <div className="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
                          <Link
                            to={"/catalogo"}
                            className="btn btn-link text-decoration-none"
                          >
                            Volver
                          </Link>
                          <ButtonComponent
                            onBotonClick={() => sumarCantidad(index)}
                          >
                            <p className="m-0">+</p>
                          </ButtonComponent>
                          {producto.cantidad}
                          <ButtonComponent
                            onBotonClick={() => restarCantidad(index)}
                          >
                            <p className="m-0">-</p>
                          </ButtonComponent>

                          <ButtonComponent
                            onBotonClick={() => eliminarProducto(index)}
                          >
                            <p className="m-0">x</p>
                          </ButtonComponent>
                        </div>
                      </CardCatalogo>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
          <TotalCarritoComponent />
        </>
      )}
    </>
  );
}

export default CarritoComponente;
