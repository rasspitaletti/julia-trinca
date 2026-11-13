import Image from "next/image";
import { process, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

export function Process() {
  return (
    <section id="acompanhamento" className="process section" aria-labelledby="process-title">
      <div className="wrap">
        <div className="center process__head">
          <span className="label" data-reveal>Acompanhamento</span>
          <h2 id="process-title" className="h2" data-reveal>
            Seu cuidado começa <em>com um primeiro passo.</em>
          </h2>
          <p className="lead center" data-reveal style={{ "--d": "90ms" } as React.CSSProperties}>{process.intro}</p>
        </div>

        <ol className="steps">
          {process.steps.map((s, i) => (
            <li key={s.title} className={`step step--${i + 1}`}>
              <figure className="step__media" data-reveal>
                <Image src={s.image} alt={s.alt} width={1000} height={760} sizes="(min-width: 960px) 36vw, 90vw" />
              </figure>
              <div className="step__copy" data-reveal style={{ "--d": "120ms" } as React.CSSProperties}>
                <span className="step__num" aria-hidden="true">{i + 1}</span>
                <h3 className="h3">{s.title}</h3>
                <p>{s.text}</p>
              </div>
            </li>
          ))}
        </ol>

        <div className="process__cta" data-reveal>
          <p>{process.ctaNote}</p>
          <Button href={site.links.whatsapp} variant="dark" icon="whatsapp">{process.cta}</Button>
        </div>
      </div>
    </section>
  );
}
