import { Link } from 'react-router-dom'

const services = [
  {
    title: 'Danza Urbana',
    image: '/DSC_5361.webp',
    link: '/danza-urbana',
  },
  {
    title: 'Música',
    image: '/DSC_5303.webp',
    link: '/musica',
  },
  {
    title: 'Senior',
    image: '/DSC_5294.webp',
    link: '/senior',
  },
  {
    title: 'Gym',
    image: '/DSC_5300.webp',
    link: '/gym',
  },
  {
    title: 'Flamenco',
    image: '/DSC_5359.webp',
    link: '/flamenco-danza-espanola-sevillanas',
  },
  {
    title: 'Otros Servicios',
    image: '/DSC_5270.webp',
    link: '/otros-servicios',
  },
]

const HomeServices = () => {
  return (
    <section
      id="servicios"
      className="bg-black px-6 py-24 text-white"
    >
      <div className="mx-auto max-w-7xl">

        <div className="mb-16 text-center">

          <span className="mb-5 inline-flex rounded-full border border-white px-4 py-2 text-xs font-black tracking-[0.18em]">
            ACTIVIDADES
          </span>

          <h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Encuentra tu actividad
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/70">
            Descubre todas las disciplinas que puedes practicar
            en Siete Notas. Música, danza, actividades senior,
            fitness y mucho más.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

          {services.map((service) => (
            <Link
              key={service.title}
              to={service.link}
              className="group relative h-[450px] overflow-hidden rounded-[36px]"
            >
              <img
                src={service.image}
                alt={service.title}
                className="absolute inset-0 h-full w-full object-cover transition duration-700 group-hover:scale-110"
              />

              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent"></div>

              <div className="absolute bottom-0 left-0 w-full p-8 text-white">

                <h3 className="mb-4 text-4xl font-black">
                  {service.title}
                </h3>

                <div className="flex items-center justify-between">

                  <span className="font-bold uppercase tracking-[0.12em]">
                    Ver información
                  </span>

                  <span className="text-3xl transition duration-300 group-hover:translate-x-2">
                    →
                  </span>

                </div>

              </div>

            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}

export default HomeServices