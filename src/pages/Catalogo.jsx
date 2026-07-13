import CardComponent from "../component/CardComponent";
import { useContext } from "react";
import { BusquedaContext } from "../context/BusquedaContext";
import { Link } from "react-router";

function Catalogo({ productos }) {
  const { busqueda } = useContext(BusquedaContext);

  const filtrarBusqueda = productos.filter(
    (p) =>
      p.nombre.toLowerCase().includes(busqueda.toLowerCase()) ||
      p.categoria.toLowerCase().includes(busqueda.toLowerCase()),
  );

  return (
    <div className="container py-4">
      <div className="row row-cols-1 row-cols-sm-2 row-cols-md-3 row-cols-lg-4 g-4">
        {filtrarBusqueda.map((producto) => {
          return (
            <div className="col d-flex align-items-stretch" key={producto.id}>
              <div className="w-100">
                {producto.stock < 1 ? (
                  <CardComponent producto={producto} />
                ) : (
                  <Link
                    to={`/detalle/${producto.id}`}
                    className="text-decoration-none"
                  >
                    <CardComponent producto={producto} />
                  </Link>
                )}
              </div>
            </div>
          );
        })}
      </div>

      {filtrarBusqueda.length === 0 && (
        <div className="text-center py-5 text-muted">
          <p className="mb-0">
            No se encontraron productos que coincidan con tu búsqueda.
          </p>
        </div>
      )}
    </div>
  );
}

export default Catalogo;
