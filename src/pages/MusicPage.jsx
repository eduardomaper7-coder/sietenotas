const MusicPage = () => {
  return (
    <>
      <style>{`
        .music-page {
          background: #fff;
          color: #000;
          padding: 115px 20px 90px;
          font-family: Inter, system-ui, sans-serif;
          overflow: hidden;
        }

        .music-hero {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: center;
        }

        .music-eyebrow {
          display: inline-flex;
          border: 1px solid #000;
          border-radius: 999px;
          padding: 8px 14px;
          font-size: 0.75rem;
          font-weight: 900;
          letter-spacing: 0.16em;
          text-transform: uppercase;
          margin-bottom: 24px;
        }

        .music-title {
          font-size: clamp(4rem, 8vw, 8.5rem);
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-weight: 950;
          margin: 0 0 24px;
        }

        .music-lead {
          font-size: 1.12rem;
          line-height: 1.75;
          max-width: 630px;
          margin-bottom: 30px;
          color: #222;
        }

        .music-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .music-cta,
        .music-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 16px 26px;
          text-decoration: none;
          font-weight: 900;
        }

        .music-cta {
          background: #000;
          color: #fff;
        }

        .music-secondary {
          border: 1px solid #000;
          color: #000;
        }

        .music-visual {
          min-height: 590px;
          border-radius: 38px;
          background:
            linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)),
            url('/DSC_5303.webp');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: end;
          padding: 34px;
          color: #fff;
        }

        .music-visual-card {
          max-width: 430px;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 28px;
          padding: 26px;
          backdrop-filter: blur(12px);
          background: rgba(0,0,0,.35);
        }

        .music-visual-card span {
          display: block;
          font-size: 3rem;
          font-weight: 950;
          line-height: 1;
          margin-bottom: 12px;
        }

        .music-visual-card p {
          margin: 0;
          line-height: 1.7;
        }

        .music-strip {
          max-width: 1320px;
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #000;
          border-radius: 30px;
          overflow: hidden;
        }

        .music-strip div {
          padding: 26px;
          border-right: 1px solid #000;
        }

        .music-strip div:last-child {
          border-right: 0;
        }

        .music-strip span {
          display: block;
          font-size: 2.5rem;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .music-strip p {
          margin: 0;
          font-weight: 800;
        }

        .music-section {
          max-width: 1320px;
          margin: 95px auto 0;
        }

        .music-section h2 {
          font-size: clamp(2.4rem, 5vw, 4.6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 950;
          margin-bottom: 34px;
        }

        .music-about {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 64px;
          align-items: center;
        }

        .music-about p {
          font-size: 1.08rem;
          line-height: 1.9;
          color: #222;
          margin-bottom: 24px;
        }

        .music-about-img {
          width: 100%;
          height: 540px;
          border-radius: 34px;
          background:
            linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.18)),
            url('/DSC_5301.webp');
          background-size: cover;
          background-position: center;
        }

        .music-instruments {
          display: grid;
          grid-template-columns: 0.9fr 1.1fr;
          gap: 28px;
          align-items: stretch;
        }

        .music-instruments-img {
          min-height: 520px;
          border-radius: 34px;
          background:
            linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.18)),
            url('/DSC_5299.webp');
          background-size: cover;
          background-position: center;
        }

        .music-instruments-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 16px;
        }

        .music-instruments-grid article {
          border: 1px solid #000;
          border-radius: 26px;
          padding: 24px;
        }

        .music-instruments-grid span {
          display: block;
          font-size: 2rem;
          margin-bottom: 12px;
        }

        .music-instruments-grid h3 {
          margin: 0 0 10px;
          font-size: 1.25rem;
          font-weight: 950;
        }

        .music-instruments-grid p {
          margin: 0;
          line-height: 1.7;
          color: #222;
        }

        .music-schedules {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .music-schedules article {
          border: 1px solid #000;
          border-radius: 26px;
          padding: 24px;
          background: #fff;
          transition: 0.25s ease;
        }

        .music-schedules article:hover {
          background: #000;
          color: #fff;
          transform: translateY(-6px);
        }

        .music-schedules span {
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.75rem;
          font-weight: 900;
          opacity: 0.65;
          margin-bottom: 10px;
        }

        .music-schedules strong {
          display: block;
          margin-bottom: 12px;
          line-height: 1.35;
        }

        .music-schedules p {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 950;
        }

        .music-note {
          margin-top: 18px;
          border-radius: 24px;
          background: #f4f4f4;
          padding: 24px;
          font-weight: 800;
          line-height: 1.7;
        }

        .music-format {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 64px;
          align-items: center;
        }

        .music-format-card {
          background: #000;
          color: #fff;
          border-radius: 34px;
          padding: clamp(32px, 5vw, 58px);
        }

        .music-format-card h3 {
          font-size: clamp(2rem, 4vw, 3.8rem);
          line-height: .95;
          letter-spacing: -0.05em;
          margin: 0 0 24px;
          font-weight: 950;
        }

        .music-format-card p {
          font-size: 1.08rem;
          line-height: 1.8;
          color: #f1f1f1;
          margin-bottom: 20px;
        }

        .music-format-img {
          width: 100%;
          height: 520px;
          border-radius: 34px;
          background:
            linear-gradient(rgba(0,0,0,.12), rgba(0,0,0,.12)),
            url('/DSC_5294.webp');
          background-size: cover;
          background-position: center;
        }

        .music-black-block {
          position: relative;
          max-width: 1320px;
          margin: 100px auto 0;
          min-height: 520px;
          border-radius: 40px;
          overflow: hidden;
          background:
            linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)),
            url('/DSC_5300.webp');
          background-size: cover;
          background-position: center;
        }

        .music-black-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: clamp(40px, 7vw, 82px);
          color: #fff;
        }

        .music-black-content h2 {
          font-size: clamp(2.8rem, 5vw, 5.5rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
          margin: 0 0 26px;
          font-weight: 950;
        }

        .music-black-content p {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: #f1f1f1;
        }

        .music-black-content a {
          display: inline-flex;
          border-radius: 999px;
          background: #fff;
          color: #000;
          padding: 16px 28px;
          text-decoration: none;
          font-weight: 900;
        }

        @media (max-width: 1080px) {
          .music-schedules {
            grid-template-columns: repeat(2, 1fr);
          }

          .music-instruments {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 980px) {
          .music-hero,
          .music-about,
          .music-format {
            grid-template-columns: 1fr;
          }

          .music-strip {
            grid-template-columns: 1fr 1fr;
          }

          .music-visual,
          .music-about-img,
          .music-format-img,
          .music-instruments-img {
            height: 420px;
            min-height: 420px;
          }
        }

        @media (max-width: 620px) {
          .music-page {
            padding-top: 145px;
          }

          .music-strip,
          .music-schedules,
          .music-instruments-grid {
            grid-template-columns: 1fr;
          }

          .music-title {
            font-size: 4rem;
          }

          .music-visual,
          .music-about-img,
          .music-format-img,
          .music-instruments-img {
            height: 320px;
            min-height: 320px;
          }

          .music-black-block {
            min-height: 560px;
          }
        }
      `}</style>

      <main className="music-page">
        <section className="music-hero">
          <div>
            <p className="music-eyebrow">Siete Notas · Leganés · Madrid</p>

            <h1 className="music-title">Música</h1>

            <p className="music-lead">
              Clases de música en Leganés para niños, jóvenes y adultos.
              En Siete Notas ofrecemos formación musical personalizada en batería,
              guitarra, guitarra eléctrica, piano, violín y canto, con clases
              individuales o grupales adaptadas al ritmo de cada alumno.
            </p>

            <div className="music-actions">
              <a href="tel:918281988" className="music-cta">
                Llamar ahora
              </a>

              <a href="#horarios-musica" className="music-secondary">
                Ver horarios
              </a>
            </div>
          </div>

          <div className="music-visual">
            <div className="music-visual-card">
              <span>♪</span>
              <p>
                Aprende técnica, ritmo, oído musical y expresión artística
                en un entorno cercano, creativo y motivador.
              </p>
            </div>
          </div>
        </section>

        <section className="music-strip">
          <div><span>01</span><p>Clases individuales</p></div>
          <div><span>02</span><p>Clases grupales</p></div>
          <div><span>03</span><p>Franjas de 45 min o 1h</p></div>
          <div><span>04</span><p>Instrumentos y canto</p></div>
        </section>

        <section className="music-section">
          <h2>Aprender música a tu ritmo</h2>

          <div className="music-about">
            <div>
              <p>
                La música ayuda a desarrollar concentración, memoria, sensibilidad,
                coordinación y creatividad. En nuestras clases trabajamos tanto la
                técnica como la confianza para que cada alumno disfrute aprendiendo.
              </p>

              <p>
                En Siete Notas adaptamos la formación musical al nivel, edad y objetivo
                de cada persona. Puedes empezar desde cero, reforzar conocimientos o
                avanzar con un instrumento de forma más personalizada.
              </p>

              <p>
                Las clases pueden ser grupales o individuales, con franjas de 1 hora
                o 45 minutos según disponibilidad y modalidad.
              </p>
            </div>

            <div className="music-about-img" aria-label="Clase de música en Siete Notas"></div>
          </div>
        </section>

        <section className="music-section">
          <h2>Instrumentos disponibles</h2>

          <div className="music-instruments">
            <div className="music-instruments-img" aria-label="Instrumentos musicales en Siete Notas"></div>

            <div className="music-instruments-grid">
              <article><span>🥁</span><h3>Batería</h3><p>Ritmo, coordinación, independencia y técnica.</p></article>
              <article><span>🎸</span><h3>Guitarra</h3><p>Guitarra clásica, acompañamiento y guitarra eléctrica.</p></article>
              <article><span>🎹</span><h3>Piano</h3><p>Lectura, técnica, armonía y expresión musical.</p></article>
              <article><span>🎤</span><h3>Canto</h3><p>Voz, respiración, afinación, interpretación y confianza.</p></article>
            </div>
          </div>
        </section>

        <section className="music-section" id="horarios-musica">
          <h2>Horarios de Música</h2>

          <div className="music-schedules">
            <article>
              <span>Batería</span>
              <strong>Lunes a viernes</strong>
              <p>10:00 - 21:30</p>
            </article>

            <article>
              <span>Guitarra</span>
              <strong>Lunes a miércoles</strong>
              <p>16:30 - 21:30</p>
            </article>

            <article>
              <span>Piano</span>
              <strong>Lunes a viernes</strong>
              <p>16:30 - 21:30</p>
            </article>

            <article>
              <span>Violín</span>
              <strong>Lunes a viernes</strong>
              <p>16:30 - 21:30</p>
            </article>

            <article>
              <span>Canto</span>
              <strong>Lunes y jueves</strong>
              <p>16:30 - 21:30</p>
            </article>
          </div>

          <div className="music-note">
            Modalidad: clases grupales o individuales. Franjas disponibles de 1 hora o 45 minutos.
          </div>
        </section>

        <section className="music-section">
          <div className="music-format">
            <div className="music-format-card">
              <h3>Clases individuales o grupales</h3>

              <p>
                Puedes elegir entre clases más personalizadas o una experiencia grupal
                donde aprender, compartir y evolucionar junto a otros alumnos.
              </p>

              <p>
                Adaptamos el formato al instrumento, la edad, el nivel y el objetivo
                de cada persona.
              </p>
            </div>

            <div className="music-format-img" aria-label="Clase individual o grupal de música"></div>
          </div>
        </section>

        <section className="music-black-block">
          <div className="music-black-content">
            <h2>Empieza con tu instrumento</h2>

            <p>
              Si buscas clases de música en Leganés, en Siete Notas te ayudamos
              a encontrar el instrumento, horario y formato de clase que mejor se
              adapta a ti.
            </p>

            <a href="tel:918281988">
              Solicitar información
            </a>
          </div>
        </section>
      </main>
    </>
  )
}

export default MusicPage