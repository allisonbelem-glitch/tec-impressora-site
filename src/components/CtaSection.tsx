export default function CtaSection() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-4xl mb-4">🚚</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
          Precisa de Assistência Técnica?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Entre em contato agora e agende sua coleta ou visita.
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/5511940783341"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            💬 Falar no WhatsApp
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