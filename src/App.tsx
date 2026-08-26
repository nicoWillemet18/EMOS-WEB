import oficina from "@/assets/oficina.jpg";

const WA = "https://wa.me/5492614160863";

const servicios = [
  {
    tag: "01 / OBRAS",
    title: "Ejecución de Obras",
    text: "Planificación y ejecución de obras de infraestructura y construcción destinadas a acompañar el crecimiento y desarrollo de la comunidad.",
  },
  {
    tag: "02 / MANTENIMIENTO",
    title: "Mantenimiento de Infraestructura",
    text: "Trabajos de mantenimiento, reparación y conservación de espacios e instalaciones para garantizar su correcto funcionamiento.",
  },
  {
    tag: "03 / SERVICIOS",
    title: "Servicios Urbanos",
    text: "Prestación y gestión de servicios vinculados al mantenimiento y mejoramiento de la infraestructura urbana del departamento.",
  },
  {
    tag: "04 / PROYECTOS",
    title: "Proyectos y Planificación",
    text: "Diseño, planificación y coordinación de proyectos orientados a mejorar la infraestructura y responder a las necesidades de la comunidad.",
  },
  {
    tag: "05 / CONSTRUCCIÓN",
    title: "Construcción y Reformas",
    text: "Construcción, reforma y reparación de edificios e instalaciones no residenciales, de acuerdo con las necesidades de cada proyecto.",
  },
  {
    tag: "06 / INFRAESTRUCTURA",
    title: "Desarrollo de Infraestructura",
    text: "Desarrollo y mejora de infraestructura mediante proyectos que buscan generar espacios funcionales, seguros y preparados para el futuro.",
  },
];

const metricas = [
  { valor: "2020", label: ["Año de", "Constitución"] },
  { valor: "410021", label: ["Código CIIU", "Actividad Principal"] },
  { valor: "LAS HERAS", label: ["Departamento", "Mendoza"] },
  { valor: "S.A.U.", label: ["Tipo", "Societario"] },
];

