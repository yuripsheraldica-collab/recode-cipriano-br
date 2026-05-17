import { Link } from "@tanstack/react-router";

export function Footer() {
  return (
    <footer className="mt-24 border-t border-border bg-[oklch(0.13_0.03_260)] text-white/80">
      <div className="container-x py-16 grid gap-12 md:grid-cols-4">
        <div className="md:col-span-2">
          <div className="flex items-center gap-3">
            <div className="grid h-11 w-11 place-items-center rounded-2xl bg-gradient-to-br from-[oklch(0.62_0.2_250)] to-[oklch(0.72_0.16_240)] text-white font-bold">G</div>
            <div className="leading-tight">
              <div className="text-[11px] uppercase tracking-[0.18em] text-white/50">Grupo</div>
              <div className="text-base font-semibold text-white">Cipriano Ayala</div>
            </div>
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/60">
            Ecossistema de soluções estratégicas para gestão pública e terceiro setor.
            Inteligência fiscal, captação, ESG e tecnologia em um só lugar.
          </p>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Unidades</h4>
          <ul className="mt-4 space-y-2 text-sm">
            <li><Link to="/eps" className="hover:text-white">EPS</Link></li>
            <li><Link to="/fundify" className="hover:text-white">Fundify</Link></li>
            <li><Link to="/certisafe" className="hover:text-white">Certisafe</Link></li>
            <li><Link to="/cataliza" className="hover:text-white">Instituto Cataliza</Link></li>
            <li><Link to="/3s-marketing" className="hover:text-white">3s Marketing</Link></li>
            <li><Link to="/otimistas" className="hover:text-white">Otimistas</Link></li>
          </ul>
        </div>
        <div>
          <h4 className="text-sm font-semibold text-white">Contato</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/60">
            <li>Av. JK — Centro</li>
            <li>Sorocaba, SP</li>
            <li>contato@ciprianoayala.com.br</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6 text-center text-xs text-white/40">
        © {new Date().getFullYear()} Grupo Cipriano Ayala. Todos os direitos reservados.
      </div>
    </footer>
  );
}
