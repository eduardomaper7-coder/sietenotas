const GymSection = () => {
  const actividades = [
    {
      nombre: 'Fit-boxing',
      icono: '🥊',
      horarios: [
        '14 a 18 años · Lunes y Miércoles 18:00 - 19:00',
        'Adultos · Martes y Jueves 20:00 - 21:00',
      ],
    },
    {
      nombre: 'Latin Fitness',
      icono: '🔥',
      horarios: ['Preguntar disponibilidad'],
    },
    {
      nombre: 'Personal Trainer',
      icono: '🏋️',
      horarios: ['Atención personalizada o en grupo'],
    },
    {
      nombre: 'GAP',
      icono: '💪',
      horarios: ['Preguntar disponibilidad'],
    },
  ]

  return (
    <section
      id="gym"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-zinc-950 via-purple-950 to-fuchsia-900 py-28"
    >
      <div className="absolute -left-40 top-20 h-[500px] w-[500px] rounded-full bg-fuchsia-500/20 blur-3xl"></div>
      <div className="absolute -right-40 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-400/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="max-w-4xl">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-bold tracking-widest text-white">
            GYM
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-white md:text-7xl">
            Entrena con ritmo,
            <span className="block text-fuchsia-300">energía y motivación.</span>
          </h2>

          <p className="mt-8 max-w-2xl text-xl leading-9 text-white/80">
            Actividades dinámicas para ponerte en forma, mejorar tu resistencia
            y disfrutar entrenando en Siete Notas.
          </p>
        </div>

        <div className="mt-16 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {actividades.map((item) => (
            <div
              key={item.nombre}
              className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15"
            >
              <div className="mb-5 text-5xl">{item.icono}</div>

              <h3 className="text-2xl font-extrabold text-white">
                {item.nombre}
              </h3>

              <div className="mt-5 space-y-3">
                {item.horarios.map((horario) => (
                  <p
                    key={horario}
                    className="rounded-xl bg-white/10 px-4 py-3 text-white/85"
                  >
                    {horario}
                  </p>
                ))}
              </div>
            </div>
          ))}
        </div>

        <div className="mt-16">
          <a
            href="#contacto"
            className="inline-flex rounded-2xl bg-fuchsia-500 px-10 py-5 text-lg font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-fuchsia-600"
          >
            Consultar disponibilidad
          </a>
        </div>
      </div>
    </section>
  )
}

export default GymSection