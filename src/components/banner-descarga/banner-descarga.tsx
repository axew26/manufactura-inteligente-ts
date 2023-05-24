import { BannerModelo } from "../../types/banner-descarga.type";
import "./banner-descarga.scss";

export default function BannerDescarga(props: Record<string, unknown>) {
  let banner: BannerModelo | BannerModelo[];
  let bannerView: JSX.Element;

  if (Array.isArray(props.banner)) {
    banner = props.banner as BannerModelo[];
    bannerView = (
      <div className="doble-banner-descarga flex flex-col md:flex-row">
        <div
          className="banner-descarga flex flex-col justify-center items-center md:flex-row"
          style={{ maxWidth: `${banner[0]?.maxWidth}px` }}
        >
          <div className="contenedor-titulo flex justify-center md:justify-start">
            <h2 className="text-xl">{banner[0]?.texto}</h2>
          </div>
          <hr />
          <div className="contenedor-boton">
            <button>
              <a href={banner[0]?.urlDescarga} download>
                Descargar
              </a>
            </button>
          </div>
        </div>
        <div className="separador-banners">
          <hr />
        </div>
        <div
          className="banner-descarga flex flex-col justify-center items-center md:flex-row"
          style={{ maxWidth: `${banner[1]?.maxWidth}px` }}
        >
          <div className="contenedor-titulo flex justify-center md:justify-start">
            <h2 className="text-xl">{banner[1]?.texto}</h2>
          </div>
          <hr />
          <div className="contenedor-boton">
            <button>
              <a href={banner[1]?.urlDescarga} download>
                Descargar
              </a>
            </button>
          </div>
        </div>
      </div>
    );
  } else {
    banner = props.banner as BannerModelo;
    bannerView = (
      <div
        className="banner-descarga flex flex-col justify-center items-center md:flex-row"
        style={{ maxWidth: `${banner?.maxWidth}px` }}
      >
        <div className="contenedor-titulo flex justify-center md:justify-start">
          <h2 className="text-xl">{banner?.texto}</h2>
        </div>
        <hr />
        <div className="contenedor-boton">
          <button>
            <a href={banner?.urlDescarga} download>
              Descargar
            </a>
          </button>
        </div>
      </div>
    );
  }
  return <>{bannerView}</>;
}
