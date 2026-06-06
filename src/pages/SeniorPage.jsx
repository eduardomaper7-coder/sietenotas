const SeniorPage = () => {
  return (
    <>
      <style>{`
        .senior-page {
          background: #fff;
          color: #000;
          padding: 115px 20px 90px;
          font-family: Inter, system-ui, sans-serif;
          overflow: hidden;
        }

        .senior-hero {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: center;
        }

        .senior-eyebrow {
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

        .senior-title {
          font-size: clamp(4rem, 8vw, 8.5rem);
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-weight: 950;
          margin: 0 0 24px;
        }

        .senior-lead {
          font-size: 1.12rem;
          line-height: 1.75;
          max-width: 630px;
          margin-bottom: 30px;
          color: #222;
        }

        .senior-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .senior-cta,
        .senior-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 16px 26px;
          text-decoration: none;
          font-weight: 900;
        }

        .senior-cta {
          background: #000;
          color: #fff;
        }

        .senior-secondary {
          border: 1px solid #000;
          color: #000;
        }

        .senior-visual {
          min-height: 590px;
          border-radius: 38px;
          background:
            linear-gradient(rgba(0,0,0,.32), rgba(0,0,0,.32)),
            url('/senior-1.webp');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: end;
          padding: 34px;
          color: #fff;
        }

        .senior-visual-card {
          max-width: 450px;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 28px;
          padding: 26px;
          backdrop-filter: blur(12px);
          background: rgba(0,0,0,.35);
        }

        .senior-visual-card span {
          display: block;
          font-size: 3rem;
          font-weight: 950;
          line-height: 1;
          margin-bottom: 12px;
        }

        .senior-visual-card p {
          margin: 0;
          line-height: 1.7;
        }

        .senior-strip {
          max-width: 1320px;
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #000;
          border-radius: 30px;
          overflow: hidden;
        }

        .senior-strip div {
          padding: 26px;
          border-right: 1px solid #000;
        }

        .senior-strip div:last-child {
          border-right: 0;
        }

        .senior-strip span {
          display: block;
          font-size: 2.5rem;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .senior-strip p {
          margin: 0;
          font-weight: 800;
        }

        .senior-section {
          max-width: 1320px;
          margin: 95px auto 0;
        }

        .senior-section h2 {
          font-size: clamp(2.4rem, 5vw, 4.6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 950;
          margin-bottom: 34px;
        }

        .senior-about {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 64px;
          align-items: center;
        }

        .senior-about p {
          font-size: 1.08rem;
          line-height: 1.9;
          color: #222;
          margin-bottom: 24px;
        }

        .senior-about-img {
          width: 100%;
          height: 540px;
          border-radius: 34px;
          background:
            linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.18)),
            url('/senior-2.webp');
          background-size: cover;
          background-position: center;
        }

        .senior-schedules {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }

        .senior-schedules article {
          border: 1px solid #000;
          border-radius: 26px;
          padding: 24px;
          background: #fff;
          transition: 0.25s ease;
        }

        .senior-schedules article:hover {
          background: #000;
          color: #fff;
          transform: translateY(-6px);
        }

        .senior-schedules span {
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.75rem;
          font-weight: 900;
          opacity: 0.65;
          margin-bottom: 10px;
        }

        .senior-schedules strong {
          display: block;
          margin-bottom: 12px;
          line-height: 1.35;
        }

        .senior-schedules p {
          margin: 0;
          font-size: 1.35rem;
          font-weight: 950;
        }

        .senior-note {
          margin-top: 18px;
          border-radius: 24px;
          background: #f4f4f4;
          padding: 24px;
          font-weight: 800;
          line-height: 1.7;
        }

        .senior-black-block {
          position: relative;
          max-width: 1320px;
          margin: 100px auto 0;
          min-height: 520px;
          border-radius: 40px;
          overflow: hidden;
          background:
            linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)),
            url('/senior-3.webp');
          background-size: cover;
          background-position: center;
        }

        .senior-black-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: clamp(40px, 7vw, 82px);
          color: #fff;
        }

        .senior-black-content h2 {
          font-size: clamp(2.8rem, 5vw, 5.5rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
          margin: 0 0 26px;
          font-weight: 950;
        }

        .senior-black-content p {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: #f1f1f1;
        }

        .senior-black-content a {
          display: inline-flex;
          border-radius: 999px;
          background: #fff;
          color: #000;
          padding: 16px 28px;
          text-decoration: none;
          font-weight: 900;
        }

        @media (max-width: 980px) {
          .senior-hero,
          .senior-about {
            grid-template-columns: 1fr;
          }

          .senior-strip,
          .senior-schedules {
            grid-template-columns: 1fr 1fr;
          }

          .senior-visual,
          .senior-about-img {
            height: 420px;
            min-height: 420px;
          }
        }

        @media (max-width: 620px) {
          .senior-page {
            padding-top: 145px;
          }

          .senior-strip,
          .senior-schedules {
            grid-template-columns: 1fr;
          }

          .senior-title {
            font-size: 4rem;
          }

          .senior-visual,
          .senior-about-img {
            height: 320px;
            min-height: 320px;
          }

          .senior-black-block {
            min-height: 560px;
          }
        }
      `}</style>

      <main className="senior-page">
        <section className="senior-hero">
          <div>
            <p className="senior-eyebrow">Siete Notas · Leganés · Madrid</p>

            <h1 className="senior-title">
              Senior
            </h1>

            <p className="senior-lead">
              Actividades Senior en Leganés pensadas para mantener el cuerpo activo,
              mejorar la movilidad y disfrutar del movimiento en un ambiente cercano.
              En Siete Notas combinamos gimnasia suave, baile, coordinación y bienestar
              para adultos que quieren cuidarse de forma dinámica y agradable.
            </p>

            <div className="senior-actions">
              <a href="tel:918281988" className="senior-cta">
                Llamar ahora
              </a>

              <a href="#horarios-senior" className="senior-secondary">
                Ver horarios
              </a>
            </div>
          </div>

          <div className="senior-visual">
            <div className="senior-visual-card">
              <span>+</span>
              <p>
                Movimiento, salud, ritmo y bienestar para seguir activo
                en un entorno positivo y acompañado.
              </p>
            </div>
          </div>
        </section>

        <section className="senior-strip">
          <div><span>01</span><p>Movilidad y energía</p></div>
          <div><span>02</span><p>Baile y coordinación</p></div>
          <div><span>03</span><p>Ambiente cercano</p></div>
          <div><span>04</span><p>Bienestar diario</p></div>
        </section>

        <section className="senior-section">
          <h2>Gimnasia y baile para sentirse mejor</h2>

          <div className="senior-about">
            <div>
              <p>
                Las clases Senior de Siete Notas están pensadas para personas que
                quieren mantenerse activas, mejorar su movilidad y disfrutar de una
                actividad física adaptada, entretenida y social.
              </p>

              <p>
                Combinamos ejercicios de gimnasia suave con baile y coordinación para
                trabajar el cuerpo de forma completa, cuidando el ritmo de cada persona
                y creando un espacio agradable donde moverse con confianza.
              </p>

              <p>
                Es una actividad ideal para mejorar la energía, la postura, la memoria
                corporal y el bienestar general, sin perder el componente divertido
                del baile y la música.
              </p>
            </div>

            <div className="senior-about-img" aria-label="Clase senior en Siete Notas"></div>
          </div>
        </section>

        <section className="senior-section" id="horarios-senior">
          <h2>Horarios Senior</h2>

          <div className="senior-schedules">
            <article>
              <span>Gim + Baile Senior</span>
              <strong>Lunes y miércoles</strong>
              <p>10:00 - 11:00</p>
            </article>

            <article>
              <span>Gim + Baile Senior</span>
              <strong>Martes y jueves</strong>
              <p>10:00 - 11:00</p>
            </article>

            <article>
              <span>Gim + Baile Senior</span>
              <strong>Martes y jueves</strong>
              <p>11:00 - 12:00</p>
            </article>

            <article>
              <span>Gim + Baile Senior</span>
              <strong>Martes y jueves</strong>
              <p>12:00 - 13:00</p>
            </article>
          </div>

          <div className="senior-note">
            Actividad orientada a adultos y personas senior que buscan movimiento,
            coordinación, bienestar y socialización en Leganés.
          </div>
        </section>

        <section className="senior-black-block">
          <div className="senior-black-content">
            <h2>Ven a probar una clase</h2>

            <p>
              Si buscas actividades Senior en Leganés, en Siete Notas te ayudamos
              a encontrar el horario más cómodo para empezar. Llámanos y te informamos
              sobre disponibilidad, grupos y funcionamiento de las clases.
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

export default SeniorPage