const HomeLocation = () => {
  return (
    <section className="bg-black px-6 py-28 text-white">
      <div className="mx-auto max-w-7xl">

        <div className="grid items-center gap-16 lg:grid-cols-2">

          <div>

            <span className="mb-5 inline-flex rounded-full border border-white px-4 py-2 text-xs font-black tracking-[0.18em]">
              DÓNDE ESTAMOS
            </span>

            <h2 className="mb-8 text-5xl font-black tracking-[-0.06em] md:text-7xl">
              Escuela de Danza y Música
              <br />
              en Leganés
            </h2>

            <p className="mb-8 text-lg leading-9 text-white/75">
              Nos encontramos en una ubicación cómoda y accesible en Leganés,
              donde desarrollamos todas nuestras actividades de danza, música,
              senior, gym y formación artística.
            </p>

            <div className="space-y-6">

              <div>
                <span className="mb-2 block text-sm font-black uppercase tracking-[0.18em] text-white/60">
                  Dirección
                </span>

                <p className="text-xl font-bold">
                  C. Torrubia, 4
                </p>

                <p className="text-lg text-white/75">
                  28911 Leganés, Madrid
                </p>
              </div>

              <div>
                <span className="mb-2 block text-sm font-black uppercase tracking-[0.18em] text-white/60">
                  Teléfono
                </span>

                <a
                  href="tel:918281988"
                  className="text-xl font-bold hover:underline"
                >
                  918 28 19 88
                </a>
              </div>

            </div>

            <div className="mt-10 flex flex-wrap gap-4">

              <a
  href="https://maps.google.com/?q=C.+Torrubia+4+Leganés+Madrid"
  target="_blank"
  rel="noopener noreferrer"
  className="rounded-full bg-white px-8 py-4 font-black transition hover:bg-neutral-200"
>
  <span style={{ color: '#000000' }}>
    Cómo llegar
  </span>
</a>

              <a
                href="tel:918281988"
                className="rounded-full border border-white px-8 py-4 font-black text-white transition hover:bg-white hover:text-black"
              >
                Llamar ahora
              </a>

            </div>

          </div>

          <div className="overflow-hidden rounded-[40px] border border-white/10">

            <iframe
              title="Siete Notas Leganés"
              src="https://www.google.com/maps?q=C.+Torrubia,+4,+28911+Leganés,+Madrid&output=embed"
              width="100%"
              height="650"
              style={{ border: 0 }}
              loading="lazy"
              allowFullScreen
              referrerPolicy="no-referrer-when-downgrade"
            />

          </div>

        </div>

      </div>
    </section>
  )
}

export default HomeLocation