import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import { NavLink, useNavigate, useLocation } from "react-router";
import { BusquedaContext } from "../context/BusquedaContext";
import { useContext, useState } from "react";
import ImagenRedondaComponent from "../component/ImagenRedondaComponent";

function NavComponent() {
  const { setBusqueda } = useContext(BusquedaContext);
  const [inputLocal, setInputLocal] = useState("");
  const [placeholder, setPlaceholder] = useState("Buscar productos...");
  const navigate = useNavigate();
  //////////////////
  const imgPerfil = {
    src: "https://placehold.co/40x40",
    alt: "Logo de la tienda",
  };
  /////////////////
  const categoriEnCatalogo = (filtro) => {
    setBusqueda(filtro);

    navigate("/catalogo");
  };
  const manejarBusqueda = (e) => {
    e.preventDefault();
    if (inputLocal.trim() === "") {
      setPlaceholder("Ingrese un producto");
      return;
    }
    setBusqueda(inputLocal);
    setInputLocal("");
    navigate("/catalogo");
  };

  return (
    <Navbar expand="lg" className="bg-body-tertiary">
      <Container fluid>
        <Navbar.Brand as={NavLink} to="/">
          <ImagenRedondaComponent src={imgPerfil.src} alt={imgPerfil.alt} />
        </Navbar.Brand>

        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll" className="align-items-center">
          <Nav className="my-2 my-lg-0" navbarScroll>
            <Nav.Link
              as={NavLink}
              to="/catalogo"
              onClick={() => {
                setBusqueda("");
                setPlaceholder("Buscar productos...");
              }}
            >
              Catálogo
            </Nav.Link>
            {/* {location.pathname === "/catalogo" && ( */}
            <NavDropdown title="Categorias" id="navbarScrollingDropdown">
              <NavDropdown.Item onClick={() => categoriEnCatalogo("Alimento")}>
                Alimento
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => categoriEnCatalogo("Accesorios")}
              >
                Accesorios
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => categoriEnCatalogo("Dulces")}>
                Dulces
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => categoriEnCatalogo("Estética e Higiene")}
              >
                Estética e Higiene
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => categoriEnCatalogo("Juguetes")}>
                Juguetes
              </NavDropdown.Item>
              <NavDropdown.Item onClick={() => categoriEnCatalogo("Ropa")}>
                Ropa
              </NavDropdown.Item>
            </NavDropdown>
            {/*   )} */}
          </Nav>

          <Form
            className="d-flex my-2 my-lg-0 mx-lg-auto"
            style={{ maxWidth: "400px", width: "100%" }}
            onSubmit={manejarBusqueda}
          >
            <Form.Control
              type="Search"
              className="me-2"
              aria-label="Search"
              placeholder={placeholder}
              value={inputLocal}
              onChange={(e) => setInputLocal(e.target.value)}
            />
            <Button type="submit" variant="outline-success">
              Buscar
            </Button>
          </Form>
          <Nav className="my-2 my-lg-0 ms-lg-auto">
            <Nav.Link as={NavLink} to="/carrito">
              Carrito
            </Nav.Link>
            <Nav.Link as={NavLink} to="/Nosotros">
              Nosotros
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavComponent;