export default function App() {
  return (
    <div className="min-h-screen bg-background text-foreground selection:bg-accent/20">
      <nav className="sticky top-0 z-50 flex items-center justify-between border-b border-foreground/5 bg-background/80 px-6 py-4 backdrop-blur-md">
        <span className="text-xl font-extrabold uppercase italic tracking-tighter">
          EMOS
        </span>

        <div className="hidden gap-8 text-sm font-medium uppercase tracking-wider md:flex">
          <a
            href="#servicios"
            className="transition-colors hover:text-accent"
          >
            Servicios
          </a>

          <a
            href="#nosotros"
            className="transition-colors hover:text-accent"
          >
            Estudio
          </a>

          <a
            href="#contacto"
            className="transition-colors hover:text-accent"
          >
            Contacto
          </a>
        </div>

        <a
          href={WA}
          target="_blank"
          rel="noreferrer"
          className="flex items-center gap-2 rounded-full bg-whatsapp px-5 py-2 text-sm font-bold text-whatsapp-foreground transition-all hover:shadow-lg active:scale-95"
        >
          Escribinos
        </a>
      </nav>

      <header
        id="nosotros"
        className="mx-auto max-w-6xl px-6 py-16 md:py-32"
      >
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
            EMOS trabaja en la ejecución y gestión de obras y servicios, con foco
            en el desarrollo y mantenimiento de infraestructura para la comunidad
            de Las Heras, Mendoza.
          </p>

          <div className="flex flex-col gap-4 sm:flex-row">
            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="rounded-lg bg-foreground px-8 py-4 text-center font-bold text-background transition-colors hover:bg-accent"
            >
              Comenzar consulta
            </a>

            <a
              href="#servicios"
              className="rounded-lg border border-foreground/10 px-8 py-4 text-center font-bold transition-colors hover:bg-foreground/5"
            >
              Ver servicios
            </a>
          </div>
        </div>

        <div className="animate-in-up mt-20">
          <img
            src={oficina}
            alt="Equipo de consultores de Métrica & Co. reunido en las oficinas centrales"
            width={1536}
            height={768}
            className="aspect-[21/9] w-full rounded-2xl object-cover outline-1 -outline-offset-1 outline-foreground/5"
          />
        </div>
      </header>

      <section className="overflow-hidden bg-foreground py-12 text-background">
        <div className="animate-in-up flex flex-wrap gap-16 whitespace-nowrap">
          {metricas.map((m) => (
            <div
              key={m.valor}
              className="flex items-center gap-4 px-6"
            >
              <span className="text-4xl font-bold">{m.valor}</span>

              <span className="font-mono text-[10px] uppercase leading-tight">
                {m.label[0]}
                <br />
                {m.label[1]}
              </span>
            </div>
          ))}
        </div>
      </section>

      <section
        id="servicios"
        className="mx-auto max-w-6xl px-6 py-24"
      >
        <div className="mb-16 flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-accent">
              Qué hacemos
            </span>

            <h2 className="mb-4 text-3xl font-bold tracking-tighter md:text-5xl">
              Obras y servicios
            </h2>

            <p className="max-w-[55ch] text-muted-foreground">
              Trabajamos en proyectos de construcción, mantenimiento e
              infraestructura orientados al desarrollo y crecimiento de Las Heras.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-6 md:grid-cols-2 lg:grid-cols-3">
          {servicios.map((s) => (
            <div
              key={s.tag}
              className="animate-in-up group flex h-full flex-col rounded-2xl border border-foreground/5 bg-card p-8 transition-all hover:border-accent hover:shadow-lg"
            >
              <span className="mb-6 block font-mono text-xs text-accent">
                {s.tag}
              </span>

              <h3 className="mb-4 text-2xl font-bold tracking-tight">
                {s.title}
              </h3>

              <p className="grow text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>

              <div className="mt-8 flex items-center gap-2 text-sm font-bold text-accent">
                <span className="transition-transform group-hover:translate-x-1">
                  →
                </span>
                Conocer más
              </div>
            </div>
          ))}
        </div>
      </section>

      <section
        id="contacto"
        className="bg-foreground px-6 py-24 text-background"
      >
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 md:grid-cols-2">
          <div className="animate-in-up">
            <h2 className="mb-8 text-4xl font-extrabold leading-none tracking-tighter md:text-6xl">
              Agendemos una{" "}
              <span className="text-accent">reunión.</span>
            </h2>

            <div className="space-y-6">
              <div>
                <span className="mb-2 block font-mono text-[10px] uppercase text-background/50">
                  Ubicación
                </span>

                <p className="text-lg">
                  SAN MIGUEL 1434, Piso PA, LAS HERAS, MENDOZA, 5539
                </p>
              </div>

              <div>
                <span className="mb-2 block font-mono text-[10px] uppercase text-background/50">
                  Horarios
                </span>

                <p className="text-lg">
                  Lunes a Viernes • 09:00 a 18:00 hs
                </p>
              </div>
            </div>
          </div>

          <div className="animate-in-up rounded-3xl bg-background p-8 text-foreground md:p-12">
            <h3 className="mb-6 text-2xl font-bold tracking-tight">
              Contacto Directo
            </h3>

            <p className="mb-8 text-sm text-muted-foreground">
              Reciba atención inmediata de uno de nuestros consultores
              especializados a través de WhatsApp.
            </p>

            <a
              href={WA}
              target="_blank"
              rel="noreferrer"
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-whatsapp py-4 text-center text-lg font-bold text-whatsapp-foreground transition-all hover:shadow-[0_0_20px_color-mix(in_oklab,var(--whatsapp)_40%,transparent)]"
            >
              Iniciar Chat
            </a>

            <p className="mt-6 text-center font-mono text-[10px] uppercase tracking-widest text-muted-foreground">
              Respuesta en menos de 15 min
            </p>
          </div>
        </div>
      </section>

      <footer className="border-t border-foreground/5 px-6 py-12">
        <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
          <div className="text-center md:text-left">
            <span className="font-extrabold uppercase italic tracking-tighter">
              Empresa Municipal de Obras y Servicios S.A.U.
            </span>

            <p className="mt-2 font-mono text-[10px] text-muted-foreground">
              © 2026 • Todos los derechos reservados.
            </p>
          </div>

          <div className="flex gap-6 font-mono text-[10px] uppercase tracking-widest">
            <a href="#" className="hover:text-accent">
              LinkedIn
            </a>

            <a href="#" className="hover:text-accent">
              Instagram
            </a>

            <a href="#" className="hover:text-accent">
              Términos
            </a>
          </div>
        </div>
      </footer>

      <a
        href={WA}
        target="_blank"
        rel="noreferrer"
        aria-label="Contactar por WhatsApp"
        className="animate-pulse-soft group fixed bottom-8 right-8 z-[100] rounded-full bg-whatsapp p-4 text-whatsapp-foreground shadow-2xl transition-all hover:scale-110 active:scale-95"
      >
        <div className="relative flex items-center gap-2">
          <span className="max-w-0 overflow-hidden whitespace-nowrap text-sm font-bold transition-all duration-500 group-hover:max-w-xs">
            ¿Necesitás ayuda?
          </span>

          <div className="flex size-6 items-center justify-center">
            <div className="absolute size-full animate-ping rounded-full bg-white/20"></div>

            <div className="size-3 rounded-full bg-current"></div>
          </div>
        </div>
      </a>
    </div>
  );
}