import TarjetaInvestigador from "../components/tarjeta-investigador/tarjeta-investigador";
import { investigadores } from "../assets/textos";
import { Investigador } from "../types/tarjeta-investigador.type";

export default function Root() {
  const investigadoresView = investigadores.map(
    (investigador: Investigador, key:number) => (
      <TarjetaInvestigador
        key={key}
        investigador={investigador}
      ></TarjetaInvestigador>
    )
  );

  return (
    <>
      <div className="cardTest">
        {investigadoresView}
      </div>
    </>
  );
}
