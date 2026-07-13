function NosotrosComponent() {
  return (
    <div className="container py-5">
      <div className="row justify-content-center">
        <div className="col-12 col-md-10 col-lg-8 bg-white p-4 p-md-5 rounded-4 shadow-sm">
          <div className="text-center mb-4">
            <span className="text-primary fw-bold text-uppercase tracking-wider small d-block mb-2">
              Quiénes Somos
            </span>
            <h2 className="display-5 fw-bold text-dark">Nuestra Historia</h2>
            <hr
              className="mx-auto bg-primary opacity-75 my-3"
              style={{ width: "60px", height: "4px" }}
            />
          </div>

          <div className="text-secondary lh-lg fs-5 text-center text-md-start">
            <p className="mb-4">
              <strong className="text-dark">PetShop</strong> nació
              de una idea simple pero profunda: el amor real por los animales.
              Inspirados por nuestras propias mascotas —quienes nos enseñaron el
              verdadero significado de la fidelidad y la pureza— decidimos crear
              un espacio digital diferente. Un pet shop online pensado por y
              para amantes de las mascotas.
            </p>

            <p className="mb-4">
              Sabemos que cada perro, gato o pequeño compañero tiene una
              personalidad única. Por eso, no nos limitamos a vender productos;
              seleccionamos soluciones prácticas y novedosas para el día a día.
              Ya sea que busques el alimento ideal para su nutrición, un abrigo
              cómodo para el invierno o ese accesorio de paseo que estabas
              necesitando, estamos acá para acompañarte en cada etapa de su
              vida.
            </p>

            <p className="mb-0 fw-semibold text-dark border-start border-3 border-primary ps-3 my-4 bg-light p-3 rounded-end">
              Creemos en la atención cercana y en la confianza mutua. Lo que te
              ofrecemos es lo que elegiríamos para nuestros propios mejores
              amigos. ¡Gracias por dejarnos ser parte del cuidado de tu mascota!
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NosotrosComponent;
