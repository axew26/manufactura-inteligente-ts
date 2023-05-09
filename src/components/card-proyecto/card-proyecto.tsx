import './card-proyecto.css';
import eafitLogo from '../../assets/Logo_EAFIT.png';

export default function CardProyecto() {
    return(
        <div className='card-proyecto'>
            <div className='contenedor-informacion'>
                <h1 className='numero-card'>1</h1>
                <h3 className='titulo-card'>Analítica Descriptiva y Predictiva del Proceso Productivo de Cemento y Concreto</h3>
                <br />
                <p>
                    <strong>Objetivo:</strong> Estudiar el proceso productivo de cemento y concreto en la empresa Cementos Argos, mediante técnicas de aprendizaje estadístico aplicadas a los datos históricos, para el descubrimiento de patrones y variables relevantes que permitan identificar las combinaciones adecuadas que producen los valores nominales con menor dispersión.
                </p>
            </div>
            <hr />
            <div className='contenedor-lider'>
                <h3>
                    <strong>Lidera:</strong>
                </h3>
                <a href="https://www.eafit.edu.co" target="_blank">
                    <img className='' src={eafitLogo} alt="" />
                </a>
            </div>
        </div>
    );
}