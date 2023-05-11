import './card-proyecto.css';
import { Card } from '../../types/card-proyecto.type';

export default function CardProyecto(props:Record<string,unknown>) {

    const card:Card = props?.card as Card;

    const [objetivo, descripcion] = card.descripcion.split(': ');

    return(
        <div className='card-proyecto'>
            <div className='contenedor-informacion'>
                <h1 className='numero-card'>{card.numero}</h1>
                <h3 className='titulo-card'>{card.titulo}</h3>
                <br />
                <p className='descripcion-card'>
                    <strong>{objetivo}: </strong> {descripcion}
                </p>
            </div>
            
            <div className='contenedor-lider'>
                <hr />
                <h3>
                    <strong>Lidera:</strong>
                </h3>
                <a href={card.urlSitio} target="_blank">
                    <img className='' src={card.urlImagen} alt="" />
                </a>
            </div>
        </div>
    );
}