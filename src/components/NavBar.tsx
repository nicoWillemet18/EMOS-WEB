import { Link } from "react-router-dom";

const EMAIL = "empresamunicipalsaupe@gmail.com";

export default function Navbar() {
  return (
    <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-foreground/5 bg-background/80 px-6 py-4 backdrop-blur-md">
      <Link
        to="/"
        className="text-xl font-extrabold uppercase italic tracking-tighter"
      >
        EMOS
      </Link>

      <div className="hidden gap-8 text-sm font-medium uppercase tracking-wider md:flex">
        <Link
          to="/"
          className="transition-colors hover:text-accent"
        >
          Inicio
        </Link>

        <Link
          to="/servicios"
          className="transition-colors hover:text-accent"
        >
          Servicios
        </Link>

        <Link
          to="/contacto"
          className="transition-colors hover:text-accent"
        >
          Contacto
        </Link>
      </div>

      <a
        href={`mailto:${EMAIL}`}
        className="flex items-center gap-2 rounded-full bg-foreground px-5 py-2 text-sm font-bold text-background transition-all hover:bg-accent active:scale-95"
      >
        Contactanos
      </a>
    </nav>
  );
}