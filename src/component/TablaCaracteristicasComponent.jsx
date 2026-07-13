import Table from "react-bootstrap/Table";

function TablaCaracteristicasComponent({ caracteristicas }) {
  const caracteristicasArray = Object.entries(caracteristicas);

  return (
    <Table striped bordered hover size="sm">
      <tbody>
        <td colSpan={2}>Caracteristicas</td>
        {caracteristicasArray.map(([clave, valor], index) => (
          <tr key={index}>
            <td className="fw-bold text-capitalize">{clave}:</td>
            <td>{valor}</td>
          </tr>
        ))}
      </tbody>
    </Table>
  );
}

export default TablaCaracteristicasComponent;
