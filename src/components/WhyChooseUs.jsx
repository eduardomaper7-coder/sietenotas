const WhyChooseUs = () => {
  const reasons = [
    {
      number: '01',
      title: 'Todas las edades',
      text:
        'Contamos con actividades para niños, jóvenes, adultos y senior, adaptando cada clase al nivel y objetivos del alumno.',
    },
    {
      number: '02',
      title: 'Profesores especializados',
      text:
        'Nuestro equipo está formado por profesionales con experiencia en danza, música y actividad física.',
    },
    {
      number: '03',
      title: 'Ambiente familiar',
      text:
        'Trabajamos en grupos reducidos y con atención cercana para que cada alumno evolucione con confianza.',
    },
    {
      number: '04',
      title: 'Ubicación en Leganés',
      text:
        'Un centro cómodo, accesible y preparado para desarrollar todas nuestras actividades.',
    },
  ]

  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">
          <span className="mb-5 inline-flex rounded-full border border-black px-4 py-2 text-xs font-black tracking-[0.18em]">
            POR QUÉ ELEGIRNOS
          </span>

          <h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Más que una escuela
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-700">
            En Siete Notas creemos que aprender es mucho más que asistir a una clase.
            Queremos que cada alumno disfrute, evolucione y encuentre un espacio
            donde expresarse y crecer.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-2">

          {reasons.map((item) => (
            <article
              key={item.number}
              className="rounded-[36px] border border-black p-10 transition hover:bg-black hover:text-white"
            >
              <span className="mb-5 block text-5xl font-black">
                {item.number}
              </span>

              <h3 className="mb-5 text-3xl font-black">
                {item.title}
              </h3>

              <p className="text-lg leading-9 opacity-80">
                {item.text}
              </p>
            </article>
          ))}

        </div>

        <div className="mt-20 grid items-center gap-14 lg:grid-cols-2">

          <img
            src="/DSC_5270.webp"
            alt="Escuela de danza y música en Leganés"
            className="h-[600px] w-full rounded-[40px] object-cover"
          />

          <div>

            <span className="mb-5 inline-flex rounded-full border border-black px-4 py-2 text-xs font-black tracking-[0.18em]">
              SIETE NOTAS
            </span>

            <h3 className="mb-8 text-5xl font-black tracking-[-0.05em]">
              Un espacio para aprender y disfrutar
            </h3>

            <p className="mb-6 text-lg leading-9 text-neutral-700">
              Nuestra escuela reúne música, danza, bienestar y actividades para
              todas las edades en un entorno profesional y cercano.
            </p>

            <p className="mb-6 text-lg leading-9 text-neutral-700">
              Cada año acompañamos a numerosos alumnos en su desarrollo artístico,
              físico y personal, creando una comunidad donde aprender resulta
              divertido y motivador.
            </p>

            <p className="text-lg leading-9 text-neutral-700">
              Nuestro objetivo es ayudarte a descubrir nuevas habilidades,
              disfrutar del proceso y sentirte parte de algo especial.
            </p>

          </div>

        </div>

      </div>
    </section>
  )
}

export default WhyChooseUs