import { Investigador } from "../types/tarjeta-investigador.type";
import { Proyecto } from "../types/proyecto.type";
import {EntidadesFooter } from "../types/footer.type";

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
        nombre: "Ingeniera de Sistemas",
        resaltar: false,
      },
      {
        nombre: "Ingeniera en Ciencia de Datos",
        resaltar: false,
      },
      {
        nombre: "Joven Investigadora",
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
        nombre: "Ingeniera Eléctrica",
        resaltar: false,
      },
      {
        nombre: "Ingeniera Eléctronica",
        resaltar: false,
      },
      {
        nombre: "Joven Investigadora",
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
        nombre: "Ingeniera de Telecomunicaciones",
        resaltar: false,
      },
      {
        nombre: "Estudiante de Maestría",
        resaltar: true,
      },
    ],
    contacto: "estebana.orozco@upb.edu.co",
  },
];

export const proyectos: Proyecto[] = [
  {
    numero: "1",
    titulo:
      "Analítica Descriptiva y Predictiva del Proceso Productivo de Cemento y Concreto",
    descripcion:
      "Objetivo: Estudiar el proceso productivo de cemento y concreto en la empresa Cementos Argos, mediante técnicas de aprendizaje estadístico aplicadas a los datos históricos, para el descubrimiento de patrones y variables relevantes que permitan identificar las combinaciones adecuadas que producen los valores nominales con menor dispersión.",
    urlImagen: "/Logo_EAFIT.png",
    urlSitio: "https://www.eafit.edu.co",
  },
  {
    numero: "2",
    titulo: "Aplicación de la Tecnología IoT en la Producción de Concreto",
    descripcion:
      "Objetivo: Diseñar una infraestructura de sensado, mediante la aplicación de IoT, para el monitoreo del proceso de producción del concreto.",
    urlImagen: "/Logo_UPB.png",
    urlSitio: "https://www.upb.edu.co/es/home",
  },
  {
    numero: "3",
    titulo: "Manufactura Inteligente de Cemento y Concreto",
    descripcion:
      "Objetivo: Desarrollar modelos predictivos para la formulación de concretos, usando técnicas de Inteligencia Artificial, para la reducción de la incertidumbre en las principales propiedades de desempeño del concreto (fraguados, resistencias, asentamiento).",
    urlImagen: "/Logo_UPB.png",
    urlSitio: "https://www.upb.edu.co/es/home",
  },
];

export const entidades: EntidadesFooter[] = [
  {
    urlImagenArgos: "/Logo_Argos.svg",
    urlSitioArgos: "https://argos.co/",
    urlImagenUPB: "/Logo_UPB.svg",
    urlSitioUPB: "https://www.upb.edu.co/es/home",
    urlImagenMinciencias: "/Logo_Minciencias.svg",
    urlSitioMinciencias: "https://minciencias.gov.co/",
  },
];
