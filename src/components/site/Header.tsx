import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";
import logoGca from "@/assets/logo-gca.png";
import { LeadFormDialog } from "@/components/site/LeadFormDialog";

export function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-background/80 backdrop-blur-md border-b border-border/60">
      <div className="container-x flex h-20 items-center justify-between">
        <Link to="/" className="flex items-center gap-3">
          <img src={logoGca} alt="Grupo Cipriano Ayala" className="h-10 w-auto" />
          <span className="sr-only">Grupo Cipriano Ayala</span>
        </Link>
        <nav className="hidden lg:flex items-center gap-8 text-sm font-medium text-muted-foreground">
          <Link to="/" className="hover:text-ink transition-colors">Início</Link>
          <a href="/#grupo" className="hover:text-ink transition-colors">O Grupo</a>
          <a href="/#unidades" className="hover:text-ink transition-colors">Unidades</a>
          <a href="/#resultados" className="hover:text-ink transition-colors">Resultados</a>
          <Link to="/area-cliente" className="hover:text-ink transition-colors">Área do Cliente</Link>
        </nav>
        <LeadFormDialog source="Header">
          <button className="btn-primary">
            Falar com especialista <ArrowRight className="h-4 w-4" />
          </button>
        </LeadFormDialog>
      </div>
    </header>
  );
}
