import Carousel from "react-bootstrap/Carousel";
import CategoriaComponent from "../component/CategoriaComponent";
import { imagenesCategoria } from "../assets/imagenesCategoria";

function InicioPage() {
  const imgCarrusel = [
    {
      src: "https://images.unsplash.com/photo-1516453734593-8d198ae84bcf?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8M3x8cGV0c2hvcHxlbnwwfHwwfHx8MA%3D%3D", 
      alt: "Primer Banner",
      titulo: "¡Bienvenidos a Tinda!",
      descripcion: "Disfrutá de las mejores ofertas de la semana.",
    },
    {
      src: "https://plus.unsplash.com/premium_photo-1661386072955-20fcc18e03d4?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MjV8fHBldHNob3B8ZW58MHx8MHx8fDA%3D",
      alt: "Segundo Banner",
      titulo: "Envíos Bonificados",
      descripcion: "Comprando más de $20.000 el envío es gratis.",
    },
  ];

  return (
    <div className="container py-4" style={{ maxWidth: "1200px" }}>
      <div className="row mb-5">
        <div className="col-12">
          <Carousel className="shadow-sm rounded overflow-hidden">
            {imgCarrusel.map((banner, index) => (
              <Carousel.Item key={index}>
                <img
                  className="d-block w-100"
                  src={banner.src}
                  alt={banner.alt}
                  style={{
                    objectFit: "cover",
                    minHeight: "250px",
                    maxHeight: "450px",
                  }}
                />
                <Carousel.Caption
                  className="bg-dark bg-opacity-50 rounded p-3 mb-3 m-auto"
                  style={{ maxWidth: "70%" }}
                >
                  <h3 className="h5 h3-md fw-bold">{banner.titulo}</h3>
                  <p className="small d-none d-sm-block mb-0">
                    {banner.descripcion}
                  </p>
                </Carousel.Caption>
              </Carousel.Item>
            ))}
          </Carousel>
        </div>
      </div>

      <div className="row justify-content-center">
        <div className="col-12 text-center">
          <h2 className="text-center mb-4 fw-bold text-dark">
            Nuestras Categorías
          </h2>
          <CategoriaComponent arrayCategoria={imagenesCategoria} />
        </div>
      </div>
    </div>
  );
}

export default InicioPage;
