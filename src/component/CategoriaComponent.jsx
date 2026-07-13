import ButtonComponent from "./ButtonComponent";
import ImagenRedondaComponent from "./ImagenRedondaComponent";
import { useContext } from "react";
import { BusquedaContext } from "../context/BusquedaContext";
import { useNavigate } from "react-router";

function CategoriaComponent({ arrayCategoria }) {
  const { setBusqueda } = useContext(BusquedaContext);
  const navigate = useNavigate();

  const categoriEnCatalogo = (categoria) => {
    setBusqueda(categoria);
    navigate("/catalogo");
  };

  return (
    <div className="container my-4">
      <div className="row g-3 justify-content-center ">
        {arrayCategoria.map((c, key) => {
          return (
            <div key={key} className={`col-6 col-sm-4 col-md-2 d-flex`}>
              <ButtonComponent
                variant="light"
                className="w-100 border p-2 rounded-3 d-flex flex-column flex-xl-row align-items-center justify-content-center text-center text-xl-start gap-2"
                onBotonClick={() => categoriEnCatalogo(c.categoria)}
              >
                <div style={{ width: "100%", minWidth: "45px" }}>
                  <ImagenRedondaComponent
                    src={c.src}
                    alt={c.alt}
                    className="align-items-center"
                  />
                </div>

                <div className="text-truncate" style={{ maxWidth: "100%" }}>
                  <span className="small fw-semibold text-dark">
                    {c.categoria}
                  </span>
                </div>
              </ButtonComponent>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CategoriaComponent;
