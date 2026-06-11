

function CardComponent({ producto, index}) {
  return (
    <div>
      <p>
        soy un producto {producto.nombre} index {index}
      </p>
      
    </div>
  );
}

export default CardComponent;
