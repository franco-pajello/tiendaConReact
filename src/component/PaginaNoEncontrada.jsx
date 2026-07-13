import { Link } from "react-router";

function PaginaNoEncontrada() {
  return (
    <div className="container py-5 text-center">
      <h1 className="display-1 fw-bold text-secondary">404</h1>
      <h2 className="mb-4">Página no encontrada</h2>
      <Link to="/" className="btn btn-dark px-4 py-2">
        Volver al Inicio
      </Link>
    </div>
  );
}

export default PaginaNoEncontrada;
