import { Link, useNavigate } from "react-router";
import { productos } from "../data/productos";
import { useContext } from "react";
import { CarritoContext } from "../context/CarritoContext";
import ButtonComponent from "./ButtonComponent";
import Carousel from "react-bootstrap/Carousel";
import CardCatalogo from "./CardCatalogo";
import TablaCaracteristicasComponent from "./TablaCaracteristicasComponent";
import CategoriaComponent from "../component/CategoriaComponent";
import { imagenesCategoria } from "../assets/imagenesCategoria";
import Swal from "sweetalert2";

function DetalleComponent({ id }) {
  const { carrito, setCarrito } = useContext(CarritoContext);
  const unProduct = productos.find((p) => p.id == id);
  const listaImagenes = unProduct ? unProduct.imagen : [];
  const navigate = useNavigate();

  const lanzarToastExito = () => {
    const Toast = Swal.mixin({
      toast: true,
      position: "top-end",
      showConfirmButton: true,
      confirmButtonText: "Ir al carrito",
      confirmButtonColor: "#212529",
      timer: 4000,
      timerProgressBar: true,
    });

    Toast.fire({
      icon: "success",
      title: "Producto añadido",
    }).then((result) => {
      if (result.isConfirmed) {
        navigate("/carrito");
      }
    });
  };

  const agregarAlCarrito = (producto) => {
    const productoEncontrado = carrito.find((p) => p.id == producto.id);

    if (productoEncontrado) {
      const carritoModificado = carrito.map(
        (p) => p.id == producto.id && { ...p, cantidad: p.cantidad + 1 },
      );
      setCarrito(carritoModificado);
    } else {
      setCarrito([...carrito, producto]);
    }
    lanzarToastExito();
  };
  return (
    <div className="container my-4">
      <div className="row g-4 align-items-stretch">
        <div className="col-12 col-md-4">
          <Carousel>
            {listaImagenes.map((imgUrl, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={imgUrl}
                  alt={`Imagen ${index}`}
                  style={{ objectFit: "cover", height: "400px" }}
                />
              </Carousel.Item>
            ))}
          </Carousel>
        </div>

        <div className="col-12 col-md-4 ">
          <CardCatalogo producto={unProduct} className="h-100">
            <div className="d-flex justify-content-between align-items-center mt-4 border-top pt-3">
              <Link
                to={"/catalogo"}
                className="btn btn-link text-decoration-none"
              >
                Volver
              </Link>
              <ButtonComponent onBotonClick={() => agregarAlCarrito(unProduct)}>
                Agregar al carrito
              </ButtonComponent>
            </div>
          </CardCatalogo>
        </div>
        <div className="col-12 col-md-4 ">
          <TablaCaracteristicasComponent
            caracteristicas={unProduct.caracteristicas}
          />
        </div>
      </div>
      <CategoriaComponent arrayCategoria={imagenesCategoria} />
    </div>
  );
}

export default DetalleComponent;
