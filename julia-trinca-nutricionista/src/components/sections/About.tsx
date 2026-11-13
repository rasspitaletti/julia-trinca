import Image from "next/image";
import { about, site } from "@/lib/site";
import { Button } from "@/components/ui/Button";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;

const rows = [
  [
    { src: "/images/gallery/feira.webp", alt: "Bancas de frutas frescas em um mercado ao ar livre", w: 1200, h: 673, span: "w2" },
    { src: "/images/gallery/cozinha.webp", alt: "Mulher preparando legumes em uma cozinha iluminada pela janela", w: 900, h: 1353, span: "w1" },
    { src: "/images/services/equilibrio.webp", alt: "Tigela com folhas, legumes, cogumelos e pão tostado", w: 1200, h: 894, span: "w15" },
  ],
  [
    { src: "/images/services/corpo.webp", alt: "Smoothie bowl verde com mirtilos, framboesas e sementes", w: 1200, h: 900, span: "w15" },
    { src: "/images/services/esportiva.webp", alt: "Mulher correndo em um parque arborizado", w: 1000, h: 1500, span: "w1" },
    { src: "/images/backgrounds/hero-mesa.webp", alt: "Mesa posta com saladas, legumes, frutas e pães em luz natural", w: 928, h: 1152, span: "w2" },
  ],
];

export function About() {
  return (
    <section id="sobre" className="about section" aria-labelledby="about-title">
      <div className="wrap about__head">
        <div>
          <span className="label" data-reveal>{about.greeting}</span>
          <h2 id="about-title" className="h2" data-reveal style={d(80)}>
            Prazer, sou <em>Julia Trinca,</em> nutricionista esportiva.
          </h2>
        </div>
        <div className="about__text">
          {about.paragraphs.map((p, i) => (
            <p key={i} className="lead" data-reveal style={d(140 + i * 80)}>{p}</p>
          ))}
          <dl className="facts" data-reveal style={d(300)}>
            <div><dt>Registro</dt><dd>{site.crn}</dd></div>
            <div><dt>Atuação</dt><dd>Nutrição esportiva</dd></div>
            <div><dt>Instagram</dt><dd><a href={site.links.instagram} target="_blank" rel="noopener noreferrer">{site.links.instagramHandle}</a></dd></div>
          </dl>
          <div data-reveal style={d(360)}>
            <Button href={site.links.whatsapp} variant="dark" size="sm" icon="whatsapp">Converse comigo</Button>
          </div>
        </div>
      </div>

      <div className="mosaic" aria-label="Mesa, rotina e movimento">
        {rows.map((row, r) => (
          <div key={r} className={`mosaic__row mosaic__row--${r + 1}`}>
            {row.map((p, i) => (
              <figure key={p.src} className={`mosaic__item ${p.span}`} data-reveal style={d(i * 90)}>
                <Image src={p.src} alt={p.alt} width={p.w} height={p.h} sizes="(min-width: 960px) 30vw, 50vw" />
              </figure>
            ))}
          </div>
        ))}
      </div>
    </section>
  );
}
