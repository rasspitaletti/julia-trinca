import { site } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

/** Atendimento 100% online: sem endereço físico, sem mapa. */
export function Location() {
  return (
    <section id="online" className="location section" aria-labelledby="online-title">
      <div className="wrap location__grid">
        <div className="location__info">
          <span className="label" data-reveal>Atendimento online</span>
          <h2 id="online-title" className="h2" data-reveal style={d(80)}>
            Consulta de onde <em>você estiver.</em>
          </h2>
          <p className="lead" data-reveal style={d(140)}>
            O atendimento é feito online. Você agenda pelo WhatsApp e cuida da sua alimentação sem sair da sua rotina.
          </p>
          <ul className="location__list" data-reveal style={d(200)}>
            <li>
              <span className="location__ico" aria-hidden="true"><Icon name="video" size={20} /></span>
              <span><strong>Formato</strong>Atendimento online</span>
            </li>
            <li>
              <span className="location__ico" aria-hidden="true"><Icon name="whatsapp" size={20} /></span>
              <span>
                <strong>Agendamento</strong>
                <a href={site.links.whatsapp} target="_blank" rel="noopener noreferrer">Pelo WhatsApp</a>
              </span>
            </li>
            <li>
              <span className="location__ico" aria-hidden="true"><Icon name="instagram" size={20} /></span>
              <span>
                <strong>Instagram</strong>
                <a href={site.links.instagram} target="_blank" rel="noopener noreferrer">{site.links.instagramHandle}</a>
              </span>
            </li>
          </ul>
          <div data-reveal style={d(260)}>
            <Button href={site.links.whatsapp} variant="dark" size="sm" icon="whatsapp">Agendar consulta online</Button>
          </div>
        </div>

        <div className="online-card" data-reveal data-tilt style={d(120)}>
          <div className="online-card__bg" aria-hidden="true" />
          <span className="online-card__status"><span className="pulse" aria-hidden="true" /> Online</span>
          <div className="online-card__person">
            {/* eslint-disable-next-line @next/next/no-img-element */}
            <img src="/images/professional/julia-trinca.webp" alt="" width={360} height={360} loading="lazy" />
            <p>
              <strong>{site.name}</strong>
              <span>{site.role} · {site.crn}</span>
            </p>
          </div>
          <ol className="online-card__steps">
            <li><Icon name="whatsapp" size={18} /> Agende pelo WhatsApp</li>
            <li><Icon name="video" size={18} /> Consulta online</li>
            <li><Icon name="sprout" size={18} /> Acompanhamento no seu ritmo</li>
          </ol>
        </div>
      </div>
    </section>
  );
}
