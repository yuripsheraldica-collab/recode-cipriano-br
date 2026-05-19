import { MessageCircle } from "lucide-react";

const WHATSAPP_URL =
  "https://wa.me/5515998589225?text=" +
  encodeURIComponent("Olá! Gostaria de falar com um especialista do Grupo Cipriano Ayala.");

export function WhatsAppFloat() {
  return (
    <a
      href={WHATSAPP_URL}
      target="_blank"
      rel="noopener noreferrer"
      aria-label="Falar no WhatsApp"
      className="fixed bottom-6 right-6 z-50 inline-flex items-center gap-2 rounded-full bg-[#25D366] px-5 py-3.5 font-semibold text-white shadow-2xl shadow-emerald-500/30 ring-4 ring-white/40 transition-all hover:scale-105 hover:bg-[#1ebe5b]"
    >
      <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#25D366] opacity-30" />
      <MessageCircle className="relative h-5 w-5" />
      <span className="relative hidden sm:inline">WhatsApp</span>
    </a>
  );
}
