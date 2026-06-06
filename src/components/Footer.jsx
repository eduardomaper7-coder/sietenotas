import { Link } from 'react-router-dom'

const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="bg-black text-white">
      <div className="mx-auto max-w-7xl px-6 py-20">

        <div className="grid gap-12 lg:grid-cols-4">

          {/* Marca */}
          <div>
            <h3 className="text-4xl font-black tracking-[0.18em]">
              SIETE NOTAS
            </h3>

            <p className="mt-3 text-white/60">
              Escuela de Danza y Música en Leganés
            </p>

            <p className="mt-8 leading-8 text-white/70">
              Un espacio donde niños, jóvenes y adultos pueden aprender,
              disfrutar y desarrollar su talento a través de la danza,
              la música y el bienestar.
            </p>
          </div>

          {/* Actividades */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-[0.12em]">
              Actividades
            </h4>

            <ul className="mt-6 space-y-3 text-white/70">

              <li>
                <Link
                  to="/danza-urbana"
                  className="hover:text-white"
                >
                  Danza Urbana
                </Link>
              </li>

              <li>
                <Link
                  to="/musica"
                  className="hover:text-white"
                >
                  Música
                </Link>
              </li>

              <li>
                <Link
                  to="/senior"
                  className="hover:text-white"
                >
                  Senior
                </Link>
              </li>

              <li>
                <Link
                  to="/gym"
                  className="hover:text-white"
                >
                  Gym
                </Link>
              </li>

              <li>
                <Link
                  to="/flamenco-danza-espanola-sevillanas"
                  className="hover:text-white"
                >
                  Flamenco y Sevillanas
                </Link>
              </li>

            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-[0.12em]">
              Contacto
            </h4>

            <div className="mt-6 space-y-4 text-white/70">

              <p>
                📍 C. Torrubia, 4
                <br />
                28911 Leganés, Madrid
              </p>

              <p>
                📞{' '}
                <a
                  href="tel:918281988"
                  className="hover:text-white"
                >
                  918 28 19 88
                </a>
              </p>

              <p>
                💬{' '}
                <a
                  href="https://wa.me/34662128572"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white"
                >
                  662 12 85 72
                </a>
              </p>

            </div>
          </div>

          {/* Horario */}
          <div>
            <h4 className="text-lg font-black uppercase tracking-[0.12em]">
              Horario
            </h4>

            <div className="mt-6 space-y-4 text-white/70">

              <div>
                <p className="font-bold text-white">
                  Lunes a Viernes
                </p>

                <p>
                  10:00 - 21:30
                </p>
              </div>

              <div>
                <p className="font-bold text-white">
                  Sábados
                </p>

                <p>
                  Consultar actividades
                </p>
              </div>

              <div>
                <p className="font-bold text-white">
                  Domingos
                </p>

                <p>
                  Cerrado
                </p>
              </div>

            </div>

            <a
  href="https://wa.me/34662128572"
  target="_blank"
  rel="noopener noreferrer"
  className="mt-8 inline-flex rounded-full bg-white px-6 py-3 font-bold !text-black transition hover:bg-neutral-200"
>
  Solicitar información
</a>

          </div>

        </div>

        <div className="my-12 h-px bg-white/10"></div>

        <div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between">

          <p className="text-sm text-white/50">
            © {year} Siete Notas · Escuela de Danza y Música en Leganés.
            Todos los derechos reservados.
          </p>

          <div className="flex flex-wrap gap-6 text-sm text-white/50">

            <Link
              to="/legal"
              className="hover:text-white"
            >
              Aviso Legal
            </Link>

            <Link
              to="/legal"
              className="hover:text-white"
            >
              Política de Privacidad
            </Link>

            <Link
              to="/legal"
              className="hover:text-white"
            >
              Política de Cookies
            </Link>

          </div>

        </div>

      </div>
    </footer>
  )
}

export default Footer