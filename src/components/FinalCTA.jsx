const FinalCTA = () => {
  return (
    <section className="px-6 py-28 bg-white">
      <div
        className="mx-auto max-w-7xl overflow-hidden rounded-[48px] relative"
        style={{
          backgroundImage: "url('/DSC_5361.webp')",
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          minHeight: '650px'
        }}
      >
        <div className="absolute inset-0 bg-black/65"></div>

        <div className="relative z-10 flex h-full flex-col justify-center p-10 md:p-20">

          <span className="mb-5 inline-flex w-fit rounded-full border border-white px-4 py-2 text-xs font-black tracking-[0.18em] text-white">
            PLAZAS ABIERTAS
          </span>

          <h2 className="max-w-4xl text-5xl font-black leading-[0.9] tracking-[-0.06em] text-white md:text-7xl">
            Empieza a disfrutar
            <br />
            de la música y la danza
          </h2>

          <p className="mt-8 max-w-2xl text-lg leading-9 text-white/85">
            Tanto si quieres aprender desde cero como perfeccionar tus
            habilidades, en Siete Notas encontrarás un espacio donde crecer,
            disfrutar y compartir tu pasión.
          </p>

          <div className="mt-10 flex flex-col gap-4 sm:flex-row">

            <a
              href="https://wa.me/34662128572"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center rounded-full bg-white px-8 py-4 font-black text-black transition hover:bg-neutral-200"
            >
              Pedir información
            </a>

            <a
  href="tel:918281988"
  className="inline-flex items-center justify-center gap-3 rounded-full border-2 border-white bg-black px-8 py-4 font-black shadow-xl transition hover:scale-105 hover:bg-neutral-900"
>
  <span>📞</span>
  <span className="text-white">Llamar ahora</span>
</a>
          </div>

        </div>
      </div>
    </section>
  )
}

export default FinalCTA