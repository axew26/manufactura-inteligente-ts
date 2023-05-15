import Header from "../components/header/header";
import { titulosMenu } from "../assets/textos";
import { Titulos } from "../types/header.type";

export default function Root() {
  const cardView = titulosMenu.map(
    (titulosMenu: Titulos, key:number) =>(
      <Header
        key={key}
        header={titulosMenu}
      ></Header>
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