export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="max-w-6xl mx-auto px-4 text-center text-sm text-muted-foreground">
        <p className="font-heading text-lg font-bold text-foreground">
          TEC<span className="text-primary">IMPRESSORA</span>
        </p>
        <p className="mt-2">
          © {new Date().getFullYear()} Tec Impressora. Todos os direitos reservados.
        </p>
        <p className="mt-1">São Paulo - SP</p>
      </div>
    </footer>
  );
}