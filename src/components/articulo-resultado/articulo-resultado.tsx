import { ArticuloResultadoModelo } from "../../types/articulo-resultado.type";
import BannerDescarga from "../banner-descarga/banner-descarga";
import "./articulo-resultado.scss";

export default function ArticuloResultadoChild(props: Record<string, unknown>) {
  const articulo = props?.articulo as ArticuloResultadoModelo;

  if (articulo?.parrafo && articulo?.parrafo?.type !== "section") {
    throw new Error("el primer elemento debe de ser un section");
  }

  if (articulo?.parrafoExtra && articulo?.parrafoExtra?.type !== "section") {
    throw new Error("el segundo elemento debe de ser un section");
  }

  return (
    <>
      <div className="contenedor-ariticulo-resultado">
        <div className="separador separador-articulo-resultado">
          <div className="contenedor-imagen">
            <img src={articulo?.urlImagen} />
          </div>
          <div className="contenedor-informacion-general">
            <div
              className="contenedor-informacion"
              style={
                !Array.isArray
                  ? { justifyContent: "space-around" }
                  : { justifyContent: "space-evenly" }
              }
            >
              <div className="contenedor-titulo-resultados">
                <h2 className="numero">{articulo?.numero}.</h2>
                <h3 className="titulo">{articulo?.titulo}</h3>
              </div>
              <div className="contenedor-parrafo">{articulo?.parrafo}</div>
              {!Array.isArray(articulo.banners) && (
                <div className="contenedor-banner-descarga">
                  <BannerDescarga banner={articulo?.banners}></BannerDescarga>
                </div>
              )}
            </div>
          </div>
        </div>
        {articulo?.parrafoExtra && (
          <div className="separador separador-articulo-nodos">
            {articulo?.parrafoExtra}
          </div>
        )}
        {articulo.banners && Array.isArray(articulo.banners) && (
          <div className="separador separador-banner-descarga">
            <BannerDescarga banner={articulo?.banners}></BannerDescarga>
          </div>
        )}
      </div>
    </>
  );
}
