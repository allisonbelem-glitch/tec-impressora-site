export default function HeroSection() {
  return (
    <section className="relative py-8 md:py-16 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block bg-primary/15 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
          Coleta e Entrega em Barueri
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-tight">
          Impressora com Defeito?
          <br />
          <span className="text-primary">Coleta, Manutenção e Devolução.</span>
        </h1>

        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          <strong className="text-foreground">15+ anos</strong> de experiência •
          Orçamento sem compromisso •
          Nota <strong className="text-foreground">5★</strong> no Google
        </p>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/5511940783341"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            🚚 Solicite sua Coleta Online
          </a>
          <a
            href="https://wa.me/5511940783341"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:bg-secondary transition-colors w-full sm:w-auto"
          >
            💬 Falar com Agente
          </a>
          <a
            href="tel:011940783341"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:bg-secondary transition-colors w-full sm:w-auto"
          >
            📞 (11) 94078-3341
          </a>
        </div>

      </div>
    </section>
  );
}