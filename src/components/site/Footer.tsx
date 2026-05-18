import { Link } from "@tanstack/react-router";
import { Mail, MapPin, Linkedin, Instagram, Facebook } from "lucide-react";
import logoGca from "@/assets/logo-gca.png";

export function Footer() {
  return (
    <footer className="mt-24 bg-[oklch(0.32_0.18_258)] text-white/85">
      <div className="container-x py-16 grid gap-12 md:grid-cols-2 lg:grid-cols-5">
        <div className="lg:col-span-2">
          <div className="inline-flex items-center gap-3 rounded-2xl bg-white/95 px-4 py-3 shadow-lg">
            <img src={logoGca} alt="Grupo Cipriano Ayala" className="h-9 w-auto" />
          </div>
          <p className="mt-5 max-w-md text-sm leading-relaxed text-white/70">
            Ecossistema de soluções estratégicas para gestão pública e terceiro setor,
            com foco em impacto social e transparência.
          </p>
          <div className="mt-5 flex gap-2">
            {[
              { i: Linkedin, href: "https://linkedin.com" },
              { i: Instagram, href: "https://instagram.com" },
              { i: Facebook, href: "https://facebook.com" },
              { i: Mail, href: "mailto:contato@ciprianoayala.com.br" },
            ].map(({ i: Icon, href }, idx) => (
              <a key={idx} href={href} target="_blank" rel="noopener noreferrer"
                className="grid h-10 w-10 place-items-center rounded-full bg-white/10 hover:bg-white/20 transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Navegação</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
            <li><Link to="/" className="hover:text-white">Início</Link></li>
            <li><a href="/#grupo" className="hover:text-white">O Grupo</a></li>
            <li><a href="/#unidades" className="hover:text-white">Unidades</a></li>
            <li><a href="/#resultados" className="hover:text-white">Resultados</a></li>
            <li><Link to="/area-cliente" className="hover:text-white">Área do Cliente</Link></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-white">Unidades</h4>
          <ul className="mt-4 space-y-2 text-sm text-white/70">
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
          <ul className="mt-4 space-y-4 text-sm text-white/75">
            <li className="flex items-start gap-2">
              <Mail className="h-4 w-4 mt-0.5 shrink-0" />
              <a href="mailto:contato@ciprianoayala.com.br" className="hover:text-white">
                contato@ciprianoayala.com.br
              </a>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold text-white">Sorocaba — SP</div>
                <div>Av. Pres. Juscelino Kubitscheck de Oliveira, 888</div>
                <div>Centro — 18035-060</div>
              </div>
            </li>
            <li className="flex items-start gap-2">
              <MapPin className="h-4 w-4 mt-0.5 shrink-0" />
              <div>
                <div className="font-semibold text-white">Brasília — DF</div>
                <div>SHN Quadra 1 Conj. A Bloco F</div>
                <div>Entrada A, Sala 713</div>
                <div>Asa Norte — 70701-000</div>
              </div>
            </li>
          </ul>
        </div>
      </div>
      <div className="border-t border-white/10 py-6">
        <div className="container-x flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-white/50">
          <p>© {new Date().getFullYear()} Grupo Cipriano Ayala. Todos os direitos reservados.</p>
          <div className="flex gap-6">
            <a href="#" className="hover:text-white">Política de Privacidade</a>
            <a href="#" className="hover:text-white">Termos de Uso</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
