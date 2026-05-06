export default function CtaSection() {
  return (
    <section className="py-20 bg-primary/10">
      <div className="max-w-3xl mx-auto px-4 text-center">
        <div className="text-4xl mb-4">🚚</div>
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase">
          Precisa de Assistência Técnica?
        </h2>
        <p className="mt-3 text-muted-foreground">
          Coleta grátis, orçamento em 4h, garantia. Fale conosco!
        </p>

        <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
          <a
            href="https://wa.me/5511999999999"
            target="_blank"
            rel="noopener noreferrer"
            className="bg-primary text-primary-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:opacity-90 transition-opacity w-full sm:w-auto"
          >
            💬 Falar no WhatsApp
          </a>
          <a
            href="tel:11999999999"
            className="border border-border text-foreground font-semibold px-8 py-3.5 rounded-md text-sm hover:bg-secondary transition-colors w-full sm:w-auto"
          >
            📞 (11) 99999-9999
          </a>
        </div>
      </div>
    </section>
  );
}