import { Link } from 'react-router-dom'

const AboutHome = () => {
  return (
    <section className="bg-white px-6 py-24">
      <div className="mx-auto max-w-7xl">
        <div className="grid items-center gap-16 lg:grid-cols-2">
          <div>
            <span className="mb-6 inline-flex rounded-full border border-black px-4 py-2 text-xs font-black tracking-[0.18em]">
              SOBRE SIETE NOTAS
            </span>

            <h2 className="mb-8 text-5xl font-black leading-[0.9] tracking-[-0.06em] md:text-7xl">
              Un espacio para aprender, crear y disfrutar.
            </h2>

            <p className="mb-6 text-lg leading-9 text-neutral-700">
              Siete Notas es una escuela de danza, música y actividades
              situada en Leganés donde niños, jóvenes y adultos pueden
              desarrollar su talento en un ambiente cercano, creativo y
              profesional.
            </p>

            <p className="mb-10 text-lg leading-9 text-neutral-700">
              Ofrecemos clases de danza urbana, flamenco, música, actividades
              senior, gym y otras propuestas enfocadas al bienestar, el
              aprendizaje y la diversión.
            </p>

            <Link
              to="/#encuentra-tu-actividad"
              className="inline-flex rounded-full bg-black px-8 py-4 font-bold !text-white transition hover:bg-neutral-800"
            >
              Descubrir actividades
            </Link>
          </div>

          <div className="relative">
            <picture>
              <source media="(max-width: 767px)" srcSet="/DSC_5309.webp" />
              <img
                src="/DSC_5303.webp"
                alt="Escuela Siete Notas en Leganés"
                className="h-[420px] w-full rounded-[28px] object-cover md:h-[650px] md:rounded-[36px]"
              />
            </picture>

            <div className="absolute -bottom-8 -left-8 hidden rounded-[32px] bg-black p-8 text-white shadow-2xl lg:block">
              <span className="block text-5xl font-black">+20</span>

              <span className="mt-2 block text-sm font-bold uppercase tracking-[0.18em]">
                Años enseñando
              </span>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default AboutHome