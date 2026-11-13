import Image from "next/image";
import { stories } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";

export function Stories() {
  return (
    <section className="stories section" aria-labelledby="stories-title">
      <div className="leaf-bg" aria-hidden="true" />
      <div className="wrap">
        <div className="stories__head">
          <span className="label label--light" data-reveal>Cores, sabores e vida real</span>
          <h2 id="stories-title" className="h2 h2--light" data-reveal>
            A vida também acontece <em>à mesa e pelo caminho.</em>
          </h2>
          <p className="lead lead--light" data-reveal style={{ "--d": "90ms" } as React.CSSProperties}>{stories.intro}</p>
        </div>

        <ul className="stories__grid">
          {stories.items.map((s, i) => (
            <li key={s.title} className={`story story--${i + 1}`} data-reveal style={{ "--d": `${i * 100}ms` } as React.CSSProperties}>
              <article>
                <div className="story__media">
                  <Image src={s.image} alt={s.alt} width={1100} height={821} sizes="(min-width: 960px) 30vw, 90vw" />
                </div>
                <div className="story__copy">
                  <p className="story__kicker">{s.kicker}</p>
                  <h3 className="h3">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </article>
            </li>
          ))}
        </ul>

        <p className="stories__note" data-reveal>
          <Icon name="leaf" size={18} /> {stories.note}
        </p>
      </div>
    </section>
  );
}
