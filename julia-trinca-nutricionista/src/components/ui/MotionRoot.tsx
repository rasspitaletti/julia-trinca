"use client";

import { useEffect } from "react";

/**
 * Um único observador para toda a página:
 * - [data-reveal] recebe .is-in quando entra na tela (uma vez);
 * - o <html> recebe .is-scrolled depois do topo (header adaptativo);
 * - links do menu recebem aria-current na seção visível.
 * Sem JS, nada fica escondido (as regras dependem da classe .js).
 */
export function MotionRoot() {
  useEffect(() => {
    const root = document.documentElement;

    const reveal = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) {
            e.target.classList.add("is-in");
            reveal.unobserve(e.target);
          }
        }
      },
      { rootMargin: "0px 0px -12% 0px", threshold: 0.12 }
    );
    document.querySelectorAll("[data-reveal]").forEach((el) => reveal.observe(el));

    const onScroll = () => root.classList.toggle("is-scrolled", window.scrollY > 24);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });

    const links = new Map<string, HTMLAnchorElement[]>();
    document.querySelectorAll<HTMLAnchorElement>("[data-navlink]").forEach((a) => {
      const id = a.hash.slice(1);
      links.set(id, [...(links.get(id) ?? []), a]);
    });
    const spy = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (!e.isIntersecting) continue;
          links.forEach((as, id) =>
            as.forEach((a) => (id === e.target.id ? a.setAttribute("aria-current", "true") : a.removeAttribute("aria-current")))
          );
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    links.forEach((_, id) => {
      const s = document.getElementById(id);
      if (s) spy.observe(s);
    });

    return () => {
      reveal.disconnect();
      spy.disconnect();
      window.removeEventListener("scroll", onScroll);
    };
  }, []);

  return null;
}
