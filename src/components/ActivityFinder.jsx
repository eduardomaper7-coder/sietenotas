import { Link } from 'react-router-dom'

const activities = [
  {
    title: 'Me gusta bailar',
    text: 'Descubre Danza Urbana, Flamenco, Danza Española y Sevillanas.',
    link: '/danza-urbana',
  },
  {
    title: 'Quiero aprender música',
    text: 'Piano, guitarra, batería, canto y mucho más.',
    link: '/musica',
  },
  {
    title: 'Busco actividad física',
    text: 'Pilates, Zumba y actividades enfocadas al bienestar.',
    link: '/gym',
  },
  {
    title: 'Quiero mantenerme activo',
    text: 'Actividades Senior adaptadas a diferentes niveles.',
    link: '/senior',
  },
]

const ActivityFinder = () => {
  return (
    <section className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="mb-20 text-center">

          <span className="mb-5 inline-flex rounded-full border border-white px-4 py-2 text-xs font-black tracking-[0.18em]">
            ¿POR DÓNDE EMPEZAR?
          </span>

          <h2 className="text-5xl font-black tracking-[-0.06em] md:text-7xl">
            Encuentra tu actividad ideal
          </h2>

          <p className="mx-auto mt-8 max-w-3xl text-lg leading-9 text-white/70">
            Seas niño, joven o adulto, tenemos una actividad pensada para ti.
            Descubre cuál encaja mejor con tus intereses.
          </p>

        </div>

        <div className="grid gap-6 md:grid-cols-2">

          {activities.map((activity) => (
            <Link
              key={activity.title}
              to={activity.link}
              className="group rounded-[36px] border border-white/20 bg-gradient-to-br from-white/5 to-white/10 p-10 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-white/50 hover:from-white/10 hover:to-white/15"
            >
              <h3 className="mb-5 text-3xl font-black text-white">
                {activity.title}
              </h3>

              <p className="mb-8 text-lg leading-8 text-white/75">
                {activity.text}
              </p>

              <span className="inline-flex items-center gap-2 font-bold tracking-wide text-white transition group-hover:translate-x-1">
                Descubrir
                <span className="text-xl">→</span>
              </span>
            </Link>
          ))}

        </div>

      </div>
    </section>
  )
}

export default ActivityFinder