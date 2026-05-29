const MusicaSection = () => {
  const clases = [
    {
      nombre: 'Piano y Teclado',
      texto: 'Clases grupales y particulares',
      icono: '🎹',
      destacado: true,
    },
    {
      nombre: 'Guitarra',
      texto: 'Clases grupales y particulares',
      icono: '🎸',
    },
    {
      nombre: 'Violín',
      texto: 'Clases grupales y particulares',
      icono: '🎻',
    },
    {
      nombre: 'Canto',
      texto: 'Clases grupales y particulares',
      icono: '🎤',
    },
    {
      nombre: 'Batería',
      texto: 'Clases grupales y particulares',
      icono: '🥁',
    },
    {
      nombre: 'Saxofón y Clarinete',
      texto: 'Clases suspendidas temporalmente',
      icono: '🎷',
    },
  ]

  return (
    <section
      id="musica"
      className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-violet-950 via-purple-900 to-indigo-900"
    >
      <div className="absolute left-10 top-20 text-8xl text-white/10">♪</div>
      <div className="absolute right-16 top-32 text-9xl text-white/10">♫</div>
      <div className="absolute bottom-16 left-1/4 text-8xl text-white/10">♬</div>

      <div className="absolute -left-40 bottom-0 h-[500px] w-[500px] rounded-full bg-fuchsia-400/20 blur-3xl"></div>
      <div className="absolute -right-40 top-20 h-[520px] w-[520px] rounded-full bg-blue-400/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-14 px-6 py-24 lg:grid-cols-[0.9fr_1.1fr]">
        
        <div className="flex flex-col justify-center">
          <span className="mb-5 inline-flex w-fit rounded-full border border-white/20 bg-white/10 px-5 py-2 text-sm font-bold tracking-widest text-white backdrop-blur-md">
            MÚSICA EN SIETE NOTAS
          </span>

          <h2 className="text-5xl font-extrabold leading-tight text-white md:text-7xl">
            Aprende a tocar,
            <span className="block text-fuchsia-300">
              sentir y crear.
            </span>
          </h2>

          <p className="mt-8 max-w-xl text-lg leading-9 text-white/85 md:text-xl">
            Todas las clases tienen una duración de una hora. Además, en Piano y
            Teclado ofrecemos clases particulares de 45 minutos, más económicas
            y flexibles con cada alumno.
          </p>

          <div className="mt-10 rounded-3xl border border-white/15 bg-white/10 p-6 backdrop-blur-xl">
            <p className="text-2xl font-extrabold text-white">
              🎼 Consulta los horarios disponibles
            </p>
            <p className="mt-3 text-white/80">
              Te ayudamos a encontrar la clase que mejor encaje contigo.
            </p>

            <a
              href="#contacto"
              className="mt-6 inline-flex rounded-2xl bg-fuchsia-500 px-8 py-4 text-lg font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-fuchsia-600"
            >
              Consultar horarios
            </a>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {clases.map((clase) => (
            <div
              key={clase.nombre}
              className={`group relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-xl transition hover:-translate-y-2 hover:bg-white/15 ${
                clase.destacado ? 'sm:col-span-2' : ''
              }`}
            >
              <div className="absolute -right-6 -top-6 text-8xl opacity-10 transition group-hover:scale-125">
                {clase.icono}
              </div>

              <div className="relative z-10">
                <div className="mb-5 flex h-14 w-14 items-center justify-center rounded-2xl bg-white text-3xl shadow-lg">
                  {clase.icono}
                </div>

                <h3 className="text-2xl font-extrabold text-white">
                  {clase.nombre}
                </h3>

                <p className="mt-3 text-base font-medium text-white/80">
                  {clase.texto}
                </p>

                {clase.nombre === 'Piano y Teclado' && (
                  <p className="mt-4 rounded-2xl bg-fuchsia-500/25 px-4 py-3 text-sm font-semibold text-white">
                    Opción de clases particulares de 45 minutos.
                  </p>
                )}

                {clase.nombre === 'Saxofón y Clarinete' && (
                  <p className="mt-4 rounded-2xl bg-white/10 px-4 py-3 text-sm font-semibold text-white/85">
                    Debido a la situación sanitaria, las clases de instrumentos
                    de viento se encuentran suspendidas. ¡Esperamos volver
                    pronto!
                  </p>
                )}
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  )
}

export default MusicaSection