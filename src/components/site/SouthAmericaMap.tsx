import { MapPin } from "lucide-react";

/**
 * Stylized South America map highlighting Brazil (HQ) and Mercosul countries.
 */
export function SouthAmericaMap() {
  return (
    <div className="card-soft p-6 md:p-10">
      <svg viewBox="0 0 600 700" className="w-full h-auto" role="img" aria-label="Mapa da América do Sul com destaque para o Mercosul">
        <defs>
          <linearGradient id="brazilFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.2 250)" stopOpacity="0.85" />
            <stop offset="100%" stopColor="oklch(0.72 0.16 240)" stopOpacity="0.85" />
          </linearGradient>
          <linearGradient id="mercosulFill" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="oklch(0.62 0.2 250)" stopOpacity="0.32" />
            <stop offset="100%" stopColor="oklch(0.72 0.16 240)" stopOpacity="0.32" />
          </linearGradient>
        </defs>

        {/* Background continent silhouette (stylized) */}
        <path
          d="M280 60 C340 70 380 100 410 150 C440 200 460 250 470 310 C475 360 460 410 440 460 C420 510 380 560 340 600 C310 630 280 660 250 680 C220 670 200 640 190 610 C175 560 165 510 160 460 C155 410 150 360 160 310 C170 250 190 200 220 150 C240 110 255 80 280 60 Z"
          fill="oklch(0.95 0.012 250)"
          stroke="oklch(0.88 0.02 250)"
          strokeWidth="1.5"
        />

        {/* Mercosul highlight blob (BR + AR + UY + PY) */}
        <path
          d="M255 140 C320 145 380 180 410 230 C440 290 455 360 445 430 C430 490 395 540 350 580 C310 615 270 635 245 625 C215 600 195 555 185 500 C175 440 175 380 190 320 C205 250 225 190 255 140 Z"
          fill="url(#mercosulFill)"
          stroke="oklch(0.62 0.2 250)"
          strokeOpacity="0.35"
          strokeWidth="1.5"
        />

        {/* Brazil (HQ) — solid filled region */}
        <path
          d="M295 165 C355 175 395 215 415 270 C435 330 440 395 425 450 C405 495 370 525 330 530 C295 535 270 510 260 475 C245 425 240 370 250 315 C260 255 275 205 295 165 Z"
          fill="url(#brazilFill)"
          stroke="oklch(0.5 0.22 252)"
          strokeWidth="2"
        />

        {/* Connection arcs from Brazil HQ to Mercosul members */}
        {[
          { x: 250, y: 555, label: "Argentina" },
          { x: 290, y: 530, label: "Uruguai" },
          { x: 250, y: 470, label: "Paraguai" },
          { x: 225, y: 400, label: "Bolívia" },
        ].map((c) => (
          <line
            key={c.label}
            x1="340" y1="370"
            x2={c.x} y2={c.y}
            stroke="oklch(0.62 0.2 250)"
            strokeWidth="1.5"
            strokeDasharray="4 4"
            opacity="0.55"
          />
        ))}

        {/* City pins */}
        {[
          { x: 340, y: 370, label: "Brasil", hq: true },
          { x: 250, y: 555, label: "Argentina" },
          { x: 290, y: 530, label: "Uruguai" },
          { x: 250, y: 470, label: "Paraguai" },
          { x: 225, y: 400, label: "Bolívia" },
          { x: 305, y: 200, label: "Venezuela" },
        ].map((c) => (
          <g key={c.label}>
            <circle cx={c.x} cy={c.y} r={c.hq ? 14 : 9} fill="white" stroke="oklch(0.5 0.22 252)" strokeWidth="2" />
            <circle cx={c.x} cy={c.y} r={c.hq ? 7 : 4.5} fill="oklch(0.55 0.22 252)" />
            <text
              x={c.x + (c.hq ? 22 : 16)}
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
      </svg>

      <div className="mt-6 flex flex-wrap items-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-gradient-to-br from-[oklch(0.55_0.22_252)] to-[oklch(0.72_0.16_240)]" />
          Sede — Brasil
        </span>
        <span className="inline-flex items-center gap-2">
          <span className="h-3 w-3 rounded-full bg-[oklch(0.62_0.2_250)]/35" />
          Mercosul — Argentina, Uruguai, Paraguai, Bolívia
        </span>
        <span className="inline-flex items-center gap-2 text-ink">
          <MapPin className="h-4 w-4 text-brand" />
          Atuação regional focada na América do Sul
        </span>
      </div>
    </div>
  );
}
