const SeniorSection = () => {
  const actividades = [
    {
      nombre: 'Gym + Danza',
      icono: '💃',
      dias: 'Martes y Jueves',
      horarios: ['10:00 - 11:00', '11:00 - 12:00', '12:00 - 13:00'],
      destacado: true,
    },
    {
      nombre: 'Yoga',
      icono: '🧘',
      dias: 'Lunes y Miércoles',
      horarios: ['11:00 - 12:00'],
    },
    {
      nombre: 'Sevillanas',
      icono: '🌺',
      dias: 'Lunes y Miércoles',
      horarios: ['11:00 - 12:00'],
    },
    {
      nombre: 'Gimnasia Oriental',
      icono: '🌿',
      dias: 'Viernes',
      horarios: ['11:00 - 12:00'],
    },
    {
      nombre: 'Danza Coreográfica',
      icono: '✨',
      dias: 'Martes y Jueves',
      horarios: ['17:00 - 18:00'],
    },
    {
      nombre: 'Baile de Salón',
      icono: '🕺',
      dias: 'Lunes y Miércoles',
      horarios: ['20:00 - 21:00'],
      extra: 'Por parejas',
    },
  ]

  return (
    <section
      id="senior"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-amber-50 via-purple-50 to-fuchsia-100 py-28"
    >
      <div className="absolute -left-32 top-24 h-96 w-96 rounded-full bg-purple-300/30 blur-3xl"></div>
      <div className="absolute -right-32 bottom-20 h-[520px] w-[520px] rounded-full bg-amber-300/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 items-center gap-16 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        
        <div>
          <span className="mb-5 inline-flex rounded-full bg-purple-100 px-5 py-2 text-sm font-bold tracking-widest text-purple-700">
            SENIOR +55
          </span>

          <h2 className="text-5xl font-extrabold leading-tight text-purple-950 md:text-7xl">
            Bailar y estar
            <span className="block text-purple-600">
              en forma no conoce edad.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-xl leading-9 text-purple-950/75">
            Actividades especialmente diseñadas para personas mayores de 55 años,
            con precios especiales, ambiente cercano y clases pensadas para
            disfrutar, moverse y sentirse bien.
          </p>

          <div className="mt-10 rounded-3xl bg-white p-7 shadow-2xl">
            <p className="text-2xl font-extrabold text-purple-700">
              ✨ Movimiento, música y bienestar
            </p>
            <p className="mt-3 text-lg leading-8 text-purple-950/70">
              Una sección pensada para mantenerse activo, socializar y disfrutar
              cada semana en Siete Notas.
            </p>

            <a
              href="#contacto"
              className="mt-6 inline-flex rounded-2xl bg-purple-600 px-8 py-4 text-lg font-bold text-white shadow-xl transition hover:scale-105 hover:bg-purple-700"
            >
              Consultar plazas
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {actividades.map((actividad) => (
            <div
              key={actividad.nombre}
              className={`relative overflow-hidden rounded-3xl bg-white p-6 shadow-xl transition hover:-translate-y-2 hover:shadow-2xl ${
                actividad.destacado ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="absolute -right-5 -top-6 text-8xl opacity-10">
                {actividad.icono}
              </div>

              <div className="relative z-10">
                <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-2xl bg-purple-100 text-3xl">
                  {actividad.icono}
                </div>

                <h3 className="text-2xl font-extrabold text-purple-950">
                  {actividad.nombre}
                </h3>

                {actividad.extra && (
                  <p className="mt-2 inline-flex rounded-full bg-fuchsia-100 px-4 py-1 text-sm font-bold text-fuchsia-700">
                    {actividad.extra}
                  </p>
                )}

                <p className="mt-4 font-bold text-purple-600">
                  {actividad.dias}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                  {actividad.horarios.map((horario) => (
                    <span
                      key={horario}
                      className="rounded-full bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700"
                    >
                      {horario}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default SeniorSection