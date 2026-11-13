import Image from "next/image";
import { hero, site, values } from "@/lib/site";
import { Button } from "@/components/ui/Button";
import { Icon } from "@/components/ui/Icon";
import { Decor } from "@/components/ui/Decor";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

export function Hero() {
  return (
    <section id="inicio" className="hero" aria-labelledby="hero-title">
      <div className="hero__bg" aria-hidden="true" />
      <Decor kind="tape" className="decor--hero-a" />
      <Decor kind="scale" className="decor--hero-b" />
      <div className="wrap">
        <h1 id="hero-title" className="hero__title">
          <span className="h-in" style={d(100)}>Cuide de você</span>
          <span className="hero__title-tan h-in" style={d(240)}>sem deixar de viver</span>
        </h1>

        <div className="hero__stage">
          <a className="hero__card glass h-in" style={d(700)} href="#sobre">
            <Image
              className="hero__card-photo"
              src="/images/professional/julia-trinca.webp"
              alt="Julia Trinca sorrindo, de óculos"
              width={360}
              height={360}
              sizes="96px"
              priority
            />
            <strong>{site.name}</strong>
            <span className="hero__card-role">{site.role}</span>
            <span className="hero__card-crn">{site.crn}</span>
            <span className="hero__card-link">Conheça a Julia <Icon name="arrow" size={15} /></span>
          </a>

          <figure className="hero__photo shutter" data-tilt>
            <Image
              src="/images/backgrounds/hero-mulher-salada.webp"
              alt="Mulher sorridente de top esportivo verde segurando uma tigela de comida"
              fill
              priority
              sizes="(min-width: 960px) 40vw, 100vw"
            />
          </figure>

          <div className="hero__aside h-in" style={d(500)}>
            <p className="hero__lead">{hero.lead}</p>
            <p className="hero__sub">{hero.sub}</p>
            <div className="hero__actions">
              <Button href={site.links.whatsapp} variant="light" size="sm">Agendar minha consulta</Button>
            </div>
          </div>
        </div>
      </div>

      <div className="ticker" aria-label="Pilares do atendimento">
        <ul className="wrap ticker__list">
          {values.map((v) => (
            <li key={v}>{v}</li>
          ))}
        </ul>
      </div>
    </section>
  );
}
