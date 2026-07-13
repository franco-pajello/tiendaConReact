import Card from "react-bootstrap/Card";
import { useLocation } from "react-router";

function CardCatalogo({ producto, children }) {
  const location = useLocation();
  const esRutaCarrito = location.pathname === "/carrito";
  return (
    <Card className="h-100">
      <Card.Body className="text-start d-flex flex-column justify-content-between">
        <Card.Title>{producto.nombre}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted">
          {producto.categoria}
        </Card.Subtitle>

        <Card.Text>{producto.descripcion}</Card.Text>
        <Card.Text>
          <span>Precio: $</span>
          {producto.precio}
        </Card.Text>
        <Card.Text>
          <span>Stock: </span>
          {producto.stock}
        </Card.Text>
        {esRutaCarrito && (
          <Card.Text className="text-success fw-bold border-top pt-2 mt-2">
            <span>Subtotal: </span>$
            {(producto.cantidad * producto.precio).toLocaleString()}
          </Card.Text>
        )}
        {children}
      </Card.Body>
    </Card>
  );
}

export default CardCatalogo;
