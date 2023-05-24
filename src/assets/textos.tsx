import { HeaderTitulos } from "../types/header.type";
import { Investigador } from "../types/tarjeta-investigador.type";
import { Proyecto } from "../types/proyecto.type";
import { EntidadesFooter } from "../types/footer.type";
import { ArticuloResultadoModelo } from "../types/articulo-resultado.type";
import { SeparadorHomeModelo } from "../types/separador-home.type";

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
    urlImagen: "/Logo_EAFIT.svg",
    urlSitio: "https://www.eafit.edu.co",
  },
  {
    numero: "2",
    titulo: "Aplicación de la Tecnología IoT en la Producción de Concreto",
    descripcion:
      "Objetivo: Diseñar una infraestructura de sensado, mediante la aplicación de IoT, para el monitoreo del proceso de producción del concreto.",
    urlImagen: "/Logo_UPB.svg",
    urlSitio: "https://www.upb.edu.co/es/home",
  },
  {
    numero: "3",
    titulo: "Manufactura Inteligente de Cemento y Concreto",
    descripcion:
      "Objetivo: Desarrollar modelos predictivos para la formulación de concretos, usando técnicas de Inteligencia Artificial, para la reducción de la incertidumbre en las principales propiedades de desempeño del concreto (fraguados, resistencias, asentamiento).",
    urlImagen: "/Logo_UPB.svg",
    urlSitio: "https://www.upb.edu.co/es/home",
  },
];

