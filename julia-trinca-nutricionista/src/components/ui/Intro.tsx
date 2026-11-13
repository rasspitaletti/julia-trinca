import { site } from "@/lib/site";
import { LogoMark } from "./Logo";

/**
 * Abertura do site: logo + nome, depois a cortina sobe revelando a página.
 * 100% CSS (some sozinha mesmo sem JS). Aparece uma vez por sessão —
 * o script no <head> marca `intro-seen` e a abertura é pulada nas visitas seguintes.
 */
export function Intro() {
  return (
    <div className="intro" aria-hidden="true">
      <div className="intro__inner">
        <span className="intro__logo"><LogoMark size={96} /></span>
        <span className="intro__name">{site.name}</span>
        <span className="intro__line" />
        <span className="intro__role">{site.role}</span>
      </div>
    </div>
  );
}
