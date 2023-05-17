import Header from "../components/header/header";
import { headerTitulos } from "../assets/textos";
import { HeaderTitulos } from "../types/header.type";

export default function Root() {
  const cardView = headerTitulos.map(
    (headerTitulos: HeaderTitulos, key:number) =>(
      <Header
        key={key}
        header={headerTitulos}
      ></Header>
    )
  )
  return (
    <>
      <div>
        {cardView}
      </div>
    </>
  );
}