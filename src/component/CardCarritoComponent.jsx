import Card from "react-bootstrap/Card";
import ImagenRedondaComponent from "../component/ImagenRedondaComponent";

function CardCarritoComponent({ producto, index, children }) {
  return (
    <Card className="mb-3 shadow-sm">
      <Card.Body className="d-flex align-items-center justify-content-between gap-3">
        <div>
          <ImagenRedondaComponent src={producto.imagen[0]} alt={producto.alt} />
        </div>
        <div>
          <Card.Title className="h6 mb-1">{producto.nombre}</Card.Title>
          <Card.Subtitle className="mb-2 text-muted">
            {producto.categoria}
          </Card.Subtitle>

          <Card.Text>
            <div>
            <strong>$ {producto.precio.toLocaleString()}</strong>
            </div>
            Cantidad: {producto.cantidad}
          </Card.Text>
        </div>

        <div className="d-flex align-items-center gap-2">{children}</div>
      </Card.Body>
    </Card>
  );
}

export default CardCarritoComponent;
