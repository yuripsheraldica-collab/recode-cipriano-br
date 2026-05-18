import { useState, type ReactNode } from "react";
import {
  Dialog, DialogContent, DialogDescription, DialogHeader, DialogTitle, DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { z } from "zod";
import { MessageCircle, ArrowRight } from "lucide-react";

const WHATSAPP = "5515998589225";

const schema = z.object({
  nome: z.string().trim().min(2, "Informe seu nome").max(100),
  razao: z.string().trim().min(2, "Informe a razão social").max(150),
  cnpj: z.string().trim().min(11, "CNPJ inválido").max(20),
  telefone: z.string().trim().min(8, "Telefone inválido").max(20),
  email: z.string().trim().email("Email inválido").max(150),
});

export function LeadFormDialog({ children, source = "Site" }: { children: ReactNode; source?: string }) {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState<string | null>(null);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const fd = new FormData(e.currentTarget);
    const data = {
      nome: String(fd.get("nome") || ""),
      razao: String(fd.get("razao") || ""),
      cnpj: String(fd.get("cnpj") || ""),
      telefone: String(fd.get("telefone") || ""),
      email: String(fd.get("email") || ""),
    };
    const parsed = schema.safeParse(data);
    if (!parsed.success) {
      setError(parsed.error.issues[0].message);
      return;
    }
    setError(null);
    const msg =
      `Olá! Gostaria de falar com um especialista do Grupo Cipriano Ayala.%0A%0A` +
      `*Nome:* ${encodeURIComponent(parsed.data.nome)}%0A` +
      `*Razão Social:* ${encodeURIComponent(parsed.data.razao)}%0A` +
      `*CNPJ:* ${encodeURIComponent(parsed.data.cnpj)}%0A` +
      `*Telefone:* ${encodeURIComponent(parsed.data.telefone)}%0A` +
      `*Email:* ${encodeURIComponent(parsed.data.email)}%0A` +
      `*Origem:* ${encodeURIComponent(source)}`;
    window.open(`https://wa.me/${WHATSAPP}?text=${msg}`, "_blank", "noopener,noreferrer");
    setOpen(false);
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>{children}</DialogTrigger>
      <DialogContent className="sm:max-w-md">
        <DialogHeader>
          <DialogTitle className="flex items-center gap-2 text-ink">
            <MessageCircle className="h-5 w-5 text-brand" /> Falar com um especialista
          </DialogTitle>
          <DialogDescription>
            Preencha os dados abaixo e continuaremos a conversa direto pelo WhatsApp.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit} className="grid gap-3">
          <div className="grid gap-1.5">
            <Label htmlFor="nome">Nome completo</Label>
            <Input id="nome" name="nome" required maxLength={100} />
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="razao">Razão social</Label>
            <Input id="razao" name="razao" required maxLength={150} />
          </div>
          <div className="grid grid-cols-2 gap-3">
            <div className="grid gap-1.5">
              <Label htmlFor="cnpj">CNPJ</Label>
              <Input id="cnpj" name="cnpj" required maxLength={20} placeholder="00.000.000/0000-00" />
            </div>
            <div className="grid gap-1.5">
              <Label htmlFor="telefone">Telefone</Label>
              <Input id="telefone" name="telefone" required maxLength={20} placeholder="(00) 00000-0000" />
            </div>
          </div>
          <div className="grid gap-1.5">
            <Label htmlFor="email">Email</Label>
            <Input id="email" name="email" type="email" required maxLength={150} />
          </div>
          {error && <p className="text-sm text-destructive">{error}</p>}
          <button type="submit" className="btn-primary mt-2 justify-center">
            Continuar no WhatsApp <ArrowRight className="h-4 w-4" />
          </button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
