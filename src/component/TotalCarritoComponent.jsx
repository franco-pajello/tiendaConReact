import { CarritoContext } from "../context/CarritoContext";
import { useContext } from "react";
import Button from "react-bootstrap/Button";
import { Link } from "react-router";

function TotalCarritoComponent() {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const totalAPagar = carrito.reduce((total, producto) => {
    return total + producto.precio * producto.cantidad;
  }, 0);

  const vaciarCarrito = () => {
    carrito.map((p) => {
      p.cantidad = 1;
    });
    setCarrito([]);
  };

  return (
    <div className="card p-4 shadow-sm border-0 bg-light mt-3">
      <div className="d-flex justify-content-between align-items-center mb-3">
        <h5 className="mb-0 text-muted">Total a pagar:</h5>

        <span className="h3 mb-0 fw-bold text-success">
          ${totalAPagar.toLocaleString()}
        </span>
      </div>

      {carrito.length > 0 && (
        <div className="d-grid gap-2">
          <Button
            variant="success"
            size="lg"
            as={Link}
            to={"/Compra"}
          >
            Iniciar Compra
          </Button>
          <Button variant="outline-danger" size="sm" onClick={vaciarCarrito}>
            Vaciar Carrito
          </Button>
        </div>
      )}
    </div>
  );
}

export default TotalCarritoComponent;
