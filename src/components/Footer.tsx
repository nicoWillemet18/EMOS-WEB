export default function Footer() {
  return (
    <footer className="border-t border-foreground/5 px-6 py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-8 md:flex-row">
        
        {/* Información de la empresa */}
        <div className="text-center md:text-left">
          <span className="font-extrabold uppercase italic tracking-tighter">
            Empresa Municipal de Obras y Servicios S.A.U.
          </span>

          <p className="mt-2 font-mono text-[10px] text-muted-foreground">
            © 2026 • Todos los derechos reservados.
          </p>
        </div>

        {/* Ubicación */}
        <div className="flex items-center gap-4">
          <span className="text-3xl font-bold">
            LAS HERAS
          </span>

          <span className="font-mono text-[10px] uppercase leading-tight">
            Departamento
            <br />
            Mendoza
          </span>
        </div>

      </div>
    </footer>
  );
}