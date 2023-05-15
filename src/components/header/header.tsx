import "./header.scss";
import { HeaderTitulos } from "../../types/header.type";
import { useState } from "react";

export default function Header(props: Record<string, unknown>) {
  const header = props.header as HeaderTitulos;
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAlternateImage, setShowAlternateImage] = useState(false);

  const handleClickImage = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setShowAlternateImage(!showAlternateImage);
  };

  return (
    <header className="menu-header">
      <nav>
        <ul>
          <li>
            <a href="#" onClick={handleClickImage}>
              {header.titulo1}
            </a>
            {showAlternateImage ? (
              <img
                src="/Flecha_Menu_Arriba.svg"
                alt=""
                onClick={handleClickImage}
              />
            ) : (
              <img
                src="/Flecha_Menu.svg"
                alt=""
                onClick={handleClickImage}
              />
            )}
            {isDropdownOpen && (
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
