import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.62_0.2_250)] to-[oklch(0.72_0.16_240)] text-white font-bold text-lg shadow-elegant">
            G
          </div>
          <div className="leading-tight">
            <div className="text-[11px] uppercase tracking-[0.18em] text-muted-foreground">Grupo</div>
            <div className="text-base font-semibold text-ink">Cipriano Ayala</div>
          </div>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-ink transition-colors">Início</Link>
          <a href="/#grupo" className="hover:text-ink transition-colors">O Grupo</a>
          <a href="/#solucoes" className="hover:text-ink transition-colors">Soluções</a>
          <a href="/#unidades" className="hover:text-ink transition-colors">Unidades</a>
          <a href="/#resultados" className="hover:text-ink transition-colors">Resultados</a>
          <a href="/#contato" className="hover:text-ink transition-colors">Contato</a>
        </nav>
        <a href="/#contato" className="btn-primary">
          Área do Cliente <ArrowRight className="h-4 w-4" />
        </a>
      </div>
    </header>
  );
}
