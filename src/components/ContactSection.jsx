const ContactoSection = () => {
  const whatsappNumber = '34662128572'
  const whatsappMessage = encodeURIComponent(
    'Hola, quiero pedir información en Siete Notas.'
  )
  const whatsappUrl = `https://wa.me/${whatsappNumber}?text=${whatsappMessage}`

  const horarios = [
    { dia: 'Lunes', horas: ['10:00–14:00', '16:30–22:00'] },
    { dia: 'Martes', horas: ['10:00–14:00', '16:30–22:00'] },
    { dia: 'Miércoles', horas: ['10:00–14:00', '16:30–22:00'] },
    { dia: 'Jueves', horas: ['10:00–14:00', '16:30–22:00'] },
    { dia: 'Viernes', horas: ['10:00–14:00', '16:30–22:00'] },
    { dia: 'Sábado', horas: ['9:00–14:00'] },
    { dia: 'Domingo', horas: ['Cerrado'] },
  ]

  return (
    <section
      id="contacto"
      className="relative min-h-screen overflow-hidden bg-gradient-to-br from-purple-950 via-purple-800 to-fuchsia-700 py-28"
    >
      <div className="absolute -left-32 top-20 h-96 w-96 rounded-full bg-pink-400/20 blur-3xl"></div>
      <div className="absolute -right-32 bottom-20 h-[500px] w-[500px] rounded-full bg-purple-300/20 blur-3xl"></div>

      <div className="relative z-10 mx-auto grid max-w-7xl grid-cols-1 gap-10 px-6 lg:grid-cols-[0.9fr_1.1fr]">
        
        <div className="rounded-3xl border border-white/15 bg-white/10 p-8 backdrop-blur-xl">
          <span className="rounded-full bg-white/10 px-5 py-2 text-sm font-bold tracking-widest text-white">
            CONTACTO
          </span>

          <h2 className="mt-6 text-5xl font-extrabold leading-tight text-white md:text-6xl">
            Ven a conocernos
          </h2>

          <p className="mt-6 text-lg leading-8 text-white/85">
            Estamos en C. Torrubia, 4, 28911 Leganés, Madrid. Contacta con
            nosotros para pedir información, consultar horarios o reservar tu
            plaza.
          </p>

          <div className="mt-8 space-y-4">
            <a
              href="tel:918281988"
              className="flex items-center justify-center rounded-2xl bg-white px-6 py-4 text-lg font-extrabold text-purple-700 shadow-xl transition hover:scale-105"
            >
              📞 Llamar al 918 28 19 88
            </a>

            <a
              href={whatsappUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-3 rounded-2xl bg-green-500 px-6 py-4 text-lg font-extrabold text-white shadow-xl transition hover:scale-105 hover:bg-green-600"
            >
              <img src="/whatsapp.png" alt="" className="h-6 w-6" />
              Escribir por WhatsApp
            </a>

            <a
  href="https://www.google.com/maps/search/?api=1&query=C.+Torrubia,+4,+28911+Leganés,+Madrid"
  target="_blank"
  rel="noopener noreferrer"
  className="flex items-center justify-center rounded-full border border-white bg-black px-8 py-5 text-lg font-extrabold text-white shadow-xl transition hover:bg-white hover:text-black"
>
  <span className="mr-2">📍</span>
  <span>Cómo llegar</span>
</a>
          </div>

          <div className="mt-10">
            <h3 className="text-2xl font-extrabold text-white">
              Horario
            </h3>

            <div className="mt-5 space-y-3">
              {horarios.map((item) => (
                <div
                  key={item.dia}
                  className="flex items-center justify-between gap-4 rounded-2xl bg-white/10 px-5 py-4 text-white"
                >
                  <span className="font-bold">{item.dia}</span>
                  <span className="text-right text-sm font-semibold text-white/85">
                    {item.horas.join(' · ')}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="overflow-hidden rounded-3xl border border-white/15 bg-white/10 p-3 shadow-2xl backdrop-blur-xl">
          <iframe
            title="Mapa Siete Notas Leganés"
            src="https://www.google.com/maps?q=C.+Torrubia,+4,+28911+Leganés,+Madrid&output=embed"
            className="h-[650px] w-full rounded-2xl"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          ></iframe>
        </div>

      </div>
    </section>
  )
}

export default ContactoSection