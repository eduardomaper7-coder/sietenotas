const Hero = () => {
  const whatsappNumber = '34662128572'
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero pedir información en Siete Notas.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const isMobile = typeof window !== 'undefined' && window.innerWidth < 768

  return (
    <section
      id="inicio"
      className="relative flex min-h-screen items-center justify-center overflow-hidden"
      style={{
        backgroundImage: "url('/hero-siete-notas-leganes.png')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-purple-900/45"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-purple-700/20 via-purple-800/35 to-purple-950/75"></div>

      <div className="relative z-10 mx-auto flex max-w-5xl flex-col items-center px-4 pb-12 pt-24 text-center sm:pb-16 sm:pt-28">
        
        {/* Título superior */}
        <div className="mb-4 flex flex-col items-center sm:mb-6">
          <span className="text-lg font-light tracking-widest text-white/80 sm:text-2xl">
            ESCUELA DE BAILE Y MÚSICA EN LEGANÉS
          </span>

          <span className="text-2xl font-extrabold tracking-wide text-white sm:text-3xl md:text-4xl">
            Siete Notas
          </span>
        </div>

        {/* H1 */}
        <h1 className="max-w-4xl text-3xl font-extrabold leading-tight text-white sm:text-5xl md:text-7xl">
          Aprende música y baile en Leganés
        </h1>

        {/* Texto (oculto en móvil) */}
        <p className="mt-6 hidden max-w-3xl text-lg leading-9 text-white/90 sm:block sm:text-xl">
          En Siete Notas disfrutamos enseñando música y baile a alumnos de todas
          las edades, con clases dinámicas, atención cercana y un ambiente ideal
          para aprender, expresarte y pasarlo bien.
        </p>

        {/* Badges */}
        <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
          <span className="rounded-full bg-white/95 px-5 py-2 text-sm font-bold text-purple-700 shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Clases de música y baile
          </span>

          <span className="rounded-full bg-white/95 px-5 py-2 text-sm font-bold text-purple-700 shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Escuela en Leganés
          </span>
        </div>

        {/* BOTONES (clave móvil) */}
        <div className="mt-8 flex w-full flex-col gap-3 sm:mt-10 sm:w-auto sm:flex-row">

          <a
            href={whatsappUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="flex w-full items-center justify-center gap-3 rounded-xl bg-green-500 px-6 py-4 text-base font-extrabold text-white shadow-xl transition hover:bg-green-600 sm:w-auto sm:px-8 sm:text-lg"
            aria-label="Pedir información por WhatsApp"
          >
            <img
              src="/whatsapp.png"
              alt=""
              className="h-6 w-6 sm:h-7 sm:w-7"
              aria-hidden="true"
            />
            Pedir información por WhatsApp
          </a>

          <a
            href="tel:918281988"
            className="flex w-full items-center justify-center rounded-xl bg-white/95 px-6 py-4 text-base font-extrabold text-purple-700 shadow-xl transition hover:bg-white sm:w-auto sm:px-8 sm:text-lg whitespace-nowrap"
            aria-label="Llamar a Siete Notas"
          >
            Llamar ahora
          </a>

        </div>

        {/* Link servicios */}
        <a
          href="#servicios"
          className="mt-5 hidden items-center rounded-xl border border-white px-8 py-4 text-lg font-semibold text-white transition hover:bg-white hover:text-purple-700 sm:inline-flex"
        >
          Ver clases
        </a>

        {/* Scroll */}
        <a
          href="#servicios"
          className="mt-12 hidden flex-col items-center text-base font-medium text-white sm:inline-flex"
        >
          Descubre más
          <span className="mt-2 text-2xl">⌄</span>
        </a>
      </div>

      {/* BOTÓN WHATSAPP FLOTANTE */}
      <a
        href={whatsappUrl}
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-5 right-5 z-50 flex h-14 w-14 items-center justify-center rounded-full bg-green-500 shadow-2xl transition hover:scale-110 hover:bg-green-600 sm:h-16 sm:w-16"
        aria-label="Escribir por WhatsApp"
      >
        <img
          src="/whatsapp.png"
          alt="WhatsApp"
          className="h-8 w-8 sm:h-10 sm:w-10"
        />
      </a>

    </section>
  )
}

export default Hero