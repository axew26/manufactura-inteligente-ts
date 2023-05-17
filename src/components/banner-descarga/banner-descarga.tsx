import "./banner-descarga.scss";

export default function BannerDescarga(props: Record<string, unknown>) {
  return (
    <>
      <div
        className="banner-descarga flex flex-col justify-center items-center md:flex-row"
        style={{ maxWidth: "636px" }}
      >
        <div className="contenedor-titulo flex justify-start">
          <h2 className="text-xl">Manual de usuario del sitio web</h2>
        </div>
        <hr />
        <div className="contenedor-boton">
          <button>Descargar</button>
        </div>
      </div>

      <br />

      <div
        className="banner-descarga flex flex-col justify-center items-center md:flex-row"
        style={{ maxWidth: "486px" }}
      >
        <div className="contenedor-titulo">
          <h2 className="text-xl">Documento de diseño de innovación</h2>
        </div>
        <hr />
        <div className="contenedor-boton">
          <button>Descargar</button>
        </div>
      </div>

      <br />

      <div className="doble-banner-descarga flex flex-col md:flex-row">
        <div
          className="banner-descarga flex flex-col justify-center items-center md:flex-row"
          style={{ maxWidth: "486px" }}
        >
          <div className="contenedor-titulo">
            <h2 className="text-xl">Documento de diseño de innovación</h2>
          </div>
          <hr />
          <div className="contenedor-boton">
            <button>Descargar</button>
          </div>
        </div>
        <div className="separador-banners">
          <hr  />
        </div>
        <div
          className="banner-descarga flex flex-col justify-center items-center md:flex-row"
          style={{ maxWidth: "486px" }}
        >
          <div className="contenedor-titulo">
            <h2 className="text-xl">Documento de diseño de innovación</h2>
          </div>
          <hr />
          <div className="contenedor-boton">
            <button>Descargar</button>
          </div>
        </div>
      </div>
    </>
  );
}
