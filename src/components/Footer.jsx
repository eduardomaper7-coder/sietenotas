const Footer = () => {
  const year = new Date().getFullYear()

  return (
    <footer className="relative overflow-hidden bg-purple-950 text-white">
      {/* Fondo decorativo */}
      <div className="absolute -left-32 top-0 h-80 w-80 rounded-full bg-fuchsia-500/10 blur-3xl"></div>
      <div className="absolute -right-32 bottom-0 h-96 w-96 rounded-full bg-purple-400/10 blur-3xl"></div>

      <div className="relative z-10 mx-auto max-w-7xl px-6 py-20">
        
        {/* Parte superior */}
        <div className="grid gap-12 md:grid-cols-4">
          
          {/* Marca */}
          <div>
            <h3 className="text-3xl font-extrabold tracking-[0.12em] text-white">
              SIETE NOTAS
            </h3>
            <p className="mt-3 text-purple-200">
              Escuela de Baile y Música en Leganés
            </p>

            <p className="mt-6 leading-8 text-white/70">
              Un espacio donde música, danza, bienestar y aprendizaje se unen
              para todas las edades.
            </p>
          </div>

          {/* Navegación */}
          <div>
            <h4 className="text-lg font-bold text-fuchsia-300">
              Secciones
            </h4>

            <ul className="mt-5 space-y-3 text-white/80">
              <li><a href="#danza" className="hover:text-white">Danza</a></li>
              <li><a href="#musica" className="hover:text-white">Música</a></li>
              <li><a href="#senior" className="hover:text-white">Senior</a></li>
              <li><a href="#gym" className="hover:text-white">Gym</a></li>
              <li><a href="#belleza" className="hover:text-white">Belleza y Bienestar</a></li>
            </ul>
          </div>

          {/* Contacto */}
          <div>
            <h4 className="text-lg font-bold text-fuchsia-300">
              Contacto
            </h4>

            <div className="mt-5 space-y-4 text-white/80">
              <p>📍 C. Torrubia, 4, 28911 Leganés, Madrid</p>
              <p>📞 918 28 19 88</p>
              <p>💬 662 12 85 72</p>
            </div>
          </div>

          {/* CTA */}
          <div>
            <h4 className="text-lg font-bold text-fuchsia-300">
              Empieza hoy
            </h4>

            <p className="mt-5 text-white/80">
              Solicita información o reserva tu plaza.
            </p>

            <div className="mt-6 flex flex-col gap-3">
              <a
                href="tel:918281988"
                className="rounded-2xl bg-white px-5 py-3 text-center font-bold text-purple-700 transition hover:scale-105"
              >
                Llamar ahora
              </a>

              <a
                href="https://wa.me/34662128572"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-2xl bg-green-500 px-5 py-3 text-center font-bold text-white transition hover:scale-105 hover:bg-green-600"
              >
                WhatsApp
              </a>
            </div>
          </div>
        </div>

        {/* Línea */}
        <div className="my-12 h-px bg-white/10"></div>

        {/* Parte inferior */}
        <div className="flex flex-col items-center justify-between gap-4 text-center text-sm text-white/60 md:flex-row">
          <p>
            © {year} Siete Notas · Todos los derechos reservados
          </p>

          <div className="flex gap-6">
            <a href="#" className="hover:text-white">
              Política de privacidad
            </a>
            <a href="#" className="hover:text-white">
              Aviso legal
            </a>
            <a href="#" className="hover:text-white">
              Cookies
            </a>
          </div>
        </div>
      </div>
    </footer>
  )
}

export default Footer