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
        backgroundImage: "url('/DSC_5270.webp')",
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        backgroundAttachment: isMobile ? 'scroll' : 'fixed',
      }}
    >
      <div className="absolute inset-0 bg-black/55"></div>
      <div className="absolute inset-0 bg-gradient-to-b from-black/20 via-black/45 to-black/90"></div>

      <div className="relative z-10 mx-auto flex max-w-6xl flex-col items-center px-4 pb-12 pt-28 text-center sm:pb-16 sm:pt-32">
        <div className="mb-5 flex flex-col items-center sm:mb-7">
          <span className="text-sm font-bold tracking-[0.28em] text-white/80 sm:text-lg">
            ESCUELA DE DANZA Y MÚSICA EN LEGANÉS
          </span>

          <span className="mt-3 text-3xl font-black tracking-[0.18em] text-white sm:text-4xl md:text-5xl">
            SIETE NOTAS
          </span>
        </div>

        <h1 className="max-w-5xl text-4xl font-black leading-[0.95] tracking-[-0.06em] text-white sm:text-6xl md:text-8xl">
          Aprende música, baile y mucho más en Leganés
        </h1>

        <p className="mt-7 hidden max-w-3xl text-lg leading-9 text-white/90 sm:block sm:text-xl">
          En Siete Notas disfrutamos enseñando danza, música y actividades para
          todas las edades, con clases dinámicas, atención cercana y un ambiente
          ideal para aprender, expresarte y pasarlo bien.
        </p>

        <div className="mt-6 flex flex-col gap-2 sm:mt-8 sm:flex-row sm:gap-3">
          <span className="rounded-full bg-white px-5 py-2 text-sm font-black text-black shadow-lg sm:px-6 sm:py-3 sm:text-base">
            Danza · Música · Senior · Gym
          </span>

          <span className="rounded-full border border-white bg-black/40 px-5 py-2 text-sm font-black text-white backdrop-blur-md sm:px-6 sm:py-3 sm:text-base">
            Escuela en Leganés
          </span>
        </div>

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
            className="flex w-full items-center justify-center whitespace-nowrap rounded-xl bg-white px-6 py-4 text-base font-extrabold text-black shadow-xl transition hover:bg-neutral-100 sm:w-auto sm:px-8 sm:text-lg"
            aria-label="Llamar a Siete Notas"
          >
            Llamar ahora
          </a>
        </div>

        <a
  href="#servicios"
  className="mt-12 hidden flex-col items-center gap-3 text-sm font-black uppercase tracking-[0.25em] drop-shadow-lg transition hover:opacity-80 sm:inline-flex"
  style={{ color: '#ffffff' }}
  aria-label="Ver actividades de Siete Notas"
>
  <span style={{ color: '#ffffff' }}>
    Ver actividades
  </span>

  <span
    className="flex h-12 w-12 items-center justify-center rounded-full border border-white/60 bg-white/10 text-2xl backdrop-blur-md transition hover:bg-white hover:text-black"
    style={{ color: '#ffffff' }}
  >
    ↓
  </span>
</a>
      </div>

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