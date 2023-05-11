import CardProyecto from "../components/card-proyecto/card-proyecto";
import { cards } from "../assets/textos";
import { Card } from "../types/card-proyecto.type";

export default function Root() {
  const cardView = cards.map(
    (card: Card, key:number) =>(
      <CardProyecto
        key={key}
        card={card}
      ></CardProyecto>
    )
  )
  return (
    <>
      <div className="cardComponent">
        {cardView}
      </div>
    </>
  );
}