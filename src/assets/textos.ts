import { Investigador } from "../types/tarjeta-investigador.type";

export const investigadores: Investigador[] = [
  {
    urlImagen: "/mock_investigador.png",
    nombre: "ANA ISABEL OVIEDO CARRASCAL, PHD",
    titulos: "Investigadora Principal UPB",
    contacto: "ana-oviedo@upb.edu.co",
  },
  {
    urlImagen: "/mock_investigador.png",
    nombre: "JOHN FERNANDO VARGAS BUITRAGO, PHD",
    titulos: "Co-Investigador UPB",
    contacto: "johnfdo.vargas@upb.edu.co",
  },
  {
    urlImagen: "/mock_investigador.png",
    nombre: "JORGE MARIO LONDOÑO, PHD",
    titulos: "Co-Investigador UPB",
    contacto: "jorge.londono@upb.edu.co",
  },
  {
    urlImagen: "/mock_investigador.png",
    nombre: "ANA CRISTINA GÓMEZ, MSC",
    titulos: "Co-Investigador ARGOS",
    contacto: "agomezgo@argos.com.co",
  },
  {
    urlImagen: "/mock_investigador.png",
    nombre: "JUAN ANDRÉS TOBÓN",
    titulos: "Co-Investigador ARGOS",
    contacto: "johnfdo.vargas@argos.com.co",
  },
  {
    urlImagen: "/mock_investigador.png",
    nombre: "NATHALIA ANDREA ORTEGA",
    titulos: [
        {
            nombre: 'Ingeniera de Sistemas',
            resaltar: false,
        },
        {
            nombre: 'Ingeniera en Ciencia de Datos',
            resaltar: false,
        },
        {
            nombre: 'Joven Investigadora',
            resaltar: true,
        },
    ],
    contacto: "nathalia.ortega@upb.edu.co",
  },
  {
    urlImagen: "/mock_investigador.png",
    nombre: "CAROLINA ZULUAGA ÁLVAREZ",
    titulos: [
        {
            nombre: 'Ingeniera Eléctrica',
            resaltar: false,
        },
        {
            nombre: 'Ingeniera Eléctronica',
            resaltar: false,
        },
        {
            nombre: 'Joven Investigadora',
            resaltar: true,
        },
    ],
    contacto: "carolina.zuluagaa@upb.edu.co",
  },
  {
    urlImagen: "/mock_investigador.png",
    nombre: "ESTEBANA OROZCO RAMÍREZ",
    titulos: [
        {
            nombre: 'Ingeniera de Telecomunicaciones',
            resaltar: false,
        },
        {
            nombre: 'Estudiante de Maestría',
            resaltar: true,
        },
    ],
    contacto: "estebana.orozco@upb.edu.co",
  },
];
