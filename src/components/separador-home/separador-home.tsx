import './separador-home.scss'
import {SeparadorHomeModelo} from '../../types/separador-home.type';
import BannerDescarga from '../banner-descarga/banner-descarga';

export default function SeparadorHome(props:Record<string,unknown>) {
  const data = props.data as SeparadorHomeModelo;
    return (
      <>
        <div className="separador-home">
            <div className="contenedor-imagen">
                <img src={data?.urlImagen} />
            </div>
            <div className="contenedor-texto-banner">
                {data?.texto}
                <br />
                <BannerDescarga banner={data?.bannerDescarga}></BannerDescarga>
            </div>
        </div>
      </>
    );
  }
  