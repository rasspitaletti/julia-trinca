"use client";

import { useEffect, useRef, useState } from "react";
import { nav, site } from "@/lib/site";
import { Icon } from "@/components/ui/Icon";
import { LogoMark } from "@/components/ui/Logo";

export function Header() {
  const [open, setOpen] = useState(false);
  const toggleRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    document.documentElement.classList.toggle("menu-open", open);
    if (!open) return;
    panelRef.current?.querySelector<HTMLAnchorElement>("a")?.focus();
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    };
    const onResize = () => window.innerWidth >= 960 && setOpen(false);
    window.addEventListener("keydown", onKey);
    window.addEventListener("resize", onResize);
    return () => {
      window.removeEventListener("keydown", onKey);
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  return (
    <header className="header">
      <a className="skip-link" href="#conteudo">Pular para o conteúdo</a>
      <div className="header__bar">
        <a href="#inicio" className="brand" aria-label={`${site.name}, ${site.role}. Voltar ao início`}>
          <span className="brand__mark"><LogoMark size={44} /></span>
          <span className="brand__text">
            <span className="brand__name">{site.name}</span>
            <span className="brand__role">{site.role}</span>
          </span>
        </a>

        <nav className="header__nav" aria-label="Principal">
          <ul>
            {nav.map((l) => (
              <li key={l.href}>
                <a href={l.href} data-navlink>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>

        <a className="btn btn--outline btn--sm header__cta" href={site.links.whatsapp} target="_blank" rel="noopener noreferrer">
          <span className="btn__label">Agendar consulta</span>
          <span className="btn__icon" aria-hidden="true"><Icon name="arrow" size={16} /><Icon name="arrow" size={16} /></span>
          <span className="sr-only"> pelo WhatsApp (abre em nova aba)</span>
        </a>

        <button
          ref={toggleRef}
          type="button"
          className="menu-toggle"
          aria-expanded={open}
          aria-controls="menu-mobile"
          aria-label={open ? "Fechar menu" : "Abrir menu"}
          onClick={() => setOpen((v) => !v)}
        >
          <span /><span />
        </button>
      </div>

      <div
        id="menu-mobile"
        ref={panelRef}
        className="menu-sheet"
        data-open={open}
        inert={!open}
      >
        <nav aria-label="Menu móvel">
          <ul>
            {nav.map((l, i) => (
              <li key={l.href} style={{ "--i": i } as React.CSSProperties}>
                <a href={l.href} data-navlink onClick={() => setOpen(false)}>{l.label}</a>
              </li>
            ))}
          </ul>
        </nav>
        <div className="menu-sheet__foot">
          <a className="btn btn--tan" href={site.links.whatsapp} target="_blank" rel="noopener noreferrer">
            <span className="btn__label">Agendar pelo WhatsApp</span>
            <span className="btn__icon" aria-hidden="true"><Icon name="whatsapp" size={18} /></span>
          </a>
          <a className="menu-sheet__ig" href={site.links.instagram} target="_blank" rel="noopener noreferrer">
            <Icon name="instagram" size={18} /> {site.links.instagramHandle}
          </a>
          <p>{site.role} · {site.crn}</p>
        </div>
      </div>
    </header>
  );
}
