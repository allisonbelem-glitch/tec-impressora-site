const defeitos = [
  { icon: "🖨", label: "Não imprime" },
  { icon: "📄", label: "Papel atolando" },
  { icon: "🌈", label: "Manchas" },
  { icon: "⚠️", label: "Erro no painel" },
  { icon: "🔌", label: "Não liga" },
  { icon: "🔃", label: "Lenta" },
  { icon: "📶", label: "Scanner" },
  { icon: "🔗", label: "Conexão" },
  { icon: "🛠️", label: "Preventiva" },
];

export default function DefeitosSection() {
  return (
    <section id="defeitos" className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
          Problemas que Resolvemos
        </h2>
        <p className="mt-2 text-muted-foreground">Os defeitos mais comuns em impressoras</p>
        <div className="mt-2 w-12 h-1 bg-primary mx-auto rounded-full" />

        <div className="mt-12 grid grid-cols-3 sm:grid-cols-3 md:grid-cols-5 gap-4">
          {defeitos.map((d) => (
            <div
              key={d.label}
              className="bg-card border border-border rounded-xl p-4 hover:border-primary/50 transition-colors"
            >
              <div className="text-3xl">{d.icon}</div>
              <p className="mt-2 text-xs font-semibold uppercase tracking-wide">{d.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}