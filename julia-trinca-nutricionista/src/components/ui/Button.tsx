import { Icon } from "./Icon";

type Props = {
  href: string;
  children: React.ReactNode;
  variant?: "light" | "dark" | "tan" | "outline";
  size?: "md" | "sm";
  icon?: "whatsapp" | "instagram" | "arrow" | "arrow-down" | "pin" | "video";
  external?: boolean;
  className?: string;
};

/** Botão-link: preenchimento desliza no hover, seta troca de lugar, leve compressão no clique. */
export function Button({ href, children, variant = "light", size = "md", icon = "arrow", external, className = "" }: Props) {
  const ext = external ?? href.startsWith("http");
  return (
    <a
      href={href}
      className={`btn btn--${variant} ${size === "sm" ? "btn--sm" : ""} ${className}`}
      {...(ext ? { target: "_blank", rel: "noopener noreferrer" } : {})}
    >
      <span className="btn__label">{children}</span>
      <span className="btn__icon" aria-hidden="true">
        <Icon name={icon} size={17} />
        {icon === "arrow" && <Icon name="arrow" size={17} />}
      </span>
      {ext && <span className="sr-only"> (abre em nova aba)</span>}
    </a>
  );
}
