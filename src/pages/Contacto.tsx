const EMAIL = "empresamunicipalsaupe@gmail.com";

export default function Contacto() {
  return (
    <div className="bg-background text-foreground selection:bg-accent/20">

      {/* Quiénes somos */}
      <section className="mx-auto max-w-6xl px-6 py-24">
        <div className="animate-in-up max-w-3xl">
          <span className="mb-4 block font-mono text-xs uppercase tracking-[0.2em] text-accent">
            Quiénes somos
          </span>

          <h1 className="mb-8 text-4xl font-extrabold leading-none tracking-tighter md:text-6xl">
            Quiénes somos
          </h1>

          <p className="text-lg leading-relaxed text-muted-foreground md:text-xl">
            Empresa Municipal de Obras y Servicios S.A.U. (EMOS) es una empresa constituida en el año 2020, 
            orientada a la gestión y prestación de servicios vinculados al desarrollo y mantenimiento de infraestructura para la comunidad.
            Su actividad principal comprende la administración, operación y mantenimiento de la Planta de Tratamiento y 
            Disposición Final de Residuos Sólidos Urbanos, contribuyendo a una gestión responsable y adecuada de los residuos generados en el ámbito urbano.
          </p>
        </div>
      </section>

      {/* Contacto */}
      <main className="bg-foreground px-6 py-24 text-background">
        <div className="mx-auto grid max-w-6xl grid-cols-1 items-start gap-16 md:grid-cols-2">
          
          <div className="animate-in-up">
            <h2 className="mb-8 text-4xl font-extrabold leading-none tracking-tighter md:text-6xl">
              Estamos para atender sus{" "}
              <span className="text-accent">consultas.</span>
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
            <h2 className="mb-6 text-2xl font-bold tracking-tight">
              Contacto
            </h2>

            <p className="mb-8 text-sm text-muted-foreground">
              Comuníquese con EMOS a través de nuestro correo electrónico para
              realizar consultas o solicitar información.
            </p>

            <a
              href={`mailto:${EMAIL}`}
              className="flex w-full items-center justify-center gap-3 rounded-xl bg-foreground py-4 text-center text-lg font-bold text-background transition-all hover:bg-accent"
            >
              Enviar correo
            </a>
          </div>

        </div>
      </main>

    </div>
  );
}