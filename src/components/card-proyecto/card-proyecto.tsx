import './card-proyecto.css';
import eafitLogo from '../../assets/Logo_EAFIT.png';

export default function CardProyecto() {
    return(
        <div className='card-proyecto'>
            <div className='contenedor-informacion'>
                <h1 className='text-8xl'>1</h1>
                <h3 className='text-xl'>Analítica Descriptiva y Predictiva del Proceso Productivo de Cemento y Concreto</h3>
                <p className='text-base'>Objetivo:  Estudiar el proceso productivo de cemento y concreto en la empresa Cementos Argos, mediante técnicas de aprendizaje estadístico aplicadas a los datos históricos, para el descubrimiento de patrones y variables relevantes que permitan identificar las combinaciones adecuadas que producen los valores nominales con menor dispersión.</p>
            </div>
            <hr />
            <div className='contenedor-lider grid grid-cols-2'>
                <h3 className='text-xl'>Lidera</h3>
                <img className='' src={eafitLogo} alt="" />
            </div>
        </div>
    );
}