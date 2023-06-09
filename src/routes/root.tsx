import {
  headerTitulos,
  parrafoBannerHome,
  proyectos,
  separadorHome,
  articulosResultado,
  investigadores,
  entidades,
} from "../assets/textos";
import Header from "../components/header/header";
import HeroBanner from "../components/hero-banner/hero-banner";
import CardProyecto from "../components/card-proyecto/card-proyecto";
import GeneradorSwiper from "../components/generador-swiper/generador-swiper";
import SeparadorHome from "../components/separador-home/separador-home";
import ArticuloResultadoChild from "../components/articulo-resultado/articulo-resultado";
import TarjetaInvestigador from "../components/tarjeta-investigador/tarjeta-investigador";
import Footer from "../components/footer/footer";

import "./root.scss";

export default function Root() {
  const headerView = headerTitulos.map((headerTitulos, key: number) => (
    <Header key={key} header={headerTitulos}></Header>
  ));
  const heroBannerView = parrafoBannerHome.map(
    (parrafoBannerHome, key:number) =>(
      <HeroBanner
        key={key}
        parrafo={parrafoBannerHome}
      ></HeroBanner>
    )
  )
  const cardsProyectosView = proyectos.map((proyecto, key: number) => (
    <CardProyecto key={key} proyecto={proyecto}></CardProyecto>
  ));
  const articulosResultadoView = articulosResultado.map(
    (articulo, key: number) => (
      <ArticuloResultadoChild
        key={key}
        articulo={articulo}
      ></ArticuloResultadoChild>
    )
  );
  const investigadoresView = investigadores.map((investigador, key: number) => (
    <TarjetaInvestigador
      key={key}
      investigador={investigador}
    ></TarjetaInvestigador>
  ));
  const footerView = entidades.map((footer, key: number) => (
    <Footer key={key} footer={footer}></Footer>
  ));
  return (
    <>
      {headerView}
      <section className="section-hero-banner">
        {heroBannerView}
      </section>
      <section className="swiper-1">
        <GeneradorSwiper elementos={cardsProyectosView}></GeneradorSwiper>
      </section>
      <section className="section-separador-home">
        <SeparadorHome data={separadorHome}></SeparadorHome>
      </section>
      <section className="section-titulo-resultados">
        <div className="div-titulo-resultados">
          <h2 className="titulo-resultados">
            A continuación, se describen los resultados del proyecto.
          </h2>
        </div>
        {articulosResultadoView}
      </section>
      <section className="section-investigadores">
        <div className="div-titulo-investigadores">
          <h2 className="titulo-investigadores">Grupo de Trabajo</h2>
        </div>
        <GeneradorSwiper elementos={investigadoresView}></GeneradorSwiper>
      </section>
      {footerView}
    </>
  );
}

/* <section className="contenido-root">
<GeneradorSwiper elementos={cardsProyectos}></GeneradorSwiper>
</section> */
