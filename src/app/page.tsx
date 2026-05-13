import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import Conocenos from "./components/Conocenos";
import Servicios from "./components/Servicios";
import PorQueElegirnos from "./components/PorQueElegirnos";
import Proyectos from "./components/Proyectos";
import ProcesoTrabajo from "./components/ProcesoTrabajo";
import Clientes from "./components/Clientes";
import FAQ from "./components/FAQ";
import Contactanos from "./components/Contactanos";

export default function Home() {
  return (
    <div style={{ background: "#041020" }}>
      {/* Hero takes up viewport minus navbar height */}
      <HeroSection />

      {/*
        Bottom-docked Hero Navigation:
        The navbar sits right after the hero (at the bottom of the first viewport).
        sticky top-0 makes it stick to the top once it reaches it on scroll.
      */}
      <Navbar />

      {/* Conócenos */}

      {/* Servicios */}
      <Servicios />

      {/* Por Qué Elegirnos */}
      <PorQueElegirnos />

      {/* Proyectos */}
      <Proyectos />

      {/* Proceso de Trabajo */}
      <ProcesoTrabajo />

      {/* Clientes */}
      <Clientes />

      {/* FAQ */}
      <FAQ />

      {/* Contáctanos */}
      <Contactanos />
    </div>
  );
}
