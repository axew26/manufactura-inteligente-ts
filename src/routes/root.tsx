import "./root.scss";

/**
 * Prueba de librerias para carrusel
 */
/**
 * Splide
 */
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

/**
 * Swiper
 */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

export default function Root() {
  const imagenes = [...new Array(10)].map((_, index: number) => (
    <img key={index} src="/vite.svg" alt="Image 1" />
  ));

  /**
   * Splide
   */
  const splideSlides = imagenes.map((element: JSX.Element, index: number) => (
    <SplideSlide key={index}>{element}</SplideSlide>
  ));

  /**
   * Swiper
   */
  const swiperSlides = imagenes.map((element: JSX.Element, index: number) => (
    <SwiperSlide key={index}>{element}</SwiperSlide>
  ));

  const gridImagenes = <div className="grid-imagenes">
      {imagenes}
  </div>;

  return (
    <>
      {gridImagenes}
      <section>
        <h2>SPLIDE</h2>
        <Splide
          options={{
            padding: "5rem",
            perPage: 1,
            perMove: 1,
            arrows: false,
          }}
        >
          {splideSlides}
        </Splide>
      </section>

      <section>
        <h2>Swiper</h2>
        <Swiper
          slidesPerView={1.5}
          spaceBetween={0}
          centeredSlides={true}
          pagination={{
            clickable: true,
          }}
          modules={[Pagination]}
        >
          {swiperSlides}
        </Swiper>
      </section>
    </>
  );
}
