const Navbar = () => {
  return (
    <>
      {/* Barra superior */}
      <div className="fixed top-0 z-50 w-full bg-purple-700 text-white">
        <div className="mx-auto flex max-w-7xl items-center justify-center px-3 py-1 text-center text-[11px] sm:text-sm">
          📍 Siete Notas · Leganés
        </div>
      </div>

      <header className="fixed left-0 top-[24px] z-40 w-full border-b border-black/10 bg-white/95 backdrop-blur-md sm:top-[28px]">
        <div className="mx-auto flex max-w-[1700px] items-center justify-between px-8 py-4">

          {/* Logo */}
          <a href="#inicio" className="flex shrink-0 items-center">
            <div className="leading-tight">
              <span className="block text-2xl font-extrabold tracking-[0.18em] text-purple-700">
                SIETE NOTAS
              </span>
              <span className="block text-sm font-medium tracking-[0.08em] text-purple-600">
                Escuela de Baile y Música
              </span>
            </div>
          </a>

          {/* Menú */}
          <nav className="hidden flex-1 items-center justify-center gap-7 xl:flex">
            <a href="/#danza" className="whitespace-nowrap text-base font-medium text-black hover:text-purple-600">
              Danza
            </a>
            <a href="/#musica" className="whitespace-nowrap text-base font-medium text-black hover:text-purple-600">
              Música
            </a>
            <a href="/#senior" className="whitespace-nowrap text-base font-medium text-black hover:text-purple-600">
              Senior
            </a>
            <a href="/#gym" className="whitespace-nowrap text-base font-medium text-black hover:text-purple-600">
              Gym
            </a>
            <a href="/#deporte-terapeutico" className="whitespace-nowrap text-base font-medium text-black hover:text-purple-600">
              Deporte terapéutico
            </a>
            <a href="/#belleza" className="whitespace-nowrap text-base font-medium text-black hover:text-purple-600">
              Belleza y Bienestar
            </a>
            <a href="/#salas" className="whitespace-nowrap text-base font-medium text-black hover:text-purple-600">
              Alquiler de Salas
            </a>
            <a href="/#eventos" className="whitespace-nowrap text-base font-medium text-black hover:text-purple-600">
              Eventos
            </a>
            <a href="/#contacto" className="whitespace-nowrap text-base font-medium text-black hover:text-purple-600">
              Contacto
            </a>
          </nav>

          {/* Botón llamar */}
          <a
            href="tel:918281988"
            className="shrink-0 whitespace-nowrap rounded-lg bg-purple-600 px-5 py-3 text-sm font-bold text-white transition hover:bg-purple-700"
          >
            📞 918 28 19 88
          </a>

        </div>
      </header>
    </>
  )
}

export default Navbar