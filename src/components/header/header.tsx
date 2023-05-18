import "./header.scss";
import { HeaderTitulos } from "../../types/header.type";
import { useState, useEffect } from "react";

export default function Header(props: Record<string, unknown>) {
  const header = props.header as HeaderTitulos;
  const [selectedTitle, setSelectedTitle] = useState("");
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [showAlternateImage, setShowAlternateImage] = useState(false);
  const [isMobileView, setIsMobileView] = useState(false);

  const handleClickImage = () => {
    setIsDropdownOpen(!isDropdownOpen);
    setShowAlternateImage(!showAlternateImage);
  };

  const titleActivate = (title: string) => {
    if (selectedTitle === title) {
      setSelectedTitle("");
    } else {
      setSelectedTitle(title);
    }
  };

  useEffect(() => {
    const handleWindowResize = () => {
      setIsMobileView(window.innerWidth <= 768);
    };

    window.addEventListener("resize", handleWindowResize);
    handleWindowResize(); // Verificación inicial al cargar la página

    return () => {
      window.removeEventListener("resize", handleWindowResize);
    };
  }, []);
  
    return (
      <header className="menu-header">
        {isMobileView && (
          <a href="" onClick={handleClickImage}></a>
        )}
        {showAlternateImage ? (
          <img
            src="/Cerrar_Menu.svg"
            alt=""
            className="menu-imagen"
            onClick={handleClickImage}
          />
        ) : (
          <img
            src="/Menu_Mobile.svg"
            alt=""
            className="menu-imagen"
            onClick={handleClickImage}
          />
        )}
        {isMobileView ? (
          <>
            {isDropdownOpen && (
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
                        className="flecha-desktop"
                      />
                    ) : (
                      <img
                        src="/Flecha_Menu.svg"
                        alt=""
                        onClick={() => titleActivate("titulo1")}
                        className="flecha-desktop"
                      />
                    )}
                    {selectedTitle === "titulo1" ? (
                      <img
                        src="/Flecha_Menu_Mobile_Arriba.svg"
                        alt=""
                        onClick={() => titleActivate("titulo1")}
                        className="flecha-mobile"
                      />
                    ) : (
                      <img
                        src="/Flecha_Menu_Mobile.svg"
                        alt=""
                        onClick={() => titleActivate("titulo1")}
                        className="flecha-mobile"
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
            )}
          </>
        ) : (
          <>
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
                      className="flecha-desktop"
                    />
                  ) : (
                    <img
                      src="/Flecha_Menu.svg"
                      alt=""
                      onClick={() => titleActivate("titulo1")}
                      className="flecha-desktop"
                    />
                  )}
                  {selectedTitle === "titulo1" ? (
                    <img
                      src="/Flecha_Menu_Mobile_Arriba.svg"
                      alt=""
                      onClick={() => titleActivate("titulo1")}
                      className="flecha-mobile"
                    />
                  ) : (
                    <img
                      src="/Flecha_Menu_Mobile.svg"
                      alt=""
                      onClick={() => titleActivate("titulo1")}
                      className="flecha-mobile"
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
          </>
        )}
      </header>
    );
  }