import { approach } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { Decor } from "@/components/ui/Decor";

const d = (ms: number) => ({ "--d": `${ms}ms` }) as React.CSSProperties;
const icons = ["leaf", "sprout", "heart"] as const;

export function Approach() {
  return (

      <section id="abordagem" className="approach section" aria-labelledby="approach-title">
        <Decor kind="apple" className="decor--side-a" />
        <Decor kind="bottle" className="decor--side-b" />
        <div className="wrap">
          <div className="center approach__head">
            <span className="label" data-reveal>Minha abordagem</span>
            <h2 id="approach-title" className="h2" data-reveal style={d(80)}>
              Uma nutrição que <em>combina com a sua vida.</em>
            </h2>
            <p className="lead center" data-reveal style={d(160)}>{approach.intro}</p>
          </div>

          <ul className="cards">
            {approach.items.map((it, i) => (
              <li key={it.id} className="card" data-reveal style={d(i * 100)}>
                <span className="card__icon" aria-hidden="true"><Icon name={icons[i]} size={24} /></span>
                <h3 className="h3">{it.title}</h3>
                <p>{it.text}</p>
                <span className="card__tag">{it.tag}</span>
              </li>
            ))}
          </ul>

          <p className="approach__closing center" data-reveal>{approach.closing}</p>
        </div>
      </section>
  );
}
