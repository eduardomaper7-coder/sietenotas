const BellezaBienestarSection = () => {
  const bloques = [
    {
      nombre: 'Estética',
      icono: '✨',
      servicios: [
        'Depilación facial',
        'Tratamiento facial',
        'Diseño de cejas',
        'Tratamiento corporal',
        'Presoterapia',
        'Ultrasonidos',
        'Cavitación',
      ],
    },
    {
      nombre: 'Bienestar',
      icono: '🌿',
      servicios: [
        'Masajes',
        'Osteopatía',
        'Nutrición',
        'Dietética',
        'Herbolario',
        'Coach emocional',
      ],
    },
    {
      nombre: 'Solarium',
      icono: '☀️',
      servicios: [
        'Sesiones individuales de 12 minutos: 4,50 €',
        'Bono de 10 sesiones: 38 €',
        'Sin cita previa',
      ],
    },
    {
      nombre: 'Depilación Láser',
      icono: '💎',
      servicios: [
        'Atención personalizada',
        'Consulta precios y disponibilidad',
      ],
    },
  ]

  return (
    <section
      id="belleza"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-pink-50 via-white to-purple-100 py-28"
    >
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-pink-300/40 blur-3xl"></div>
      <div className="absolute -right-32 bottom-20 h-[520px] w-[520px] rounded-full bg-purple-300/40 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-pink-100 px-5 py-2 text-sm font-bold tracking-widest text-pink-700">
            BELLEZA Y BIENESTAR
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-purple-950 md:text-7xl">
            Cuida tu cuerpo,
            <span className="block text-pink-500">renueva tu bienestar.</span>
          </h2>

          <p className="mt-8 text-xl leading-9 text-purple-950/70">
            Servicios de estética, salud y bienestar para sentirte bien por
            dentro y por fuera.
          </p>
        </div>

        <div className="mt-20 grid gap-6 md:grid-cols-2 xl:grid-cols-4">
          {bloques.map((item) => (
            <div
              key={item.nombre}
              className="rounded-3xl bg-white p-7 shadow-2xl transition hover:-translate-y-2"
            >
              <div className="mb-5 text-5xl">{item.icono}</div>

              <h3 className="text-2xl font-extrabold text-purple-950">
                {item.nombre}
              </h3>

              <ul className="mt-6 space-y-3">
                {item.servicios.map((servicio) => (
                  <li
                    key={servicio}
                    className="rounded-xl bg-pink-50 px-4 py-3 font-semibold text-purple-900"
                  >
                    {servicio}
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>

        <div className="mt-16 text-center">
          <a
            href="#contacto"
            className="inline-flex rounded-2xl bg-pink-500 px-10 py-5 text-lg font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-pink-600"
          >
            Reserva tu cita o pide información
          </a>
        </div>
      </div>
    </section>
  )
}

export default BellezaBienestarSection