import Image from "next/image";
import Footer from "./components/footer";
import Tokenomics from "./components/tokenomics";
import Hero from "./components/hero";
export default function Home() {
  return (
    <div>
      <Hero />
      <Tokenomics />

      <Footer />
    </div>
  );
}
