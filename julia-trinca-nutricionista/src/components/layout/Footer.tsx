import { contact, nav, photoCredits, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { LogoMark } from "@/components/ui/Logo";

export function Footer() {
  return (
    <footer className="footer">
      <div className="wrap">
        <div className="footer__top">
          <div className="footer__brand">
            <LogoMark size={56} />
            <p className="footer__line">{contact.footerLine}</p>
          </div>

          <nav aria-label="Rodapé" className="footer__col">
            <h2 className="footer__h">Navegação</h2>
            <ul>
              <li><a href="#inicio">Início</a></li>
              {nav.map((l) => (
                <li key={l.href}><a href={l.href}>{l.label}</a></li>
              ))}
            </ul>
          </nav>

          <div className="footer__col">
            <h2 className="footer__h">Contato</h2>
            <ul>
              <li>
                <a href={site.links.whatsapp} target="_blank" rel="noopener noreferrer">
                  <Icon name="whatsapp" size={16} /> Agende sua consulta
                </a>
              </li>
              <li>
                <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">
                  <Icon name="instagram" size={16} /> {site.links.instagramHandle}
                </a>
              </li>
            </ul>
          </div>
        </div>

        <p className="footer__wordmark" aria-hidden="true">Julia Trinca</p>

        <div className="footer__legal">
          <p>© {new Date().getFullYear()} {site.name}. Todos os direitos reservados.</p>
          <p>{site.role} · {site.crn}</p>
        </div>

        <details className="footer__credits">
          <summary>Créditos das fotografias</summary>
          <ul>
            {photoCredits.map((c) => (
              <li key={c.url}>
                <a href={c.url} target="_blank" rel="noopener noreferrer">“{c.title}”</a>, {c.author}, {c.license}
              </li>
            ))}
          </ul>
        </details>
      </div>
    </footer>
  );
}
