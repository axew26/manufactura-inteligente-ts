import './tarjeta-investigador.css';

export default function TarjetaInvestigador() {
    return (
        <div className='tarjeta-investigador w-[305px] h-[483px] rounded-lg text-[0.8125rem] text-slate-900 shadow-xl shadow-black/5 ring-1 ring-slate-700/10'>
            <div className='h-[50%] contenedor-imagen'>
                <img className="foto-investigador" src="/mock_investigador.png" alt="mock" />
            </div>
            <hr />
            <div className='h-[50%] contenedor-informacion p-3'>
                <h2 className='text-2xl'>ana isabel oviedo carrascal, phd</h2>
                <p className='mt-4 text-base leading-7'>Investigadora Principal UPB</p>
                <p className='text-base leading-7'>ana-oviedo@upb.edu.co</p>
            </div>
        </div>
    );
  }