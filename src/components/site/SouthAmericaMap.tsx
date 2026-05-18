import { MapPin } from "lucide-react";

/**
 * Stylized South America map highlighting Brazil (HQ) and Mercosul countries.
 * Subtle Cipriano Ayala brand palette — no rainbow colors.
 */
export function SouthAmericaMap() {
  return (
    <div className="card-soft p-6 md:p-10">
      <svg viewBox="0 0 700 760" className="w-full h-auto" role="img" aria-label="Mapa da América do Sul com destaque para o Brasil e Mercosul">
        <defs>
          <linearGradient id="brFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.55 0.22 252)" />
            <stop offset="100%" stopColor="oklch(0.7 0.18 245)" />
          </linearGradient>
          <radialGradient id="oceanFill" cx="50%" cy="50%" r="70%">
            <stop offset="0%" stopColor="oklch(0.97 0.012 240)" />
            <stop offset="100%" stopColor="oklch(0.93 0.025 245)" />
          </radialGradient>
        </defs>

        {/* Ocean background */}
        <rect x="0" y="0" width="700" height="760" fill="url(#oceanFill)" rx="24" />

        {/* Non-Mercosul countries (light neutral) */}
        {/* Colombia / Venezuela / Guianas */}
        <path d="M180 90 L300 70 L380 95 L430 110 L450 160 L420 200 L360 210 L300 195 L240 180 L195 150 Z"
          fill="oklch(0.92 0.015 250)" stroke="white" strokeWidth="2" />
        {/* Ecuador */}
        <path d="M160 200 L210 195 L220 235 L170 240 Z" fill="oklch(0.92 0.015 250)" stroke="white" strokeWidth="2" />
        {/* Peru */}
        <path d="M170 245 L260 235 L290 320 L235 410 L170 395 L150 320 Z"
          fill="oklch(0.92 0.015 250)" stroke="white" strokeWidth="2" />
        {/* Chile */}
        <path d="M210 415 L260 410 L255 690 L215 695 L195 580 L200 480 Z"
          fill="oklch(0.92 0.015 250)" stroke="white" strokeWidth="2" />

        {/* Mercosul soft halo (Bolivia + Paraguay + Uruguay + Argentina) */}
        {/* Bolivia */}
        <path d="M260 320 L370 310 L395 395 L330 425 L275 415 Z"
          fill="oklch(0.62 0.2 250)" fillOpacity="0.18" stroke="oklch(0.55 0.22 252)" strokeOpacity="0.4" strokeWidth="1.5" />
        {/* Paraguay */}
        <path d="M330 430 L405 420 L420 490 L355 510 Z"
          fill="oklch(0.62 0.2 250)" fillOpacity="0.25" stroke="oklch(0.55 0.22 252)" strokeOpacity="0.45" strokeWidth="1.5" />
        {/* Uruguay */}
        <path d="M395 575 L455 560 L470 610 L410 625 Z"
          fill="oklch(0.62 0.2 250)" fillOpacity="0.3" stroke="oklch(0.55 0.22 252)" strokeOpacity="0.5" strokeWidth="1.5" />
        {/* Argentina */}
        <path d="M265 480 L355 515 L405 600 L395 700 L330 715 L290 690 L260 600 Z"
          fill="oklch(0.62 0.2 250)" fillOpacity="0.22" stroke="oklch(0.55 0.22 252)" strokeOpacity="0.45" strokeWidth="1.5" />

        {/* Brazil — solid brand fill */}
        <path
          d="M380 130 L470 145 L540 195 L580 270 L595 360 L580 440 L545 520 L490 575 L430 590 L390 560 L370 500 L380 430 L355 360 L345 280 L355 200 Z"
          fill="url(#brFill)"
          stroke="oklch(0.45 0.22 252)"
          strokeWidth="2.5"
        />

        {/* Connection arcs from Brasília */}
        {[
          { x: 330, y: 660, label: "Argentina" },
          { x: 430, y: 595, label: "Uruguai" },
          { x: 375, y: 470, label: "Paraguai" },
          { x: 320, y: 380, label: "Bolívia" },
        ].map((c) => (
          <path
            key={c.label}
            d={`M 470 410 Q ${(470 + c.x) / 2} ${(410 + c.y) / 2 - 30} ${c.x} ${c.y}`}
            fill="none"
            stroke="oklch(0.55 0.22 252)"
            strokeWidth="1.5"
            strokeDasharray="5 5"
            opacity="0.6"
          />
        ))}

        {/* Pins */}
        {[
          { x: 470, y: 410, label: "Brasília", hq: true },
          { x: 330, y: 660, label: "Argentina" },
          { x: 430, y: 595, label: "Uruguai" },
          { x: 375, y: 470, label: "Paraguai" },
          { x: 320, y: 380, label: "Bolívia" },
        ].map((c) => (
          <g key={c.label}>
            <circle cx={c.x} cy={c.y} r={c.hq ? 16 : 10} fill="white" stroke="oklch(0.45 0.22 252)" strokeWidth="2.5" />
            <circle cx={c.x} cy={c.y} r={c.hq ? 8 : 5} fill="oklch(0.55 0.22 252)" />
            {c.hq && (
              <path d={`M ${c.x - 5} ${c.y + 1} L ${c.x - 1} ${c.y + 5} L ${c.x + 6} ${c.y - 3}`}
                stroke="white" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round" />
            )}
            <text
              x={c.x + (c.hq ? 24 : 16)}
              y={c.y + 5}
              fontSize={c.hq ? "20" : "15"}
              fontWeight={c.hq ? 700 : 600}
              fill="oklch(0.2 0.06 255)"
              fontFamily="Inter, sans-serif"
            >
              {c.label}{c.hq && " — Sede"}
            </text>
          </g>
        ))}

        {/* Continent label */}
        <text x="40" y="50" fontSize="13" fontWeight="600" fill="oklch(0.55 0.05 255)"
          letterSpacing="3" fontFamily="Inter, sans-serif">AMÉRICA DO SUL</text>
      </svg>

      <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[oklch(0.55_0.22_252)] to-[oklch(0.7_0.18_245)]" />
          Sede — Brasil
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[oklch(0.62_0.2_250)]/30" />
          Mercosul — Argentina, Uruguai, Paraguai, Bolívia
        </span>
        <span className="inline-flex items-center gap-2 text-ink">
          <MapPin className="h-4 w-4 text-brand" />
          Foco regional na América do Sul
        </span>
      </div>
    </div>
  );
}
