import Image from "next/image";
import Header from "./components/sections/header";
import Footer from "./components/sections/footer";
import About from "./components/sections/about";
import BreadAndRoses from "./components/sections/bread-and-roses";
import PoemRevolutionInOurLifetime from "./components/sections/revolution";
import PoemEpitaph from "./components/sections/epitaph";
import PresentFuture from "./components/sections/present-future";

export default function Home() {
  return (
    <main className="relative">
      <Header />
      <PoemRevolutionInOurLifetime />
      <BreadAndRoses />
      <PoemEpitaph />
      <PresentFuture />
      <Image
        src="/self-defense.png"
        alt=""
        width={700}
        height={344}
        className="relative lg:ml-16 mb-6"
      />
      <About />

      <Footer />
    </main>
  );
}
