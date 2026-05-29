const ReviewsSection = () => {
  const reviews = [
    {
      name: 'María González',
      stars: 5,
      text: 'Una escuela increíble. Mi hija está encantada con las clases de danza urbana y el trato del profesorado es excepcional.',
      course: 'Danza Urbana',
    },
    {
      name: 'Carlos Martín',
      stars: 5,
      text: 'Muy buena atención, horarios flexibles y grandes profesionales. Las clases de guitarra superaron mis expectativas.',
      course: 'Música',
    },
    {
      name: 'Laura Fernández',
      stars: 5,
      text: 'Ambiente cercano y profesional. Llevo meses en Yoga y Pilates y he notado una mejora enorme.',
      course: 'Bienestar',
    },
    {
      name: 'Ana Ruiz',
      stars: 5,
      text: 'Un lugar perfecto para aprender, disfrutar y crecer artísticamente. Totalmente recomendable.',
      course: 'Ballet Clásico',
    },
  ]

  return (
    <section
      id="resenas"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-white via-purple-50 to-fuchsia-100 py-28"
    >
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-purple-300/20 blur-3xl"></div>
      <div className="absolute -right-32 bottom-20 h-[500px] w-[500px] rounded-full bg-pink-300/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6">
        
        {/* Cabecera */}
        <div className="mx-auto max-w-4xl text-center">
          <span className="rounded-full bg-purple-100 px-5 py-2 text-sm font-bold tracking-widest text-purple-700">
            RESEÑAS GOOGLE
          </span>

          <h2 className="mt-6 text-5xl font-extrabold text-purple-950 md:text-7xl">
            Lo que dicen
            <span className="block text-fuchsia-500">
              nuestros alumnos
            </span>
          </h2>

          <div className="mt-8 flex items-center justify-center gap-4">
            <div className="text-5xl font-extrabold text-purple-700">
              4.9
            </div>

            <div>
              <div className="text-2xl text-yellow-400">
                ★★★★★
              </div>
              <p className="text-purple-700 font-semibold">
                +120 reseñas
              </p>
            </div>
          </div>

          <p className="mt-6 text-xl leading-9 text-purple-950/70">
            Familias, alumnos y profesionales confían en Siete Notas para
            aprender, disfrutar y crecer.
          </p>
        </div>

        {/* Cards */}
        <div className="mt-20 grid gap-8 md:grid-cols-2 xl:grid-cols-4">
          {reviews.map((review) => (
            <div
              key={review.name}
              className="rounded-3xl bg-white p-8 shadow-2xl transition hover:-translate-y-2 hover:shadow-purple-200"
            >
              {/* Header reseña */}
              <div className="flex items-center gap-4">
                <div className="flex h-14 w-14 items-center justify-center rounded-full bg-purple-100 text-xl font-extrabold text-purple-700">
                  {review.name.charAt(0)}
                </div>

                <div>
                  <h3 className="font-extrabold text-purple-950">
                    {review.name}
                  </h3>
                  <p className="text-sm font-medium text-purple-500">
                    {review.course}
                  </p>
                </div>
              </div>

              {/* Estrellas */}
              <div className="mt-5 text-xl text-yellow-400">
                {'★'.repeat(review.stars)}
              </div>

              {/* Texto */}
              <p className="mt-5 leading-8 text-purple-950/75">
                “{review.text}”
              </p>

              {/* Google */}
              <div className="mt-6 flex items-center gap-2 text-sm font-semibold text-purple-500">
                <span>Google</span>
                <span>✓</span>
              </div>
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="mt-20 text-center">
          <a
            href="#contacto"
            className="inline-flex rounded-2xl bg-purple-600 px-10 py-5 text-lg font-bold text-white shadow-2xl transition hover:scale-105 hover:bg-purple-700"
          >
            Únete a Siete Notas
          </a>
        </div>
      </div>
    </section>
  )
}

export default ReviewsSection