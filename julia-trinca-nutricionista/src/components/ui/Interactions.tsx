"use client";

import { useEffect } from "react";

/**
 * Microinterações com ponteiro (só em dispositivos com mouse e sem "reduzir movimento"):
 * - [data-tilt]: inclina levemente em 3D seguindo o mouse;
 * - .card, .step, .story: luz suave que acompanha o cursor (--mx/--my);
 * - .btn: efeito magnético discreto.
 */
export function Interactions() {
  useEffect(() => {
    const fine = window.matchMedia("(hover: hover) and (pointer: fine)").matches;
    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!fine || reduce) return;

    const offs: (() => void)[] = [];
    const on = (el: Element, ev: string, fn: EventListener) => {
      el.addEventListener(ev, fn);
      offs.push(() => el.removeEventListener(ev, fn));
    };

    document.querySelectorAll<HTMLElement>("[data-tilt]").forEach((el) => {
      on(el, "pointermove", (e) => {
        const { clientX, clientY } = e as PointerEvent;
        const r = el.getBoundingClientRect();
        const x = (clientX - r.left) / r.width - 0.5;
        const y = (clientY - r.top) / r.height - 0.5;
        el.style.setProperty("--rx", `${(-y * 6).toFixed(2)}deg`);
        el.style.setProperty("--ry", `${(x * 8).toFixed(2)}deg`);
        el.style.setProperty("--px", `${(x * -14).toFixed(1)}px`);
        el.style.setProperty("--py", `${(y * -14).toFixed(1)}px`);
      });
      on(el, "pointerleave", () => {
        ["--rx", "--ry", "--px", "--py"].forEach((p) => el.style.removeProperty(p));
      });
    });

    document.querySelectorAll<HTMLElement>(".card, .step, .story__media, .hero__card").forEach((el) => {
      on(el, "pointermove", (e) => {
        const { clientX, clientY } = e as PointerEvent;
        const r = el.getBoundingClientRect();
        el.style.setProperty("--mx", `${clientX - r.left}px`);
        el.style.setProperty("--my", `${clientY - r.top}px`);
      });
    });

    document.querySelectorAll<HTMLElement>(".btn, .fab").forEach((el) => {
      on(el, "pointermove", (e) => {
        const { clientX, clientY } = e as PointerEvent;
        const r = el.getBoundingClientRect();
        const x = clientX - (r.left + r.width / 2);
        const y = clientY - (r.top + r.height / 2);
        el.style.translate = `${(x * 0.12).toFixed(1)}px ${(y * 0.22).toFixed(1)}px`;
      });
      on(el, "pointerleave", () => {
        el.style.translate = "";
      });
    });

    return () => offs.forEach((f) => f());
  }, []);

  return null;
}
