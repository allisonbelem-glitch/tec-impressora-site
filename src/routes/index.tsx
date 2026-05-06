import { createFileRoute } from "@tanstack/react-router";
import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ComoFunciona from "@/components/ComoFunciona";
import DiferenciaisSection from "@/components/DiferenciaisSection";
import MarcasSection from "@/components/MarcasSection";
import DepoimentosSection from "@/components/DepoimentosSection";
import FaqSection from "@/components/FaqSection";
import CtaSection from "@/components/CtaSection";
import Footer from "@/components/Footer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Tec Impressora — Assistência Técnica de Impressoras em SP" },
      { name: "description", content: "Conserto de impressoras em São Paulo com coleta grátis. Orçamento em 4h, garantia e 15+ anos de experiência. HP, Epson, Brother e mais." },
      { property: "og:title", content: "Tec Impressora — Assistência Técnica de Impressoras" },
      { property: "og:description", content: "Buscamos, consertamos e devolvemos sua impressora. Coleta grátis em SP." },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <HeroSection />
      <ComoFunciona />
      <DiferenciaisSection />
      <MarcasSection />
      <DepoimentosSection />
      <FaqSection />
      <CtaSection />
      <Footer />
    </div>
  );
}
