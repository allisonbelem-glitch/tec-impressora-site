export default function HeroSection() {
  const stats = [
    { icon: "🚚", value: "Coleta Grátis", label: "SÃO PAULO" },
    { icon: "⏱️", value: "4h", label: "ORÇAMENTO RÁPIDO" },
    { icon: "⭐", value: "4.9★", label: "GOOGLE REVIEWS" },
    { icon: "🏆", value: "15+", label: "ANOS" },
    { icon: "✅", value: "Garantia", label: "EM TODOS SERVIÇOS" },
  ];

  return (
    <section className="relative py-20 md:py-32 overflow-hidden">
      {/* Subtle gradient overlay */}
      <div className="absolute inset-0 bg-gradient-to-b from-primary/5 to-transparent pointer-events-none" />

      <div className="relative max-w-5xl mx-auto px-4 text-center">
        <div className="inline-block bg-primary/15 text-primary text-xs font-semibold uppercase tracking-widest px-4 py-1.5 rounded-full mb-8">
          🚚 Coleta e Entrega Grátis em São Paulo
        </div>

        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-bold uppercase leading-tight">
          Impressora com Defeito?
          <br />
          <span className="text-primary">Buscamos, Consertamos e Devolvemos.</span>
        </h1>

        <p className="mt-6 text-muted-foreground text-base md:text-lg max-w-2xl mx-auto">
          Orçamento sem compromisso em até <strong className="text-foreground">4 horas</strong> •
          Coleta grátis em toda SP •{" "}
          <strong className="text-foreground">15+ anos</strong> de experiência •
          Nota <strong className="text-foreground">4.9★</strong> no Google
        </p>

        {/* Stats */}
        <div className="mt-10 flex flex-wrap justify-center gap-6 md:gap-10">
          {stats.map((s) => (
            <div key={s.label} className="text-center">
              <div className="text-2xl mb-1">{s.icon}</div>
              <div className="text-lg font-bold text-foreground">{s.value}</div>
              <div className="text-[10px] uppercase tracking-widest text-muted-foreground">
                {s.label}
              </div>
            </div>
          ))}
        </div>

        {/* CTAs */}
        <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            🚚 Solicite sua Coleta Online
          </a>
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:bg-secondary transition-colors w-full sm:w-auto"
          >
            💬 Falar com Agente
          </a>
          <a
            href="tel:11999999999"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:bg-secondary transition-colors w-full sm:w-auto"
          >
            📞 (11) 99999-9999
          </a>
        </div>

        <p className="mt-4 text-xs text-primary">🟢 Agentes online agora</p>
      </div>
    </section>
  );
}