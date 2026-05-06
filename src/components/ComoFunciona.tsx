const steps = [
  { num: "01", icon: "📞", title: "Solicite", desc: "Ligue ou mande WhatsApp. Resposta em até 4h." },
  { num: "02", icon: "🚚", title: "Coletamos", desc: "Buscamos seu equipamento gratuitamente em SP." },
  { num: "03", icon: "🔧", title: "Consertamos", desc: "Diagnóstico e orçamento. Só com sua aprovação." },
  { num: "04", icon: "✅", title: "Entregamos", desc: "Equipamento funcionando, com garantia." },
];

export default function ComoFunciona() {
  return (
    <section id="como-funciona" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">Como Atendemos</h2>
        <div className="mt-2 w-12 h-1 bg-primary mx-auto rounded-full" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {steps.map((s) => (
            <div
              key={s.num}
              className="bg-card border border-border rounded-xl p-6 text-center hover:border-primary/50 transition-colors"
            >
              <span className="text-primary font-heading text-3xl font-bold">{s.num}</span>
              <div className="text-3xl mt-3">{s.icon}</div>
              <h3 className="font-heading text-lg font-semibold uppercase mt-3">{s.title}</h3>
              <p className="text-sm text-muted-foreground mt-2">{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}