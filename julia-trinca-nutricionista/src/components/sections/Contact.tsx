import Image from "next/image";
import { contact, quote, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Quote() {
  return (
    <section className="quote" aria-label="Mensagem da Julia">
      <div className="wrap quote__inner">
        <span className="quote__mark" aria-hidden="true">“</span>
        <blockquote data-reveal>
          <p>{quote.text}</p>
        </blockquote>
        <p className="quote__sign" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
          <span className="monogram" aria-hidden="true">JT</span> {quote.sign}
        </p>
      </div>
    </section>
  );
}

export function Contact() {
  return (
    <section id="contato" className="contact" aria-labelledby="contact-title">
      <div className="wrap contact__card" data-reveal>
        <div className="contact__copy">
          <span className="label label--light">{contact.kicker}</span>
          <h2 id="contact-title" className="h2 h2--light">
            Vamos cuidar da sua <em>alimentação juntos?</em>
          </h2>
          <p className="contact__text">{contact.text}</p>
          <div className="contact__actions">
            <Button href={site.links.whatsapp} variant="tan" icon="whatsapp">Agendar pelo WhatsApp</Button>
            <Button href={site.links.instagram} variant="outline" icon="instagram">Conhecer meu Instagram</Button>
          </div>
        </div>
        <div className="contact__person">
          <Image
            src="/images/professional/julia-trinca.webp"
            alt="Julia Trinca"
            width={360}
            height={360}
            sizes="160px"
          />
          <p>
            <strong>{site.name}</strong>
            <span>{site.role} · {site.crn}</span>
          </p>
        </div>
      </div>
    </section>
  );
}
