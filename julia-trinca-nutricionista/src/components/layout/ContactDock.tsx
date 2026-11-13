import { site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

/** Desktop: botão flutuante do WhatsApp. Celular: barra inferior com os atalhos reais. */
export function ContactDock() {
  return (
    <>
      <a className="fab fab--ig" href={site.links.instagram} target="_blank" rel="noopener noreferrer" aria-label="Abrir o Instagram (abre em nova aba)">
        <Icon name="instagram" size={24} />
        <span className="fab__tip" aria-hidden="true">{site.links.instagramHandle}</span>
      </a>
      <a className="fab" href={site.links.whatsapp} target="_blank" rel="noopener noreferrer" aria-label="Agendar pelo WhatsApp (abre em nova aba)">
        <Icon name="whatsapp" size={26} />
        <span className="fab__tip" aria-hidden="true">Agende pelo WhatsApp</span>
      </a>

      <nav className="dock" aria-label="Atalhos de contato">
        <a href={site.links.instagram} target="_blank" rel="noopener noreferrer" className="dock__ig">
          <Icon name="instagram" size={20} />
          <span>Instagram</span>
        </a>
        <a href={site.links.whatsapp} target="_blank" rel="noopener noreferrer" className="dock__wa">
          <Icon name="whatsapp" size={20} />
          <span>Agendar consulta</span>
        </a>
      </nav>
    </>
  );
}
