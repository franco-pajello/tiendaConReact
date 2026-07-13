import Image from "react-bootstrap/Image";

function ImagenRedondaComponent({ src, alt }) {
  return (

    <Image 
      src={src} 
      roundedCircle 
      alt={alt} 
      className="img-fluid w-100" 
      style={{ objectFit: "cover", aspectRatio: "1/1" }} 
    />
  );
}

export default ImagenRedondaComponent;