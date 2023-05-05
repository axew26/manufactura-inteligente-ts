import TarjetaInvestigador from "../components/tarjeta-investigador/tarjeta-investigador";

export default function Root() {
  return (
    <>
      <div>
        <p>Prueba de que react router funciona</p>
      </div>
      <div className="cardTest">
      <TarjetaInvestigador></TarjetaInvestigador>
      <TarjetaInvestigador></TarjetaInvestigador>
      </div>
    </>
  );
}
