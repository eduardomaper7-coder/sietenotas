const testimonials = [
  {
    name: 'Familia de alumno',
    text:
      'Un trato cercano, profesores muy atentos y un ambiente genial para aprender. Nuestro hijo va encantado a clase.',
  },
  {
    name: 'Alumna de música',
    text:
      'Empecé desde cero y me he sentido acompañada desde el primer día. Las clases son dinámicas y muy motivadoras.',
  },
  {
    name: 'Alumna senior',
    text:
      'Las clases son muy agradables, adaptadas y divertidas. Es un espacio perfecto para moverse y sentirse bien.',
  },
]

const HomeTestimonials = () => {
  return (
    <section className="bg-white px-6 py-28">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">
          <span className="mb-5 inline-flex rounded-full border border-black px-4 py-2 text-xs font-black tracking-[0.18em]">
            OPINIONES
          </span>

          <h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Lo que dicen de Siete Notas
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-neutral-700">
            La confianza de nuestros alumnos y familias es una de las partes
            más importantes de la escuela.
          </p>
        </div>

        <div className="grid gap-6 lg:grid-cols-3">
          {testimonials.map((item) => (
            <article
              key={item.name}
              className="rounded-[36px] border border-black p-10"
            >
              <div className="mb-8 text-4xl">
                ★★★★★
              </div>

              <p className="mb-8 text-lg leading-9 text-neutral-700">
                “{item.text}”
              </p>

              <h3 className="text-xl font-black">
                {item.name}
              </h3>
            </article>
          ))}
        </div>

      </div>
    </section>
  )
}

export default HomeTestimonials