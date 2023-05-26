import { BannerModelo } from "./banner-descarga.type";

export interface ArticuloResultadoModelo {
  numero: number;
  urlImagen: string;
  titulo: string;
  parrafo?: JSX.Element;
  parrafoExtra?: JSX.Element;
  banners: BannerModelo | BannerModelo[];
  urlImagenExtra: string;
}
