const EMAIL = "empresamunicipalsaupe@gmail.com";

const tiposContacto = [
  {
    titulo: "Consultas",
    descripcion:
      "Solicitudes de información, dudas o consultas relacionadas con EMOS y sus actividades.",
    asunto: "Consulta - EMOS",
    accion: "Realizar consulta",
  },
  {
    titulo: "Reclamos",
    descripcion:
      "Informá inconvenientes, situaciones que requieran atención o problemas relacionados con los servicios.",
    asunto: "Reclamo - EMOS",
    accion: "Realizar reclamo",
  },
  {
    titulo: "Ética Pública",
    descripcion:
      "Comunicá situaciones relacionadas con integridad, transparencia, conducta o posibles incumplimientos éticos.",
    asunto: "Ética Pública - EMOS",
    accion: "Realizar comunicación",
  },
];

export default function Contacto() {
  return (
    <div className="bg-background text-foreground selection:bg-accent/20">

      {/* Quiénes somos */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="animate-in-up max-w-3xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Quiénes somos y Contacto
          </span>

          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tighter md:text-6xl">
            Quiénes somos
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Empresa Municipal de Obras y Servicios S.A.U. (EMOS) es una empresa
            constituida en el año 2020, orientada a la gestión y prestación de
            servicios vinculados al desarrollo y mantenimiento de infraestructura
            para la comunidad. Su actividad principal comprende la administración,
            operación y mantenimiento de la Planta de Tratamiento y Disposición
            Final de Residuos Sólidos Urbanos, contribuyendo a una gestión
            responsable y adecuada de los residuos generados en el ámbito urbano.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <section className="bg-foreground px-6 py-24 text-background">

        <div className="mx-auto max-w-6xl">

          {/* Título */}
          <div className="animate-in-up mb-16">
            <h1 className="text-4xl font-extrabold leading-none tracking-tighter md:text-6xl">
              <span className="text-accent">Contacto</span>
            </h1>
          </div>

          {/* Intro */}
          <div className="animate-in-up mb-12 max-w-3xl">
            <h2 className="mb-6 text-4xl font-extrabold leading-none tracking-tighter md:text-5xl">
              Estamos para atender sus consultas.
            </h2>

            <p className="text-lg leading-relaxed text-background/60">
              Seleccione el tipo de comunicación que desea realizar y envíenos
              su mensaje. Su solicitud será recibida para su correspondiente
              atención.
            </p>
          </div>

          {/* Tipos de contacto */}
          <div className="mb-20 grid grid-cols-1 gap-5 md:grid-cols-3">
            {tiposContacto.map((tipo, index) => (
              <a
                key={tipo.titulo}
                href={`mailto:${EMAIL}?subject=${encodeURIComponent(tipo.asunto)}`}
                className="group rounded-3xl bg-background p-7 text-foreground transition-all duration-300 hover:-translate-y-1 hover:bg-accent hover:text-background"
              >
                <span className="mb-8 block font-mono text-sm font-bold tracking-widest text-accent transition-colors group-hover:text-foreground">
                  0{index + 1}
                </span>

                <h3 className="mb-4 text-2xl font-bold tracking-tight">
                  {tipo.titulo}
                </h3>

                <p className="mb-8 min-h-[96px] text-sm leading-relaxed text-muted-foreground transition-colors group-hover:text-background/80">
                  {tipo.descripcion}
                </p>

                <span className="inline-flex items-center gap-2 text-sm font-bold">
                  {tipo.accion}
                  <span className="transition-transform group-hover:translate-x-1">
                    →
                  </span>
                </span>
              </a>
            ))}
          </div>

          {/* Información */}
          <div className="grid grid-cols-1 gap-12 border-t border-background/10 pt-12 md:grid-cols-2">

            <div>
              <span className="mb-2 block font-mono text-[10px] uppercase text-background/50">
                Ubicación
              </span>

              <p className="text-lg">
                Parque Industrial (Ex Gendarmería), Calle Santa Rita y Calle 3, LAS HERAS, MENDOZA, 5539
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

          {/* Correo general */}
          <div className="mt-12 flex flex-col gap-4 rounded-3xl bg-background/5 p-8 md:flex-row md:items-center md:justify-between">
            <div>
              <span className="mb-2 block font-mono text-[10px] uppercase text-background/50">
                Correo electrónico
              </span>

              <p className="text-lg">
                {EMAIL}
              </p>
            </div>

            <a
              href={`mailto:${EMAIL}`}
              className="inline-flex items-center justify-center rounded-xl bg-background px-6 py-3 font-bold text-foreground transition-all hover:bg-accent hover:text-background"
            >
              Enviar correo
            </a>
          </div>

        </div>
      </section>

    </div>
  );
}