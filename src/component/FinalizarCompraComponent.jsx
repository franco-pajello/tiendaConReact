import Form from "react-bootstrap/Form";
import ButtonComponent from "./ButtonComponent";
import Swal from "sweetalert2";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import { useNavigate } from "react-router";

function FinalizarCompraComponent() {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const navigate = useNavigate();

  const manejarEnvio = (e) => {
    e.preventDefault();
    if (carrito < 1) {
      lanzarToastError();
      return;
    }
    lanzarToastExito();
    setCarrito([]);
  };

  const lanzarToastExito = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      confirmButtonText: "Seguir comprando",
      confirmButtonColor: "#212529",
      timer: 4000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "success",
      title: "¡Compra procesada con éxito!",
    }).then(() => {
      navigate("/catalogo");
    });
  };
  const lanzarToastError = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      confirmButtonText: "Ir al catalogo",
      confirmButtonColor: "#212529",
      timer: 4000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "error",
      title: "¡Su carrito está vacío!",
    }).then(() => {
      navigate("/catalogo");
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-11 col-md-8 col-lg-6 bg-white p-4 border rounded shadow-sm">
          <h2 className="h4 text-center mb-4 fw-bold text-dark">
            Realizar Compra
          </h2>

          <Form onSubmit={manejarEnvio}>
            <Form.Group className="mb-3" controlId="compraNombre">
              <Form.Label className="fw-semibold small">
                Nombre completo
              </Form.Label>
              <Form.Control type="text" placeholder="Juan Pérez" required />
            </Form.Group>

            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="compraEmail">
                  <Form.Label className="fw-semibold small">
                    Correo electrónico
                  </Form.Label>
                  <Form.Control
                    type="email"
                    placeholder="nombre@ejemplo.com"
                    required
                  />
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="compraTelefono">
                  <Form.Label className="fw-semibold small">
                    Teléfono / WhatsApp
                  </Form.Label>
                  <Form.Control
                    type="tel"
                    placeholder="11 2345-6789"
                    required
                  />
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-3" controlId="compraDireccion">
              <Form.Label className="fw-semibold small">
                Dirección de envío
              </Form.Label>
              <Form.Control
                type="text"
                placeholder="Av. Siempreviva 742, Piso 1 Dpto B"
                required
              />
            </Form.Group>

            <div className="row">
              <div className="col-md-8">
                <Form.Group className="mb-3" controlId="compraLocalidad">
                  <Form.Label className="fw-semibold small">
                    Localidad / Ciudad
                  </Form.Label>
                  <Form.Control type="text" placeholder="San Justo" required />
                </Form.Group>
              </div>

              <div className="col-md-4">
                <Form.Group className="mb-3" controlId="compraCodigoPostal">
                  <Form.Label className="fw-semibold small">
                    Código Postal
                  </Form.Label>
                  <Form.Control type="text" placeholder="1754" required />
                </Form.Group>
              </div>
            </div>

            <div className="row">
              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="compraMetodoEntrega">
                  <Form.Label className="fw-semibold small">
                    Método de entrega
                  </Form.Label>
                  <Form.Select required defaultValue="">
                    <option value="" disabled hidden>
                      Selecciona una opción...
                    </option>
                    <option value="sucursal">
                      Retiro por sucursal (Gratis)
                    </option>
                    <option value="domicilio">Envío a domicilio</option>
                    <option value="correo">Envío por Correo Argentino</option>
                  </Form.Select>
                </Form.Group>
              </div>

              <div className="col-md-6">
                <Form.Group className="mb-3" controlId="compraMetodoPago">
                  <Form.Label className="fw-semibold small">
                    Método de pago
                  </Form.Label>
                  <Form.Select required defaultValue="">
                    <option value="" disabled hidden>
                      Selecciona una opción de pago...
                    </option>
                    <option value="transferencia">
                      Transferencia bancaria (10% OFF)
                    </option>
                    <option value="mercadopago">Mercado Pago / Tarjetas</option>
                    <option value="efectivo">Efectivo al retirar</option>
                  </Form.Select>
                </Form.Group>
              </div>
            </div>

            <Form.Group className="mb-4" controlId="compraNotas">
              <Form.Label className="fw-semibold small text-muted">
                Notas del pedido / Aclaraciones{" "}
                <span className="text-secondary">(opcional)</span>
              </Form.Label>
              <Form.Control
                as="textarea"
                rows={2}
                placeholder="Ej: El timbre no funciona, dejar en portería, etc."
              />
            </Form.Group>

            <div className="d-grid mt-4">
              <ButtonComponent
                variant="dark"
                className="py-2 fw-bold"
                type="submit"
                onBotonClick={() => manejarEnvio()}
              >
                Confirmar compra
              </ButtonComponent>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default FinalizarCompraComponent;
