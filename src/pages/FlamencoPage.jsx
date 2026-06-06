const FlamencoPage = () => {
  return (
    <>
      <style>{`
        .flamenco-page {
          background: #fff;
          color: #000;
          padding: 115px 20px 90px;
          font-family: Inter, system-ui, sans-serif;
          overflow: hidden;
        }

        .flamenco-hero {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 56px;
          align-items: center;
        }

        .flamenco-eyebrow {
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

        .flamenco-title {
          font-size: clamp(3.8rem, 7.5vw, 8rem);
          line-height: 0.85;
          letter-spacing: -0.08em;
          font-weight: 950;
          margin: 0 0 24px;
        }

        .flamenco-lead {
          font-size: 1.12rem;
          line-height: 1.75;
          max-width: 640px;
          margin-bottom: 30px;
          color: #222;
        }

        .flamenco-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .flamenco-cta,
        .flamenco-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 16px 26px;
          text-decoration: none;
          font-weight: 900;
        }

        .flamenco-cta {
          background: #000;
          color: #fff;
        }

        .flamenco-secondary {
          border: 1px solid #000;
          color: #000;
        }

        .flamenco-collage {
          display: grid;
          grid-template-columns: 1.1fr 0.9fr;
          grid-template-rows: 285px 285px;
          gap: 14px;
        }

        .flamenco-collage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30px;
          display: block;
        }

        .flamenco-collage img:nth-child(1) {
          grid-row: 1 / span 2;
        }

        .flamenco-strip {
          max-width: 1320px;
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #000;
          border-radius: 30px;
          overflow: hidden;
        }

        .flamenco-strip div {
          padding: 26px;
          border-right: 1px solid #000;
        }

        .flamenco-strip div:last-child {
          border-right: 0;
        }

        .flamenco-strip span {
          display: block;
          font-size: 2.5rem;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .flamenco-strip p {
          margin: 0;
          font-weight: 800;
        }

        .flamenco-section {
          max-width: 1320px;
          margin: 95px auto 0;
        }

        .flamenco-section h2 {
          font-size: clamp(2.4rem, 5vw, 4.6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 950;
          margin-bottom: 34px;
        }

        .flamenco-about {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 64px;
          align-items: center;
        }

        .flamenco-about p {
          font-size: 1.08rem;
          line-height: 1.9;
          color: #222;
          margin-bottom: 24px;
        }

        .flamenco-about-img {
          width: 100%;
          height: 540px;
          border-radius: 34px;
          background:
            linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.18)),
            url('/flamenco-4.webp');
          background-size: cover;
          background-position: center;
        }

        .flamenco-groups {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        .flamenco-groups article {
          border: 1px solid #000;
          border-radius: 28px;
          padding: 26px;
        }

        .flamenco-groups span {
          display: block;
          font-size: 2.4rem;
          font-weight: 950;
          margin-bottom: 14px;
        }

        .flamenco-groups h3 {
          margin: 0 0 12px;
          font-size: 1.45rem;
          font-weight: 950;
        }

        .flamenco-groups p {
          margin: 0;
          line-height: 1.8;
          color: #222;
        }

        .flamenco-schedules {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .flamenco-schedules article {
          border: 1px solid #000;
          border-radius: 26px;
          padding: 24px;
          background: #fff;
          transition: 0.25s ease;
        }

        .flamenco-schedules article:hover {
          background: #000;
          color: #fff;
          transform: translateY(-6px);
        }

        .flamenco-schedules span {
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.75rem;
          font-weight: 900;
          opacity: 0.65;
          margin-bottom: 10px;
        }

        .flamenco-schedules strong {
          display: block;
          margin-bottom: 12px;
          line-height: 1.35;
        }

        .flamenco-schedules p {
          margin: 0;
          font-size: 1.2rem;
          font-weight: 950;
        }

        .flamenco-note {
          margin-top: 18px;
          border-radius: 24px;
          background: #f4f4f4;
          padding: 24px;
          font-weight: 800;
          line-height: 1.7;
        }

        .flamenco-black-block {
          position: relative;
          max-width: 1320px;
          margin: 100px auto 0;
          min-height: 520px;
          border-radius: 40px;
          overflow: hidden;
          background:
            linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)),
            url('/flamenco-5.webp');
          background-size: cover;
          background-position: center;
        }

        .flamenco-black-content {
          position: relative;
          z-index: 2;
          max-width: 780px;
          padding: clamp(40px, 7vw, 82px);
          color: #fff;
        }

        .flamenco-black-content h2 {
          font-size: clamp(2.8rem, 5vw, 5.5rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
          margin: 0 0 26px;
          font-weight: 950;
        }

        .flamenco-black-content p {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: #f1f1f1;
        }

        .flamenco-black-content a {
          display: inline-flex;
          border-radius: 999px;
          background: #fff;
          color: #000;
          padding: 16px 28px;
          text-decoration: none;
          font-weight: 900;
        }

        @media (max-width: 1080px) {
          .flamenco-schedules {
            grid-template-columns: repeat(2, 1fr);
          }

          .flamenco-groups {
            grid-template-columns: 1fr;
          }
        }

        @media (max-width: 980px) {
          .flamenco-hero,
          .flamenco-about {
            grid-template-columns: 1fr;
          }

          .flamenco-strip {
            grid-template-columns: 1fr 1fr;
          }

          .flamenco-collage {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 320px 260px;
          }

          .flamenco-collage img:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: auto;
          }

          .flamenco-about-img {
            height: 420px;
          }
        }

        @media (max-width: 620px) {
          .flamenco-page {
            padding-top: 145px;
          }

          .flamenco-strip,
          .flamenco-schedules {
            grid-template-columns: 1fr;
          }

          .flamenco-title {
            font-size: 3.7rem;
          }

          .flamenco-collage {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }

          .flamenco-collage img,
          .flamenco-collage img:nth-child(1) {
            grid-column: auto;
            grid-row: auto;
            height: 260px;
          }

          .flamenco-about-img {
            height: 320px;
          }

          .flamenco-black-block {
            min-height: 560px;
          }
        }
      `}</style>

      <main className="flamenco-page">
        <section className="flamenco-hero">
          <div>
            <p className="flamenco-eyebrow">Siete Notas · Leganés · Madrid</p>

            <h1 className="flamenco-title">
              Flamenco <br /> Danza Española
            </h1>

            <p className="flamenco-lead">
              Clases de Flamenco, Danza Española y Sevillanas en Leganés.
              En Siete Notas trabajamos técnica, compás, expresión, braceo,
              zapateado y presencia escénica con grupos para distintos niveles,
              desde iniciación hasta formación avanzada.
            </p>

            <div className="flamenco-actions">
              <a href="tel:918281988" className="flamenco-cta">
                Llamar ahora
              </a>

              <a href="#horarios-flamenco" className="flamenco-secondary">
                Ver horarios
              </a>
            </div>
          </div>

          <div className="flamenco-collage">
            <img src="/flamenco-1.webp" alt="Clase de flamenco en Siete Notas Leganés" />
            <img src="/flamenco-2.webp" alt="Danza española en Leganés" />
            <img src="/flamenco-3.webp" alt="Clase de sevillanas flamencas" />
          </div>
        </section>

        <section className="flamenco-strip">
          <div><span>01</span><p>Compás y técnica</p></div>
          <div><span>02</span><p>Expresión y presencia</p></div>
          <div><span>03</span><p>Sevillanas y flamenco</p></div>
          <div><span>04</span><p>Niveles infantil a profesional</p></div>
        </section>

        <section className="flamenco-section">
          <h2>Tradición, fuerza y expresión en movimiento</h2>

          <div className="flamenco-about">
            <div>
              <p>
                El flamenco y la danza española combinan técnica, musicalidad,
                carácter y expresión corporal. En nuestras clases se trabaja el
                compás, la coordinación, el braceo, el zapateado y la interpretación.
              </p>

              <p>
                En Siete Notas ofrecemos grupos para diferentes edades y niveles:
                infantil, juvenil, medio, avanzado, profesional, sevillanas y danza
                española. Cada clase está pensada para avanzar con seguridad y disfrutar
                del proceso.
              </p>

              <p>
                Es una disciplina ideal para mejorar la postura, la memoria corporal,
                la fuerza, la confianza escénica y la conexión con la música.
              </p>
            </div>

            <div className="flamenco-about-img" aria-label="Flamenco y danza española en Siete Notas"></div>
          </div>
        </section>

        <section className="flamenco-section">
          <h2>Modalidades disponibles</h2>

          <div className="flamenco-groups">
            <article>
              <span>01</span>
              <h3>Flamenco</h3>
              <p>
                Grupos infantil, juvenil, medio, avanzado y profesional para trabajar
                técnica, fuerza, compás y expresión.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Sevillanas</h3>
              <p>
                Sevillanas flamencas e iniciación para aprender pasos, vueltas,
                coordinación, ritmo y estilo.
              </p>
            </article>

            <article>
              <span>03</span>
              <h3>Danza Española</h3>
              <p>
                Formación los sábados para profundizar en técnica, repertorio,
                musicalidad y presencia escénica.
              </p>
            </article>
          </div>
        </section>

        <section className="flamenco-section" id="horarios-flamenco">
          <h2>Horarios Flamenco, Danza Española y Sevillanas</h2>

          <div className="flamenco-schedules">
            <article>
              <span>Danza Española</span>
              <strong>Sábados</strong>
              <p>10:00 - 14:00</p>
            </article>

            <article>
              <span>Sevillanas Flamencas</span>
              <strong>Lunes</strong>
              <p>18:30 - 19:30</p>
            </article>

            <article>
              <span>Sevillanas Inicio</span>
              <strong>Viernes</strong>
              <p>18:15 - 19:15</p>
            </article>

            <article>
              <span>Flamenco Avanzado</span>
              <strong>Lunes</strong>
              <p>19:30 - 21:00</p>
            </article>

            <article>
              <span>Flamenco Medio</span>
              <strong>Martes</strong>
              <p>17:30 - 19:30</p>
            </article>

            <article>
              <span>Flamenco Profesional</span>
              <strong>Viernes</strong>
              <p>21:00 - 22:30</p>
            </article>

            <article>
              <span>Flamenco Infantil</span>
              <strong>Jueves</strong>
              <p>17:15 - 18:15</p>
            </article>

            <article>
              <span>Flamenco Juvenil</span>
              <strong>Jueves</strong>
              <p>18:15 - 19:15</p>
            </article>

            <article>
              <span>Flamenco Fit</span>
              <strong>Martes y jueves</strong>
              <p>19:30 - 20:30</p>
            </article>

            <article>
              <span>Competición Open</span>
              <strong>Lunes</strong>
              <p>21:00 - 22:30</p>
            </article>

            <article>
              <span>Competición Senior</span>
              <strong>Miércoles</strong>
              <p>18:30 - 19:30</p>
            </article>
          </div>

          
        </section>

        <section className="flamenco-black-block">
          <div className="flamenco-black-content">
            <h2>Ven a probar una clase</h2>

            <p>
              Si buscas clases de flamenco, sevillanas o danza española en Leganés,
              en Siete Notas te ayudamos a encontrar el grupo más adecuado según
              edad, nivel y disponibilidad.
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

export default FlamencoPage