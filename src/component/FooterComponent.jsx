import { Link } from "react-router";
import Nav from "react-bootstrap/Nav";

function FooterComponent() {
  return (
    <footer className="bg-dark text-light mt-5 py-4 border-top border-secondary">
      <div className="container">
        <div className="d-flex flex-column flex-md-row justify-content-center align-items-center gap-3">
          <Nav className="justify-content-center order-1 order-md-2">
            <Nav.Item>
              <Nav.Link
                as={Link}
                to="/contacto"
                className="text-light-50 text-hover-white link-light px-3"
              >
                Contáctanos
              </Nav.Link>
            </Nav.Item>
            <Nav.Item>
              <Nav.Link
                href="https://www.instagram.com/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-light-50 link-light px-3"
              >
                Instagram
              </Nav.Link>
            </Nav.Item>
          </Nav>

          <div className="order-2 order-md-3">
            <span className="badge bg-secondary p-2 fw-normal opacity-75">
              ¡Gracias por visitarnos!
            </span>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default FooterComponent;
