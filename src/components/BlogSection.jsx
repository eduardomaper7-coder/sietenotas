const DeporteTerapeuticoSection = () => {
  const actividades = [
    {
      nombre: 'Pilates',
      icono: '🤸',
      dias: 'Martes y Jueves',
      horarios: ['18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00'],
    },
    {
      nombre: 'Yoga y Meditación',
      icono: '🧘',
      dias: 'Lunes y Miércoles',
      horarios: ['18:00 - 19:00', '19:00 - 20:00', '20:00 - 21:00'],
    },
    {
      nombre: 'Cuencos Tibetanos',
      icono: '🔔',
      dias: 'Actividad especial',
      horarios: ['Pospuesta temporalmente'],
      texto:
        'Organizamos conciertos de cuencos tibetanos. Una experiencia única para conectar contigo mismo.',
    },
  ]

  return (
    <section
      id="deporte-terapeutico"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-emerald-50 via-purple-50 to-fuchsia-100 py-28"
    >
      <div className="absolute -left-32 bottom-20 h-96 w-96 rounded-full bg-emerald-300/30 blur-3xl"></div>
      <div className="absolute -right-32 top-20 h-[500px] w-[500px] rounded-full bg-purple-300/30 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-bold tracking-widest text-purple-700">
            DEPORTE TERAPÉUTICO
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-purple-950 md:text-7xl">
            Movimiento consciente
            <span className="block text-purple-600">para sentirte mejor.</span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-purple-950/70">
            Actividades pensadas para mejorar tu bienestar físico y mental,
            trabajando cuerpo, respiración y equilibrio.
          </p>
        </div>

        <div className="mt-20 grid gap-8 md:grid-cols-3">
          {actividades.map((item) => (
            <div
              key={item.nombre}
              className="rounded-3xl bg-white p-8 shadow-2xl transition hover:-translate-y-2"
            >
              <div className="mb-5 text-5xl">{item.icono}</div>

              <h3 className="text-2xl font-extrabold text-purple-950">
                {item.nombre}
              </h3>

              <p className="mt-4 font-bold text-purple-600">{item.dias}</p>

              <div className="mt-5 flex flex-wrap gap-2">
                {item.horarios.map((horario) => (
                  <span
                    key={horario}
                    className="rounded-full bg-purple-50 px-4 py-2 text-sm font-bold text-purple-700"
                  >
                    {horario}
                  </span>
                ))}
              </div>

              {item.texto && (
                <p className="mt-6 text-purple-950/70 leading-7">
                  {item.texto}
                </p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}

export default DeporteTerapeuticoSection