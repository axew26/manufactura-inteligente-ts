/**
 * Swiper
 */
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";

import "./generador-swiper.scss";

export default function GeneradorSwiper(props: Record<string, unknown>) {
  const elementos = props.elementos as JSX.Element[];

  if (!Array.isArray(elementos)) {
    throw new Error("debe de enviarse un array de elementos JSX");
  }

  /**
   * Swiper
   */
  const swiperSlides = elementos.map((element: JSX.Element, index: number) => (
    <SwiperSlide key={index}>{element}</SwiperSlide>
  ));

  const gridElementos = <div className="grid-elementos">{elementos}</div>;

  return (
    <>
      <section>{gridElementos}</section>
      <section className="swiper">
        <Swiper
          spaceBetween={10}
          centeredSlides={false}
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
