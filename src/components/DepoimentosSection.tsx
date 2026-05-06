const reviews = [
  { text: "Atendimento excelente! Buscaram e devolveram funcionando no dia seguinte.", name: "Marcelo S.", role: "Contabilidade" },
  { text: "Profissionais e transparentes. Orçamento justo.", name: "Fernanda L.", role: "Advocacia" },
  { text: "10 anos como cliente. Sempre resolvem rápido.", name: "Roberto M.", role: "Gráfica" },
  { text: "Consertaram minha HP que ninguém queria mexer!", name: "Ana P.", role: "Designer" },
  { text: "Coleta grátis e garantia. Melhor de SP.", name: "Carlos T.", role: "Informática" },
  { text: "Voltou melhor do que nova! Equipe competente.", name: "Juliana R.", role: "Clínica" },
];

export default function DepoimentosSection() {
  return (
    <section id="depoimentos" className="py-20 bg-secondary/30">
      <div className="max-w-6xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
          O Que Nossos Clientes Dizem
        </h2>
        <div className="flex items-center justify-center gap-2 mt-3">
          <span className="text-4xl font-bold text-foreground">4.9</span>
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
                <strong className="text-foreground">{r.name}</strong> — {r.role}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}