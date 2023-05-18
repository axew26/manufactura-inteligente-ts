import "./footer.scss";
import { EntidadesFooter } from "../../types/footer.type";

export default function Footer(props: Record<string, unknown>) {
  const footer = props.footer as EntidadesFooter;

  return (
    <footer className="footer-container">
      <div className="entidades-container">
        <a href={footer.urlSitioArgos} target="_blank">
          <img src={footer.urlImagenArgos} alt="Logo Cementos Argos" className="argos-footer" />
        </a>
        <hr />
        <a href={footer.urlSitioUPB} target="_blank">
          <img src={footer.urlImagenUPB} alt="Logo Universidad Pontificia Bolivariana" className="upb-footer" />
        </a>
        <hr />
        <a href={footer.urlSitioMinciencias} target="_blank">
          <img
            src={footer.urlImagenMinciencias}
            alt="Logo Minciencias"
            className="minciencias-footer"
          />
        </a>
      </div>
      <div className="recuadro-footer"></div>
    </footer>
  );
}
