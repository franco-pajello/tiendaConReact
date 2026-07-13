import { useParams } from "react-router"
import DetalleComponent from "../component/DetalleComponent"

function DetallePage() {
    const {id} = useParams()
  return (


    <DetalleComponent id={id} />
  )
}

export default DetallePage