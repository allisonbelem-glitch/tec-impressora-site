import { useState } from "react";

const faqs = [
  { q: "Quanto tempo demora o conserto?", a: "Diagnóstico em até 4h. Conserto em 1 a 3 dias úteis." },
  { q: "A coleta é realmente grátis?", a: "Sim! Buscamos e devolvemos sem custo em toda SP capital e região metropolitana." },
  { q: "Como funciona o orçamento?", a: "Enviamos orçamento detalhado por WhatsApp. Você aprova antes de qualquer serviço." },
  { q: "Trabalham com todas as marcas?", a: "Sim! HP, Epson, Brother, Samsung, Lexmark, Canon, Xerox, Ricoh, Kyocera, OKI, Zebra, Elgin, Bematech." },
  { q: "Tem garantia?", a: "Todo serviço com garantia, informada no orçamento." },
  { q: "Quais formas de pagamento?", a: "PIX, boleto, transferência, cartão de crédito/débito." },
];

export default function FaqSection() {
  const [openIdx, setOpenIdx] = useState<number | null>(null);

  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4">
        <h2 className="font-heading text-3xl md:text-4xl font-bold uppercase text-center">
          Perguntas Frequentes
        </h2>
        <div className="mt-2 w-12 h-1 bg-primary mx-auto rounded-full" />

        <div className="mt-12 space-y-3">
          {faqs.map((f, i) => (
            <div key={i} className="border border-border rounded-xl overflow-hidden">
              <button
                onClick={() => setOpenIdx(openIdx === i ? null : i)}
                className="w-full flex items-center justify-between px-5 py-4 text-left text-sm font-medium text-foreground hover:bg-secondary/50 transition-colors"
              >
                {f.q}
                <span className="text-primary ml-2">{openIdx === i ? "−" : "+"}</span>
              </button>
              {openIdx === i && (
                <div className="px-5 pb-4 text-sm text-muted-foreground">{f.a}</div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}