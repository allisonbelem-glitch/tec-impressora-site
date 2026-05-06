const reviews = [
  { text: "O Allison é um Técnico de Impressora muito experiente, fez a manutenção da minha impressora super rápido e com profissionalismo, agradeço mais uma vez e recomendo a todos.", name: "Rafael Muniz" },
  { text: "Atendimento rápido, conserto de impressora com agilidade, ótimos preços", name: "Ocivaldo Junior" },
  { text: "Ótimo profissional, muito prestativo e resolveu o problema da minha impressora rapidamente! Recomendo!", name: "Beatriz Barros" },
];

export default function DepoimentosSection() {
  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
          Depoimentos
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="text-4xl font-bold text-foreground">5</span>
          <span className="text-primary text-xl">★★★★★</span>
        </div>
        <p className="text-sm text-muted-foreground mt-1">Avaliações no Google</p>
        <div className="mt-2 w-12 h-1 bg-primary mx-auto rounded-full" />

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {reviews.map((r) => (
            <div
              key={r.name}
              className="bg-card border border-border rounded-xl p-6 text-left hover:border-primary/50 transition-colors"
            >
              <div className="text-primary text-sm mb-3">★★★★★</div>
              <p className="text-sm text-foreground italic">"{r.text}"</p>
              <p className="mt-4 text-xs text-muted-foreground">
                <strong className="text-foreground">{r.name}</strong>
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}