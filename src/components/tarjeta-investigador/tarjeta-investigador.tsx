import { Investigador, Titulo } from '../../types/tarjeta-investigador.type';
import './tarjeta-investigador.scss';

export default function TarjetaInvestigador(props:Record<string,unknown>) {
    const investigador:Investigador = props?.investigador as Investigador;

    let titulosView:JSX.Element;

    let listaTitulos = false;

    if(typeof investigador.titulos === 'string') {
        titulosView = <p className='mt-2 text-base leading-7 titulo'>{investigador.titulos}</p>;
    }
    else {
        listaTitulos = true;
        titulosView = <ul>
            {
                investigador.titulos.map((titulo:Titulo, key:number)=>{
                    if(titulo.resaltar) {
                        return <li key={key}>
                            <strong className="titulo-resaltado">{titulo.nombre}</strong>
                        </li>
                    } else {
                        return <li key={key}>{titulo.nombre}</li>
                    }
                }
                )
            }
        </ul>
    }

    return (
        <div className='tarjeta-investigador w-[305px] h-[483px] text-[0.8125rem] '>
            <div className='h-[50%] contenedor-imagen'>
                <img className="foto-investigador" src={investigador.urlImagen} alt="mock" />
            </div>
            <hr />
            <div className='h-[50%] contenedor-informacion p-3'>
                <h2 className='text-2xl'>{investigador.nombre}</h2>
                {titulosView}
                <div className={listaTitulos?'contacto flex flex-col justify-end h-1/3':'contacto'}>
                    <p className='text-base leading-7'>{investigador.contacto}</p>
                </div>
            </div>
        </div>
    );
  }