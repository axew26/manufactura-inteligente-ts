export interface Investigador {
  urlImagen: string;
  nombre: string;
  titulos: string | Titulo[];
  contacto: string;
}

export interface Titulo {
    nombre:string;
    resaltar:boolean;
}
