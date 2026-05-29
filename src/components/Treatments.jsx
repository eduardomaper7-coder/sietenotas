const DanzaSection = () => {
  const disciplinas = [
    {
      nombre: 'Ballet Clásico',
      icono: '🩰',
      horarios: [
        'Baby · Lunes 17:00 - 18:00',
        'Infantil · Lunes 18:00 - 19:00',
        'Junior · Lunes 19:00 - 20:00',
        'Adultos · Lunes 20:00 - 21:00',
      ],
    },
    {
      nombre: 'Danza Española e Iniciación Flamenco',
      icono: '💃',
      horarios: [
        'Infantil · L/X 17:30 - 18:30',
        'Junior · L/X 16:30 - 17:30',
      ],
    },
    {
      nombre: 'Flamenco',
      icono: '🔥',
      horarios: [
        'Lunes 18:30 - 19:30',
        'Miércoles 10:00 - 11:00',
      ],
      extra: 'Especialización para adultos',
    },
    {
      nombre: 'Danza Urbana',
      icono: '🎧',
      horarios: [
        'Baby · M/X/J 17:00 - 18:00',
        'Infantil · M/X/J 18:00 - 19:00',
        'Junior · M/X/J 19:00 - 20:00',
        'Adultos · M/X/J 20:00 - 21:00',
      ],
    },
    {
      nombre: 'Danza Moderna',
      icono: '✨',
      horarios: [
        'Baby · Viernes 17:00 - 18:00',
        'Infantil · Viernes 18:00 - 19:00',
        'Junior · Viernes 19:00 - 20:00',
        'Adultos · Viernes 20:00 - 21:00',
      ],
    },
    {
      nombre: 'Baile de Salón',
      icono: '🕺',
      horarios: ['Lunes y Miércoles 17:00 - 18:00'],
    },
    {
      nombre: 'Baile Latino',
      icono: '🌴',
      horarios: ['Martes y Viernes 21:00 - 22:00'],
    },
  ]

  return (
    <section
      id="danza"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-purple-800 to-fuchsia-700 py-28"
    >
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl"></div>
      <div className="absolute -right-32 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Cabecera */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-semibold tracking-widest text-white backdrop-blur-md">
            ESCUELA DE DANZA
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-white md:text-7xl">
            Vive la danza
            <span className="block text-pink-300">
              en todas sus formas
            </span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-white/85">
            Formación para todas las edades, desde iniciación hasta especialización,
            con certificación oficial y opción de competición.
          </p>
        </div>

        {/* Grid */}
        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-3">
          {disciplinas.map((item) => (
            <div
              key={item.nombre}
              className="rounded-3xl border border-white/15 bg-white/10 p-7 backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15"
            >
              <div className="mb-5 text-5xl">{item.icono}</div>

              <h3 className="text-2xl font-extrabold text-white">
                {item.nombre}
              </h3>

              <div className="mt-5 space-y-3">
                {item.horarios.map((horario, i) => (
                  <p key={i} className="rounded-xl bg-white/10 px-4 py-3 text-white/90">
                    {horario}
                  </p>
                ))}
              </div>

              {item.extra && (
                <p className="mt-5 rounded-2xl bg-pink-500/20 px-4 py-3 text-sm font-semibold text-white">
                  {item.extra}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* Bloques inferiores */}
        <div className="mt-20 grid gap-8 md:grid-cols-2">
          
          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-extrabold text-pink-300">
              Certificación
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/85">
              En Siete Notas puedes certificar tus estudios de danza, ya que somos
              Centro Examinador ACADE.
            </p>
          </div>

          <div className="rounded-3xl bg-white/10 p-8 backdrop-blur-xl">
            <h3 className="text-3xl font-extrabold text-pink-300">
              Competición
            </h3>
            <p className="mt-4 text-lg leading-8 text-white/85">
              Participa y demuestra tu evolución en campeonatos provinciales,
              nacionales e internacionales.
            </p>
          </div>

        </div>

        {/* CTA */}
        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex rounded-2xl bg-pink-500 px-10 py-5 text-lg font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-pink-600"
          >
            Consulta horarios disponibles
          </a>
        </div>

      </div>
    </section>
  )
}

export default DanzaSection