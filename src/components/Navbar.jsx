import { Link } from 'react-router-dom'

const Navbar = () => {
  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-1 text-center text-[11px] sm:text-sm">
          📍 C. Torrubia, 4 · 28911 Leganés, Madrid
        </div>
      </div>

      <header className="fixed left-0 top-[24px] z-40 w-full border-b border-black/10 bg-white/95 backdrop-blur-md sm:top-[28px]">
        <div className="mx-auto flex max-w-[1700px] items-center justify-between px-8 py-4">
          <Link to="/" className="flex shrink-0 items-center">
            <div className="leading-tight">
              <span className="block text-2xl font-extrabold tracking-[0.18em] text-black">
                SIETE NOTAS
              </span>
              <span className="block text-sm font-medium tracking-[0.08em] text-neutral-600">
                Escuela de Danza y Música
              </span>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
            <Link
              to="/danza-urbana"
              className="text-base font-medium text-black transition hover:text-neutral-600"
            >
              Danza Urbana
            </Link>

            <Link
              to="/musica"
              className="text-base font-medium text-black transition hover:text-neutral-600"
            >
              Música
            </Link>

            <Link
              to="/senior"
              className="text-base font-medium text-black transition hover:text-neutral-600"
            >
              Senior
            </Link>

            <Link
              to="/gym"
              className="text-base font-medium text-black transition hover:text-neutral-600"
            >
              Gym
            </Link>

            <Link
              to="/flamenco-danza-espanola-sevillanas"
              className="text-base font-medium text-black transition hover:text-neutral-600"
            >
              Flamenco
            </Link>

            <Link
              to="/otros-servicios"
              className="text-base font-medium text-black transition hover:text-neutral-600"
            >
              Eventos
            </Link>
          </nav>

          <a
            href="tel:918281988"
            className="rounded-lg bg-black px-5 py-3 text-sm font-bold !text-white transition hover:bg-neutral-800"
          >
            📞 918 28 19 88
          </a>
        </div>
      </header>
    </>
  )
}

export default Navbar