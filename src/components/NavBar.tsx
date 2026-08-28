import { useState } from "react";
import { Link } from "react-router-dom";

const EMAIL = "empresamunicipalsaupe@gmail.com";

export default function Navbar() {
  const [menuAbierto, setMenuAbierto] = useState(false);

  return (
    <nav className="sticky top-0 z-50 border-b border-foreground/5 bg-background/80 px-6 py-4 backdrop-blur-md">
      <div className="flex items-center justify-between">
        {/* Logo */}
        <Link
          to="/"
          onClick={() => setMenuAbierto(false)}
          className="text-xl font-extrabold uppercase italic tracking-tighter"
        >
          EMOS
        </Link>

        {/* Menú escritorio */}
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

        {/* Botón Contactanos - escritorio */}
        <a
          href={`mailto:${EMAIL}`}
          className="hidden rounded-full bg-foreground px-5 py-2 text-sm font-bold text-background transition-all hover:bg-accent active:scale-95 md:flex"
        >
          Contactanos
        </a>

        {/* Botón menú - celular */}
        <button
          type="button"
          onClick={() => setMenuAbierto(!menuAbierto)}
          className="flex h-10 w-10 items-center justify-center rounded-lg border border-foreground/10 text-xl transition-colors hover:bg-foreground/5 md:hidden"
          aria-label="Abrir menú"
        >
          {menuAbierto ? "✕" : "☰"}
        </button>
      </div>

      {/* Menú celular */}
      {menuAbierto && (
        <div className="flex flex-col gap-2 border-t border-foreground/5 pt-4 md:hidden">
          <Link
            to="/"
            onClick={() => setMenuAbierto(false)}
            className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-foreground/5 hover:text-accent"
          >
            Inicio
          </Link>

          <Link
            to="/servicios"
            onClick={() => setMenuAbierto(false)}
            className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-foreground/5 hover:text-accent"
          >
            Servicios
          </Link>

          <Link
            to="/contacto"
            onClick={() => setMenuAbierto(false)}
            className="rounded-lg px-4 py-3 text-sm font-medium uppercase tracking-wider transition-colors hover:bg-foreground/5 hover:text-accent"
          >
            Contacto
          </Link>

          <a
            href={`mailto:${EMAIL}`}
            onClick={() => setMenuAbierto(false)}
            className="mt-2 rounded-lg bg-foreground px-4 py-3 text-center text-sm font-bold text-background transition-colors hover:bg-accent"
          >
            Contactanos
          </a>
        </div>
      )}
    </nav>
  );
}