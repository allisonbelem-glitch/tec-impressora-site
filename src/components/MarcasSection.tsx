const marcas = [
  "HP", "Epson", "Brother", "Samsung", "Lexmark",
  "Canon", "Xerox", "Ricoh", "Kyocera", "OKI",
  "Zebra", "Elgin", "Bematech",
];

export default function MarcasSection() {
  return (
    <section id="marcas" className="py-20">
      <div className="max-w-5xl mx-auto px-4 text-center">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
          Marcas que Atendemos
        </h2>
        <div className="mt-2 w-12 h-1 bg-primary mx-auto rounded-full" />

        <div className="mt-12 flex flex-wrap justify-center gap-4">
          {marcas.map((m) => (
            <div
              key={m}
              className="bg-card border border-border rounded-lg px-6 py-3 text-sm font-semibold uppercase tracking-wide hover:border-primary/50 transition-colors"
            >
              {m}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}