import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";

function CardComponent({ producto, index, children }) {
  return (
    <Card
      style={{
        width: "18rem",
        minHeight: "520px",
        filter: producto.stock < 1 ? "grayscale(100%)" : "none",
      }}
      className="d-flex flex-column justify-content-between shadow-sm h-100"
    >
      <Card.Img
        variant="top"
        src={producto.imagen[0]}
      />
      <Card.Body className="d-flex flex-column flex-grow-1 text-start">
        <Card.Title className="fw-bold">{producto.nombre}</Card.Title>
        <Card.Text className="text-secondary small flex-grow-1">
          {producto.descripcion}
        </Card.Text>
      </Card.Body>

      <ListGroup className="list-group-flush small">
        <ListGroup.Item>
          <strong>Categoría:</strong> {producto.categoria}
        </ListGroup.Item>
        <ListGroup.Item>
          <strong>Precio:</strong> ${producto.precio.toLocaleString()}
        </ListGroup.Item>
        <ListGroup.Item
          className={producto.stock < 1 ? "text-danger fw-bold" : ""}
        >
          <strong>Stock:</strong>{" "}
          {producto.stock < 1 ? "Agotado" : producto.stock}
        </ListGroup.Item>
      </ListGroup>
      <Card.Body className="pt-0">{children}</Card.Body>
    </Card>
  );
}

export default CardComponent;
