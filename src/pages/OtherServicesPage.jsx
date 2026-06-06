const OtherServicesPage = () => {
  return (
    <>
      <style>{`
        .other-page {
          background: #fff;
          color: #000;
          padding: 115px 20px 90px;
          font-family: Inter, system-ui, sans-serif;
          overflow: hidden;
        }

        .other-hero,
        .other-section {
          max-width: 1320px;
          margin: 0 auto;
        }

        .other-hero {
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: center;
        }

        .other-eyebrow {
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

        .other-title {
          font-size: clamp(3.8rem, 7.5vw, 8rem);
          line-height: 0.84;
          letter-spacing: -0.08em;
          font-weight: 950;
          margin: 0 0 24px;
        }

        .other-lead {
          font-size: 1.12rem;
          line-height: 1.75;
          max-width: 640px;
          margin-bottom: 30px;
          color: #222;
        }

        .other-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .other-cta,
        .other-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 16px 26px;
          text-decoration: none;
          font-weight: 900;
        }

        .other-cta {
          background: #000;
          color: #fff;
        }

        .other-secondary {
          border: 1px solid #000;
          color: #000;
        }

        .other-visual {
          min-height: 590px;
          border-radius: 38px;
          background:
            linear-gradient(rgba(0,0,0,.38), rgba(0,0,0,.38)),
            url('/otros-servicios-1.webp');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: end;
          padding: 34px;
          color: #fff;
        }

        .other-visual-card {
          max-width: 480px;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 28px;
          padding: 26px;
          backdrop-filter: blur(12px);
          background: rgba(0,0,0,.35);
        }

        .other-visual-card span {
          display: block;
          font-size: 3rem;
          font-weight: 950;
          line-height: 1;
          margin-bottom: 12px;
        }

        .other-visual-card p {
          margin: 0;
          line-height: 1.7;
        }

        .other-strip {
          max-width: 1320px;
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          border: 1px solid #000;
          border-radius: 30px;
          overflow: hidden;
        }

        .other-strip div {
          padding: 28px;
          border-right: 1px solid #000;
        }

        .other-strip div:last-child {
          border-right: 0;
        }

        .other-strip span {
          display: block;
          font-size: 2.7rem;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .other-strip p {
          margin: 0;
          font-weight: 850;
        }

        .other-section {
          margin-top: 95px;
        }

        .other-section h2 {
          font-size: clamp(2.4rem, 5vw, 4.6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 950;
          margin-bottom: 34px;
        }

        .other-cards {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 18px;
        }

        .other-card {
          border: 1px solid #000;
          border-radius: 32px;
          overflow: hidden;
          background: #fff;
        }

        .other-card-img {
          height: 280px;
          background-size: cover;
          background-position: center;
        }

        .other-card-content {
          padding: 28px;
        }

        .other-card-content span {
          display: inline-flex;
          border: 1px solid #000;
          border-radius: 999px;
          padding: 6px 12px;
          font-size: .72rem;
          font-weight: 900;
          letter-spacing: .12em;
          text-transform: uppercase;
          margin-bottom: 18px;
        }

        .other-card-content h3 {
          font-size: 2rem;
          line-height: 1;
          letter-spacing: -0.04em;
          font-weight: 950;
          margin: 0 0 16px;
        }

        .other-card-content p {
          color: #222;
          line-height: 1.8;
          margin-bottom: 22px;
        }

        .other-card-content a {
          display: inline-flex;
          border-radius: 999px;
          background: #000;
          color: #fff;
          padding: 13px 20px;
          text-decoration: none;
          font-weight: 900;
        }

        .beauty-img {
          background-image:
            linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.08)),
            url('/belleza-1.webp');
        }

        .rooms-img {
          background-image:
            linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.08)),
            url('/alquiler-salas-1.webp');
        }

        .events-img {
          background-image:
            linear-gradient(rgba(0,0,0,.08), rgba(0,0,0,.08)),
            url('/eventos-1.webp');
        }

        .other-detail {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 64px;
          align-items: center;
        }

        .other-detail p {
          font-size: 1.08rem;
          line-height: 1.9;
          color: #222;
          margin-bottom: 24px;
        }

        .other-detail-img {
          width: 100%;
          height: 540px;
          border-radius: 34px;
          background:
            linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.18)),
            url('/otros-servicios-2.webp');
          background-size: cover;
          background-position: center;
        }

        .other-black-block {
          position: relative;
          max-width: 1320px;
          margin: 100px auto 0;
          min-height: 520px;
          border-radius: 40px;
          overflow: hidden;
          background:
            linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)),
            url('/otros-servicios-3.webp');
          background-size: cover;
          background-position: center;
        }

        .other-black-content {
          position: relative;
          z-index: 2;
          max-width: 780px;
          padding: clamp(40px, 7vw, 82px);
          color: #fff;
        }

        .other-black-content h2 {
          font-size: clamp(2.8rem, 5vw, 5.5rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
          margin: 0 0 26px;
          font-weight: 950;
        }

        .other-black-content p {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: #f1f1f1;
        }

        .other-black-content a {
          display: inline-flex;
          border-radius: 999px;
          background: #fff;
          color: #000;
          padding: 16px 28px;
          text-decoration: none;
          font-weight: 900;
        }

        @media (max-width: 980px) {
          .other-hero,
          .other-detail {
            grid-template-columns: 1fr;
          }

          .other-cards,
          .other-strip {
            grid-template-columns: 1fr;
          }

          .other-strip div {
            border-right: 0;
            border-bottom: 1px solid #000;
          }

          .other-strip div:last-child {
            border-bottom: 0;
          }

          .other-visual,
          .other-detail-img {
            height: 420px;
            min-height: 420px;
          }
        }

        @media (max-width: 620px) {
          .other-page {
            padding-top: 145px;
          }

          .other-title {
            font-size: 3.7rem;
          }

          .other-visual,
          .other-detail-img {
            height: 320px;
            min-height: 320px;
          }

          .other-black-block {
            min-height: 560px;
          }
        }
      `}</style>

      <main className="other-page">
        <section className="other-hero">
          <div>
            <p className="other-eyebrow">Siete Notas · Leganés · Madrid</p>

            <h1 className="other-title">
              Otros <br /> Servicios
            </h1>

            <p className="other-lead">
              En Siete Notas también ofrecemos servicios complementarios para cuidar,
              celebrar y crear: belleza y bienestar, alquiler de salas y eventos.
              Todo en un espacio versátil, cercano y preparado para diferentes
              necesidades en Leganés.
            </p>

            <div className="other-actions">
              <a href="tel:918281988" className="other-cta">
                Llamar ahora
              </a>

              <a href="#servicios" className="other-secondary">
                Ver servicios
              </a>
            </div>
          </div>

          <div className="other-visual">
            <div className="other-visual-card">
              <span>+</span>
              <p>
                Espacios, bienestar y experiencias para completar la oferta de
                Siete Notas más allá de la danza y la música.
              </p>
            </div>
          </div>
        </section>

        <section className="other-strip">
          <div><span>01</span><p>Belleza y bienestar</p></div>
          <div><span>02</span><p>Alquiler de salas</p></div>
          <div><span>03</span><p>Eventos y celebraciones</p></div>
        </section>

        <section className="other-section" id="servicios">
          <h2>Servicios disponibles</h2>

          <div className="other-cards">
            <article className="other-card">
              <div className="other-card-img beauty-img"></div>

              <div className="other-card-content">
                <span>Bienestar</span>
                <h3>Belleza y bienestar</h3>
                <p>
                  Servicios pensados para cuidarte, desconectar y complementar tu
                  rutina de bienestar dentro de Siete Notas.
                </p>
                <a href="tel:918281988">Consultar</a>
              </div>
            </article>

            <article className="other-card">
              <div className="other-card-img rooms-img"></div>

              <div className="other-card-content">
                <span>Espacios</span>
                <h3>Alquiler de salas</h3>
                <p>
                  Salas disponibles para clases, ensayos, formaciones, actividades
                  privadas o proyectos que necesiten un espacio preparado.
                </p>
                <a href="tel:918281988">Consultar</a>
              </div>
            </article>

            <article className="other-card">
              <div className="other-card-img events-img"></div>

              <div className="other-card-content">
                <span>Eventos</span>
                <h3>Eventos</h3>
                <p>
                  Organización y espacios para eventos, actividades especiales,
                  encuentros, muestras, celebraciones y propuestas culturales.
                </p>
                <a href="tel:918281988">Consultar</a>
              </div>
            </article>
          </div>
        </section>

        <section className="other-section">
          <h2>Un centro con muchas posibilidades</h2>

          <div className="other-detail">
            <div>
              <p>
                Siete Notas es mucho más que una escuela de danza y música. Nuestro
                centro en Leganés está pensado para acoger diferentes actividades,
                servicios y experiencias en un entorno cuidado, flexible y cercano.
              </p>

              <p>
                Puedes contactar con nosotros para consultar disponibilidad de salas,
                propuestas de eventos, colaboraciones o servicios vinculados al
                bienestar. Te orientamos según lo que necesites y buscamos la opción
                más adecuada.
              </p>

              <p>
                La combinación de espacios, actividades y equipo humano nos permite
                ofrecer soluciones para alumnos, familias, profesionales y proyectos
                externos.
              </p>
            </div>

            <div className="other-detail-img" aria-label="Centro Siete Notas en Leganés"></div>
          </div>
        </section>

        <section className="other-black-block">
          <div className="other-black-content">
            <h2>Cuéntanos qué necesitas</h2>

            <p>
              Si quieres información sobre belleza y bienestar, alquiler de salas
              o eventos en Leganés, llámanos y te ayudamos a encontrar la mejor opción.
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

export default OtherServicesPage