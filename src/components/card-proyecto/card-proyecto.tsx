import "./card-proyecto.scss";
import { Proyecto } from "../../types/card-proyecto.type";

export default function CardProyecto(props: Record<string, unknown>) {

  const proyecto = props.proyecto as Proyecto;

  const [objetivo, descripcion] = proyecto.descripcion.split(": ");

  return (
    <div className="card-proyecto">
      <div className="contenedor-informacion">
        <h1 className="numero-card">{proyecto.numero}</h1>
        <h3 className="titulo-card">{proyecto.titulo}</h3>
        <br />
        <p className="descripcion-card">
          <strong>{objetivo}: </strong> {descripcion}
        </p>
      </div>

      <div className="contenedor-lider">
        <hr />
        <h3>
          <strong>Lidera:</strong>
        </h3>
        <a href={proyecto.urlSitio} target="_blank">
          <img className="" src={proyecto.urlImagen} alt="" />
        </a>
      </div>
    </div>
  );
}
