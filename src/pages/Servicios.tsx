
const servicios = [
  {
    tag: "01 / OPERACIÓN Y MANTENIMIENTO",
    title:
      "Planta de Tratamiento y Disposición Final de Residuos Sólidos Urbanos",
    text: "Administración, operación y mantenimiento de la Planta de Tratamiento y Disposición Final de Residuos Sólidos Urbanos, garantizando una gestión adecuada y responsable de los residuos generados en el ámbito urbano.",
  },
  {
  tag: "02 / ARTICULACIÓN INSTITUCIONAL",
  title: "Fideicomiso Mi Casa Mi Vida",
  text: "Articulación entre EMOS y el Fideicomiso Mi Casa Mi Vida para el desarrollo de acciones vinculadas con la entrega de viviendas, contribuyendo a brindar soluciones habitacionales para la comunidad.",
  },
];

export default function Servicios() {
  return (
    <div className="bg-background text-foreground selection:bg-accent/20">

      <main className="mx-auto max-w-6xl px-6 py-24">
        <div className="mb-16">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Qué hacemos
          </span>

          <h1 className="mb-4 text-3xl font-bold tracking-tighter md:text-5xl">
            Servicios
          </h1>

          <p className="max-w-[55ch] text-muted-foreground">
            Actividades y proyectos que forman parte de la gestión y el trabajo que
            desarrolla EMOS en beneficio de la comunidad.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6">
          {servicios.map((s) => (
            <div
              key={s.tag}
              className="animate-in-up group flex h-full flex-col rounded-2xl border border-foreground/5 bg-card p-8 transition-all hover:border-accent hover:shadow-lg"
            >
              <span className="mb-6 block font-mono text-xs text-accent">
                {s.tag}
              </span>

              <h2 className="mb-4 max-w-3xl text-2xl font-bold tracking-tight md:text-3xl">
                {s.title}
              </h2>

              <p className="max-w-3xl text-sm leading-relaxed text-muted-foreground">
                {s.text}
              </p>
            </div>
          ))}
        </div>
      </main>

    </div>
  );
}