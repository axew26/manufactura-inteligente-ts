import { Investigador, Titulo } from '../../types/tarjeta-investigador.type';
import './tarjeta-investigador.scss';

export default function TarjetaInvestigador(props:Record<string,unknown>) {
    const investigador:Investigador = props?.investigador as Investigador;

    let titulosView:JSX.Element;

    if(typeof investigador.titulos === 'string') {
        titulosView = <p className='mt-2 text-base leading-7'>{investigador.titulos}</p>;
    }
    else {
        titulosView = <ul>
            {
                investigador.titulos.map((titulo:Titulo, key:number)=>{
                    if(titulo.resaltar) {
                        return <li key={key}>
                            <strong>{titulo.nombre}</strong>
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
        <div className='tarjeta-investigador w-[305px] h-[483px] rounded-lg text-[0.8125rem] text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10'>
            <div className='h-[50%] contenedor-imagen'>
                <img className="foto-investigador" src={investigador.urlImagen} alt="mock" />
            </div>
            <hr />
            <div className='h-[50%] contenedor-informacion p-3'>
                <h2 className='text-2xl'>{investigador.nombre}</h2>
                {titulosView}
                <p className='text-base leading-7'>{investigador.contacto}</p>
            </div>
        </div>
    );
  }