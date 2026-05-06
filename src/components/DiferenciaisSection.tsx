const items = [
  { icon: "🚚", title: "Coleta Grátis", desc: "Buscamos e devolvemos sem custo em SP capital." },
  { icon: "⚡", title: "Orçamento em 4h", desc: "Diagnóstico rápido e transparente." },
  { icon: "💪", title: "15+ Anos", desc: "Experiência comprovada no mercado." },
  { icon: "🔒", title: "Garantia", desc: "Todo serviço com garantia." },
  { icon: "🌟", title: "4.9 no Google", desc: "Avaliações reais de clientes satisfeitos." },
  { icon: "💰", title: "Preço Justo", desc: "Orçamento sem compromisso." },
];

export default function DiferenciaisSection() {
  return (
    <section id="diferenciais" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
          Por Que a Tec Impressora?
        </h2>
        <div className="mt-2 w-12 h-1 bg-primary mx-auto rounded-full" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {items.map((i) => (
            <div
              key={i.title}
              className="bg-card border border-border rounded-xl p-6 text-left hover:border-primary/50 transition-colors"
            >
              <span className="text-3xl">{i.icon}</span>
              <h3 className="font-heading text-lg font-semibold mt-3">{i.title}</h3>
              <p className="text-sm text-muted-foreground mt-1">{i.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}