export const headerTitulos: HeaderTitulos[] = [
  {
    titulo1: "Descipción de la creación de los modelos",
    titulo2: "Predicción de resistencia a la comprensión y asentamiento",
    titulo3: "Predicción de resistencia a la flexión",
    titulo4: "Predicción de conjunto de datos en Excel",
    titulo5: "Optimización de fórmula de concreto",
    subtitulo1: "Explicación de los métodos predictivos utilizados",
    subtitulo2: "Resultados de resistencia a la compresión",
    subtitulo3: "Resultados de resistencia a la flexión",
    subtitulo4: "Resultados de resistencia a la flexión",
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

export const articulosResultado: ArticuloResultadoModelo[] = [
  {
    numero: 1,
    urlImagen: "/resultados/articulo_1.png",
    titulo: "diseño de innovación",
    parrafo: (
      <section>      
        <p>
          Se presenta un estado del arte en la aplicación de técnicas de
          inteligencia artificial en la producción de cemento y concreto y se
          proponen algunas innovaciones en ARGOS, donde se aplican técnicas de
          aprendizaje de máquinas, procesamiento de lenguaje natural y visión
          artificial.
        </p>
      </section>
    ),
    banners: {
      texto: "Documento de diseño de innovación",
      urlDescarga: "/",
      maxWidth: 486,
    },
  },
  {
    numero:2,
    urlImagen: "/resultados/articulo_2.png",
    titulo: "predicción de desempeño de concretos",
    parrafo: 
      <section>
        <p>En este sitio web se encuentran disponibles 3 modelos que permiten predecir:</p> <br/>
        <ul style={{ listStyle : 'disc', margin: '0 0 0 35px'}}>
        <li><strong>Resistencia a la compresión:</strong> se mide en unidades de presión, en megapascales (MPa) indicando la cantidad de fuerza que puede soportar por unidad de área antes de que se produzca una falla por compresión.</li> <br/>
        <li><strong>Resistencia a la flexión:</strong> se mide en unidades de presión, en megapascales (MPa), indicando la cantidad de fuerza que puede soportar por unidad de área antes de que se produzca una falla por flexión.</li> <br/>
        <li><strong>Asentamiento:</strong> se mide en unidades de longitud, en milímetros (mm) o en pulgadas, indicando la cantidad de deformación vertical que experimenta una muestra de concreto fresco cuando se somete a una vibración controlada y luego se deja en reposo.</li> <br/>
        </ul>
      </section>,
    parrafoExtra:
      <section style={{minWidth: '100%', display:'flex', justifyContent:'space-between'}}>
        <table style={{maxWidth: '500px', width:'47%'}}>
          <thead>
            <tr>
              <th>
                <h3>materiales para la construcción de concreto</h3>
              </th>
              <th>
                <h3>variables utilizadas en la predicción</h3>
              </th>
            </tr>
          </thead>
            <tbody>
              <tr>
                <td><span>Agregado Grueso</span></td>
                <td>
                  <ul>
                    <li>Cantidad</li>
                    <li>Humedad</li>
                    <li>Origen</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><span>Agregado Fino tipo 1</span></td>
                <td>
                  <ul>
                    <li>Cantidad</li>
                    <li>Humedad</li>
                    <li>Origen</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><span>Agregado Fino tipo 2</span></td>
                <td>
                  <ul>
                    <li>Cantidad</li>
                    <li>Humedad</li>
                    <li>Origen</li>
                  </ul>
                </td>
              </tr>
              <tr>
                <td><span>MCS: Caliza Pulverizada y Cenizas volantes</span></td>
                <td><span>Cantidad</span></td>
              </tr>
              <tr>
                <td><span>Cemento Blanco</span></td>
                <td><span>Cantidad</span></td>
              </tr>
              <tr>
                <td><span>Cemento Gris Estructural Max</span></td>
                <td><span>Cantidad</span></td>
              </tr>
              <tr>
                <td><span>Cemento Gris UG</span></td>
                <td><span>Cantidad</span></td>
              </tr>
              <tr>
                <td><span>Aditivo 2</span></td>
                <td><span>Cantidad</span></td>
              </tr>
              <tr>
                <td><span>Aditivo 1</span></td>
                <td><span>Cantidad</span></td>
              </tr>
              <tr>
                <td><span>Agua</span></td>
                <td><span>Cantidad</span></td>
              </tr>
            </tbody>
        </table>
        <p style={{width:'47%'}}>
          <strong>Las variables utilizadas para la predicción son:</strong>
          La predicción es realizada por medio de métodos de aprendizaje de máquinas, un área de la Inteligencia Artificial 
          que estudia los métodos para dotar a las máquinas con la capacidad de aprender a partir de datos o de la experiencia. 
          Existen diferentes tipos de aprendizaje de máquinas, entre estos se encuentra el aprendizaje supervisado que permite realizar 
          tareas predictivas, orientadas a asignar los valores de salida de una variable objetivo, a partir de un conjunto de variables de entrada. 
          Las técnicas más usuales en la aplicación de tareas predictivas son: árboles de decisión, redes neuronales, máquinas de soporte vectorial, 
          ensambles, métodos de regresión, métodos basados en vecinos cercanos, entre otros.
          <br /><br />

          <strong>De forma general, la creación de modelos predictivos está enmarcada en un ciclo de vida compuesto por 5 fases:</strong>

          <br /><br />
          <ul style={{ listStyle: 'decimal', margin: '0 0 0 30px'}}>
            <li>
              <strong>Preparación de los datos:</strong> se utilizan análisis estadísticos para garantizar la calidad de la información.
            </li>
            <li>
              <strong>División de los datos:</strong> se construyen dos conjuntos que serán utilizados para crear el modelo predictivo y evaluarlo posteriormente.
            </li>
            <li>
              <strong>Aprendizaje:</strong> se aplican técnicas de aprendizaje supervisado de máquinas para crear modelos predictivos.
            </li>
            <li>
              <strong>Evaluación:</strong> se utilizan medidas de error para identificar la calidad de los modelos.
            </li>
            <li>
              <strong>Predicción Futura o Despliegue:</strong> se crea una interfaz amigable para que las personas puedan utilizar el modelo y predecir el futuro con nuevos datos de entrada.
            </li>
          </ul>
        </p>
      </section>,
    banners: [
      {
        texto: "Código en Python de la creación de modelos",
        urlDescarga: "/",
        maxWidth: 486,
      },
      {
        texto: "manual técnico de la creación de los modelos",
        urlDescarga: "/",
        maxWidth: 486,
      },
    ]
  },
  {
    numero: 3,
    urlImagen: "/resultados/articulo_3.png",
    titulo: "Optimización de la Fórmula del Concreto",
    parrafo: (
      <section>      
        <p>
          Se presenta adicionalmente, una herramienta para la optimización de 
          la formulación del concreto, donde el usuario indica la calidad del 
          concreto deseada, y por medio de una optimización se indican la cantidad 
          de materiales a utilizar, minimizando la cantidad de cemento de la mezcla. Esta optimización es realizada por medio de técnicas de aprendizaje de máquinas como los algoritmos genéticos.
        </p>
      </section>
    ),
    banners: [
      {
        texto: "Código en Python de la creación de modelos",
        urlDescarga: "/",
        maxWidth: 486,
      },
      {
        texto: "manual técnico de la creación de los modelos",
        urlDescarga: "/",
        maxWidth: 486,
      },
    ]
  },
];

export const separadorHome: SeparadorHomeModelo = {
  urlImagen: '/argos_1.png',
  texto:<p>Este sitio web presenta los resultados del proyecto <br></br>
  <strong>3 - Manufactura Inteligente de Cemento y Concreto</strong>, donde se crearon modelos predictivos del desempeño del concreto.</p>,
  bannerDescarga: {
    texto: 'Manual de usuario del sitio web',
    urlDescarga: '',
    maxWidth: 636
  }
}