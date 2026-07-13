import Form from "react-bootstrap/Form";
import ButtonComponent from "./ButtonComponent";
import Swal from "sweetalert2";

function ContactoComponent() {
  const manejarEnvio = (e) => {
    e.preventDefault();
    lanzarToastExito();
  };

  const lanzarToastExito = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: false,
      confirmButtonColor: "#212529",
      timer: 2000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "success",
      title: "¡Consulra realizada con éxito!",
    });
  };

  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-11 col-md-8 col-lg-5 bg-white p-4 border rounded shadow-sm">
          <h2 className="h4 text-center mb-4 fw-bold text-dark">Contacto</h2>

          <Form onSubmit={manejarEnvio}>
            <Form.Group className="mb-3" controlId="contactoNombre">
              <Form.Label className="fw-semibold small">
                Nombre completo
              </Form.Label>
              <Form.Control type="text" placeholder="Juan Pérez" required />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactoEmail">
              <Form.Label className="fw-semibold small">
                Correo electrónico
              </Form.Label>
              <Form.Control
                type="email"
                placeholder="nombre@ejemplo.com"
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactoAsunto">
              <Form.Label className="fw-semibold small">Asunto</Form.Label>

              <Form.Select required defaultValue="">
                <option value="" disabled hidden>
                  Selecciona un motivo...
                </option>
                <option value="consulta">Consulta general</option>
                <option value="reclamo">Reclamo / Soporte</option>
                <option value="sugerencia">Sugerencia</option>
              </Form.Select>
            </Form.Group>

            <Form.Group className="mb-3" controlId="contactoMensaje">
              <Form.Label className="fw-semibold small">Mensaje</Form.Label>
              <Form.Control
                as="textarea"
                rows={4}
                placeholder="Escribe tu mensaje aquí..."
                required
              />
            </Form.Group>

            <div className="d-grid mt-4">
              <ButtonComponent
                variant="dark"
                className="py-2 fw-bold"
                type="submit"
              >
                Enviar Mensaje
              </ButtonComponent>
            </div>
          </Form>
        </div>
      </div>
    </div>
  );
}

export default ContactoComponent;
