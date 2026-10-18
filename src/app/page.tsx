import Image from "next/image";
import PoemEpitaph from "./components/epitaph";
import Bibliography from "./components/bibliography";
import About from "./components/about";
import BreadAndRoses from "./components/bread-and-roses";
import PoemRevolutionInOurLifetime from "./components/revolution";

export default function Home() {
  return (
    <div className="flex flex-col flex-1 items-center justify-center">
      <main className="">
        <PoemEpitaph />
        <BreadAndRoses />
        <PoemRevolutionInOurLifetime />
        <Bibliography />
        <About />
      </main>
    </div>
  );
}
