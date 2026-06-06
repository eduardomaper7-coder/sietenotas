const UrbanDancePage = () => {
  return (
    <>
      <style>{`
        .urban-page {
          background: #fff;
          color: #000;
          padding: 115px 20px 90px;
          font-family: Inter, system-ui, sans-serif;
          overflow: hidden;
        }

        .urban-hero {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.82fr 1.18fr;
          gap: 56px;
          align-items: start;
        }

        .urban-copy {
          padding-top: 34px;
        }

        .urban-eyebrow {
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

        .urban-title {
          font-size: clamp(4rem, 8vw, 8.5rem);
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-weight: 950;
          margin: 0 0 24px;
        }

        .urban-lead {
          font-size: 1.12rem;
          line-height: 1.75;
          max-width: 610px;
          margin-bottom: 30px;
          color: #222;
        }

        .urban-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .urban-cta,
        .urban-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 16px 26px;
          text-decoration: none;
          font-weight: 900;
        }

        .urban-cta {
          background: #000;
          color: #fff;
        }

        .urban-secondary {
          border: 1px solid #000;
          color: #000;
        }

        .urban-collage {
          display: grid;
          grid-template-columns: 1.15fr 0.85fr;
          grid-template-rows: 285px 285px;
          gap: 14px;
        }

        .urban-collage img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          border-radius: 30px;
          display: block;
        }

        .urban-collage img:nth-child(1) {
          grid-row: 1 / span 2;
        }

        .urban-strip {
          max-width: 1320px;
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #000;
          border-radius: 30px;
          overflow: hidden;
        }

        .urban-strip div {
          padding: 26px;
          border-right: 1px solid #000;
        }

        .urban-strip div:last-child {
          border-right: 0;
        }

        .urban-strip span {
          display: block;
          font-size: 2.5rem;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .urban-strip p {
          margin: 0;
          font-weight: 800;
        }

        .urban-section {
          max-width: 1320px;
          margin: 95px auto 0;
        }

        .urban-section h2 {
          font-size: clamp(2.4rem, 5vw, 4.6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 950;
          margin-bottom: 34px;
        }

        .urban-about {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 64px;
          align-items: center;
        }

        .urban-about p {
          font-size: 1.08rem;
          line-height: 1.9;
          color: #222;
          margin-bottom: 24px;
        }

        .urban-about img {
          width: 100%;
          height: 540px;
          object-fit: cover;
          border-radius: 34px;
          display: block;
        }

        .urban-schedules {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .urban-schedules article {
          border: 1px solid #000;
          border-radius: 26px;
          padding: 24px;
          background: #fff;
          transition: 0.25s ease;
        }

        .urban-schedules article:hover {
          background: #000;
          color: #fff;
          transform: translateY(-6px);
        }

        .urban-schedules span {
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.75rem;
          font-weight: 900;
          opacity: 0.65;
          margin-bottom: 10px;
        }

        .urban-schedules strong {
          display: block;
          margin-bottom: 12px;
        }

        .urban-schedules p {
          margin: 0;
          font-size: 1.35rem;
          font-weight: 950;
        }

        .urban-black-block {
          position: relative;
          max-width: 1320px;
          margin: 100px auto 0;
          min-height: 520px;
          border-radius: 40px;
          overflow: hidden;
          background-image: url('/DSC_5259.webp');
          background-size: cover;
          background-position: center;
        }

        .urban-overlay {
          position: absolute;
          inset: 0;
          background: rgba(0, 0, 0, 0.58);
        }

        .urban-black-content {
          position: relative;
          z-index: 2;
          max-width: 720px;
          padding: clamp(40px, 7vw, 82px);
          color: #fff;
        }

        .urban-black-content h2 {
          font-size: clamp(2.8rem, 5vw, 5.5rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
          margin: 0 0 26px;
          font-weight: 950;
        }

        .urban-black-content p {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: #f1f1f1;
        }

        .urban-black-content a {
          display: inline-flex;
          border-radius: 999px;
          background: #fff;
          color: #000;
          padding: 16px 28px;
          text-decoration: none;
          font-weight: 900;
        }

        @media (max-width: 980px) {
          .urban-hero,
          .urban-about {
            grid-template-columns: 1fr;
          }

          .urban-strip,
          .urban-schedules {
            grid-template-columns: 1fr 1fr;
          }

          .urban-collage {
            grid-template-columns: 1fr 1fr;
            grid-template-rows: 320px 260px;
          }

          .urban-collage img:nth-child(1) {
            grid-column: 1 / span 2;
            grid-row: auto;
          }

          .urban-about img {
            height: 420px;
          }
        }

        @media (max-width: 620px) {
          .urban-page {
            padding-top: 145px;
          }

          .urban-collage {
            grid-template-columns: 1fr;
            grid-template-rows: auto;
          }

          .urban-collage img,
          .urban-collage img:nth-child(1) {
            grid-column: auto;
            grid-row: auto;
            height: 260px;
          }

          .urban-strip,
          .urban-schedules {
            grid-template-columns: 1fr;
          }

          .urban-title {
            font-size: 4rem;
          }

          .urban-about img {
            height: 320px;
          }

          .urban-black-block {
            min-height: 560px;
          }
        }
      `}</style>

      <main className="urban-page">
        <section className="urban-hero">
          <div className="urban-copy">
            <p className="urban-eyebrow">Siete Notas · Leganés · Madrid</p>

            <h1 className="urban-title">
              Danza <br /> Urbana
            </h1>

            <p className="urban-lead">
              Clases de Danza Urbana en Leganés para niños, jóvenes y adultos.
              En Siete Notas trabajamos ritmo, coordinación, musicalidad,
              expresión corporal y confianza a través de coreografías actuales,
              dinámicas y llenas de energía.
            </p>

            <div className="urban-actions">
              <a href="tel:918281988" className="urban-cta">
                Llamar ahora
              </a>

              <a href="#horarios" className="urban-secondary">
                Ver horarios
              </a>
            </div>
          </div>

          <div className="urban-collage">
            <img src="/DSC_5361.webp" alt="Clase de danza urbana en Siete Notas Leganés" />
            <img src="/DSC_5359.webp" alt="Alumnos practicando danza urbana en Leganés" />
            <img src="/DSC_5365.webp" alt="Grupo de danza urbana en escuela Siete Notas" />
          </div>
        </section>

        <section className="urban-strip">
          <div><span>01</span><p>Ritmo y coordinación</p></div>
          <div><span>02</span><p>Coreografías actuales</p></div>
          <div><span>03</span><p>Grupos por edades</p></div>
          <div><span>04</span><p>Confianza y expresión</p></div>
        </section>

        <section className="urban-section">
          <h2>Bailar, expresarse y crecer con confianza</h2>

          <div className="urban-about">
            <div>
              <p>
                La Danza Urbana es una actividad perfecta para desarrollar coordinación,
                memoria, agilidad, musicalidad y seguridad personal. En nuestras clases
                combinamos técnica, actitud y diversión para que cada alumno pueda avanzar
                a su ritmo mientras disfruta del baile.
              </p>

              <p>
                En Siete Notas creamos un entorno cercano y motivador donde el alumnado
                aprende coreografías modernas, mejora su expresión corporal y forma parte
                de un grupo con energía positiva. Tenemos clases para diferentes edades,
                niveles y objetivos.
              </p>

              <p>
                Además, cada sesión está pensada para reforzar la confianza, la presencia
                escénica y la conexión con la música. No se trata solo de aprender pasos:
                se trata de sentir el movimiento, expresarse y disfrutar del proceso.
              </p>
            </div>

            <img
              src="/DSC_5347.webp"
              alt="Coreografía de danza urbana infantil y juvenil en Siete Notas"
            />
          </div>
        </section>

        <section className="urban-section" id="horarios">
          <h2>Horarios de Danza Urbana</h2>

          <div className="urban-schedules">
            <article><span>Baby</span><strong>Martes · Miércoles · Jueves</strong><p>17:15 - 18:15</p></article>
            <article><span>Infantil</span><strong>Martes · Miércoles · Jueves</strong><p>18:15 - 19:15</p></article>
            <article><span>Juvenil</span><strong>Martes · Miércoles · Jueves</strong><p>19:15 - 20:15</p></article>
            <article><span>Open</span><strong>Miércoles · Jueves</strong><p>20:15 - 21:15</p></article>
          </div>
        </section>

        <section className="urban-black-block">
          <div className="urban-overlay"></div>

          <div className="urban-black-content">
            <h2>Ven a probar una clase</h2>

            <p>
              Si buscas clases de Danza Urbana en Leganés, en Siete Notas encontrarás
              un espacio moderno, cercano y lleno de movimiento. Llámanos y te informamos
              sobre el grupo más adecuado según edad, nivel y disponibilidad.
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

export default UrbanDancePage