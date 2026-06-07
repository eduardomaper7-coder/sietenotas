import { useState } from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false)

  const menuItems = [
    { label: 'Danza Urbana', to: '/danza-urbana' },
    { label: 'Música', to: '/musica' },
    { label: 'Senior', to: '/senior' },
    { label: 'Gym', to: '/gym' },
    { label: 'Flamenco', to: '/flamenco-danza-espanola-sevillanas' },
    { label: 'Eventos', to: '/otros-servicios' },
  ]

  return (
    <>
      <div className="fixed top-0 z-50 w-full bg-black text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-1 text-center text-[11px] sm:text-sm">
          📍 C. Torrubia, 4 · 28911 Leganés, Madrid
        </div>
      </div>

      <header className="fixed left-0 top-[24px] z-40 w-full border-b border-black/10 bg-white/95 backdrop-blur-md sm:top-[28px]">
        <div className="mx-auto flex max-w-[1700px] items-center justify-between px-4 py-3 sm:px-8 sm:py-4">
          <Link to="/" className="flex shrink-0 items-center">
            <div className="leading-tight">
              <span className="block text-lg font-extrabold tracking-[0.12em] text-black sm:text-2xl sm:tracking-[0.18em]">
                SIETE NOTAS
              </span>
              <span className="block text-[10px] font-medium tracking-[0.05em] text-neutral-600 sm:text-sm sm:tracking-[0.08em]">
                Escuela de Danza y Música
              </span>
            </div>
          </Link>

          <nav className="hidden flex-1 items-center justify-center gap-8 xl:flex">
            {menuItems.map((item) => (
              <Link
                key={item.to}
                to={item.to}
                className="text-base font-medium text-black transition hover:text-neutral-600"
              >
                {item.label}
              </Link>
            ))}
          </nav>

          <a
            href="tel:918281988"
            className="hidden rounded-lg bg-black px-5 py-3 text-sm font-bold !text-white transition hover:bg-neutral-800 xl:inline-flex"
          >
            📞 918 28 19 88
          </a>

          <button
            type="button"
            onClick={() => setMenuOpen(!menuOpen)}
            className="flex h-10 w-10 items-center justify-center rounded-lg border border-black text-black xl:hidden"
            aria-label="Abrir menú"
            aria-expanded={menuOpen}
          >
            <span className="relative block h-4 w-5">
              <span className={`absolute left-0 top-0 h-[2px] w-5 bg-black transition ${menuOpen ? 'translate-y-[7px] rotate-45' : ''}`} />
              <span className={`absolute left-0 top-[7px] h-[2px] w-5 bg-black transition ${menuOpen ? 'opacity-0' : ''}`} />
              <span className={`absolute left-0 top-[14px] h-[2px] w-5 bg-black transition ${menuOpen ? '-translate-y-[7px] -rotate-45' : ''}`} />
            </span>
          </button>
        </div>

        {menuOpen && (
          <nav className="border-t border-black/10 bg-white px-4 py-4 xl:hidden">
            <div className="flex flex-col gap-2">
              {menuItems.map((item) => (
                <Link
                  key={item.to}
                  to={item.to}
                  onClick={() => setMenuOpen(false)}
                  className="rounded-lg px-4 py-3 text-base font-bold text-black transition hover:bg-neutral-100"
                >
                  {item.label}
                </Link>
              ))}
            </div>
          </nav>
        )}
      </header>
    </>
  )
}

export default Navbar