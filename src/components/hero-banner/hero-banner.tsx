import './hero-banner.scss'
import { ParrafoBannerHome } from '../../types/hero-banner.type';

export default function HeroBanner(props: Record<string, unknown>) {
    const parrafo = props.parrafo as ParrafoBannerHome;
    const partes = parrafo.parrafo.split('CONVOCATORIA DE PROGRAMAS CONECTANDO CONOCIMIENTO 2019 del Ministerio de Ciencia, Tecnología e Innovación de Colombia,');

    const string_uno = partes[0];
    const string_dos = 'CONVOCATORIA DE PROGRAMAS CONECTANDO CONOCIMIENTO 2019 del Ministerio de Ciencia, Tecnología e Innovación de Colombia,';
    const string_tres = partes[1];
    return(
        <div className="container-banner">
            <img src="/Hero_Banner_Home.svg" alt="" className='banner-home-desktop'/>
            <img src="/Hero_Banner_Home_Mobile.svg" alt="" className='banner-home-mobile'/>
            <div className="container-informacion">
                <p>
                {string_uno} <strong>{string_dos}</strong> {string_tres}
                </p>
            </div>
        </div>
    );
}