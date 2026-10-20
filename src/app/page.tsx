import Image from "next/image";
import Header from "./components/header";
import Footer from "./components/footer";
import About from "./components/about";
import BreadAndRoses from "./components/bread-and-roses";
import PoemRevolutionInOurLifetime from "./components/revolution";
import PoemEpitaph from "./components/epitaph";
import PresentFuture from "./components/present-future";

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
