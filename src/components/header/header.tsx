import "./header.scss";
import { HeaderTitulos } from "../../types/header.type";
import { useState } from "react";

export default function Header(props: Record<string, unknown>) {
  const header = props.header as HeaderTitulos;
  const [selectedTitle, setSelectedTitle] = useState("");

  const titleActivate = (title: string) => {
    if (selectedTitle === title) {
      setSelectedTitle("");
    } else {
      setSelectedTitle(title);
    }
  };

  return (
    <header className="menu-header">
      <nav>
        <ul>
          <li>
            <a
              href="#"
              onClick={() => titleActivate("titulo1")}
              style={{
                fontWeight: selectedTitle === "titulo1" ? "500" : "400",
              }}
            >
              {header.titulo1}
            </a>
            {selectedTitle === "titulo1" ? (
              <img
                src="/Flecha_Menu_Arriba.svg"
                alt=""
                onClick={() => titleActivate("titulo1")}
              />
            ) : (
              <img
                src="/Flecha_Menu.svg"
                alt=""
                onClick={() => titleActivate("titulo1")}
              />
            )}
            {selectedTitle === "titulo1" && (
              <div className="dropdown-menu-container">
                <ul className="dropdown-menu">
                  <li>
                    <a href="#">{header.subtitulo1}</a>
                  </li>
                  <li>
                    <a href="#">{header.subtitulo2}</a>
                  </li>
                  <li>
                    <a href="#">{header.subtitulo3}</a>
                  </li>
                  <li>
                    <a href="#">{header.subtitulo4}</a>
                  </li>
                </ul>
              </div>
            )}
          </li>
          <hr />
          <li>
            <a
              href="#"
              onClick={() => titleActivate("titulo2")}
              style={{
                fontWeight: selectedTitle === "titulo2" ? "500" : "400",
              }}
            >
              {header.titulo2}
            </a>
          </li>
          <hr />
          <li>
            <a
              href="#"
              onClick={() => titleActivate("titulo3")}
              style={{
                fontWeight: selectedTitle === "titulo3" ? "500" : "400",
              }}
            >
              {header.titulo3}
            </a>
          </li>
          <hr />
          <li>
            <a
              href="#"
              onClick={() => titleActivate("titulo4")}
              style={{
                fontWeight: selectedTitle === "titulo4" ? "500" : "400",
              }}
            >
              {header.titulo4}
            </a>
          </li>
          <hr />
          <li>
            <a
              href="#"
              onClick={() => titleActivate("titulo5")}
              style={{
                fontWeight: selectedTitle === "titulo5" ? "500" : "400",
              }}
            >
              {header.titulo5}
            </a>
          </li>
        </ul>
      </nav>
      <img src="/Menu-Mobile.svg" alt="" className="menu-imagen" />
    </header>
  );
}
