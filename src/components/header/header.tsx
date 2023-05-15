import "./header.scss";
import { Titulos } from "../../types/header.type";

export default function Header(props: Record<string, unknown>) {
  const header = props.header as Titulos;
  return (
    <header className="menu-header">
      <nav>
        <ul>
          <li>
            <a href="#">{header.titulo1}</a>
            <img src="public\Flecha_Menu.svg" alt="" />
            {/* <ul>
              <li>
                <a href="#">Explicación de los métodos predictivos utilizados</a>
              </li>
              <li>
                <a href="#">Resultados de resistencia a la comprensión</a>
              </li>
              <li>
                <a href="#">Resultados de resistencia a la flexión</a>
              </li>
              <li>
                <a href="#">Resultados de asentamiento</a>
              </li>
            </ul> */}
          </li>
          <li>
            <a href="#">{header.titulo2}</a>
          </li>
          <li>
            <a href="#">{header.titulo3}</a>
          </li>
          <li>
            <a href="#">{header.titulo4}</a>
          </li>
          <li>
            <a href="#">{header.titulo5}</a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
