import oficina from "@/assets/oficina.jpg";
import { Link } from "react-router-dom";

export default function Inicio() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20">

      <header className="mx-auto max-w-6xl px-6 py-16 md:py-32">
        <div className="animate-in-up">
          <span className="mb-6 block font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Empresa Municipal de Obras y Servicios S.A.U. • Las Heras, Mendoza
          </span>

          <h1 className="mb-8 text-balance text-5xl font-extrabold leading-[0.9] tracking-tighter md:text-8xl">
            Obras y servicios para una ciudad en{" "}
            <span className="italic text-accent underline decoration-2 underline-offset-8">
              crecimiento.
            </span>
          </h1>

          <p className="mb-10 max-w-[45ch] text-pretty text-lg leading-relaxed text-muted-foreground md:text-xl">
            EMOS trabaja en la ejecución y gestión de obras y servicios, con
            foco en el desarrollo y mantenimiento de infraestructura para la
            comunidad de Las Heras, Mendoza.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <Link
              to="/contacto"
              className="rounded-lg bg-foreground px-8 py-4 text-center font-bold text-background transition-colors hover:bg-accent"
            >
              Contactanos
            </Link>

            <Link
              to="/servicios"
              className="rounded-lg border border-foreground/10 px-8 py-4 text-center font-bold transition-colors hover:bg-foreground/5"
            >
              Ver servicios
            </Link>
          </div>
        </div>

        <div className="animate-in-up mt-20">
          <img
            src={oficina}
            alt="Instalaciones de EMOS"
            width={1536}
            height={768}
            className="aspect-[21/9] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-foreground/5"
          />
        </div>
      </header>
    </div>
  );
}