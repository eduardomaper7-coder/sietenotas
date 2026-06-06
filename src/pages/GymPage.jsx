const GymPage = () => {
  return (
    <>
      <style>{`
        .gym-page {
          background: #fff;
          color: #000;
          padding: 115px 20px 90px;
          font-family: Inter, system-ui, sans-serif;
          overflow: hidden;
        }

        .gym-hero {
          max-width: 1320px;
          margin: 0 auto;
          display: grid;
          grid-template-columns: 0.85fr 1.15fr;
          gap: 56px;
          align-items: center;
        }

        .gym-eyebrow {
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

        .gym-title {
          font-size: clamp(4rem, 8vw, 8.5rem);
          line-height: 0.82;
          letter-spacing: -0.08em;
          font-weight: 950;
          margin: 0 0 24px;
        }

        .gym-lead {
          font-size: 1.12rem;
          line-height: 1.75;
          max-width: 630px;
          margin-bottom: 30px;
          color: #222;
        }

        .gym-actions {
          display: flex;
          flex-wrap: wrap;
          gap: 14px;
        }

        .gym-cta,
        .gym-secondary {
          display: inline-flex;
          align-items: center;
          justify-content: center;
          border-radius: 999px;
          padding: 16px 26px;
          text-decoration: none;
          font-weight: 900;
        }

        .gym-cta {
          background: #000;
          color: #fff;
        }

        .gym-secondary {
          border: 1px solid #000;
          color: #000;
        }

        .gym-visual {
          min-height: 590px;
          border-radius: 38px;
          background:
            linear-gradient(rgba(0,0,0,.35), rgba(0,0,0,.35)),
            url('/gym-1.webp');
          background-size: cover;
          background-position: center;
          display: flex;
          align-items: end;
          padding: 34px;
          color: #fff;
        }

        .gym-visual-card {
          max-width: 450px;
          border: 1px solid rgba(255,255,255,.45);
          border-radius: 28px;
          padding: 26px;
          backdrop-filter: blur(12px);
          background: rgba(0,0,0,.35);
        }

        .gym-visual-card span {
          display: block;
          font-size: 3rem;
          font-weight: 950;
          line-height: 1;
          margin-bottom: 12px;
        }

        .gym-visual-card p {
          margin: 0;
          line-height: 1.7;
        }

        .gym-strip {
          max-width: 1320px;
          margin: 80px auto 0;
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          border: 1px solid #000;
          border-radius: 30px;
          overflow: hidden;
        }

        .gym-strip div {
          padding: 26px;
          border-right: 1px solid #000;
        }

        .gym-strip div:last-child {
          border-right: 0;
        }

        .gym-strip span {
          display: block;
          font-size: 2.5rem;
          font-weight: 950;
          margin-bottom: 10px;
        }

        .gym-strip p {
          margin: 0;
          font-weight: 800;
        }

        .gym-section {
          max-width: 1320px;
          margin: 95px auto 0;
        }

        .gym-section h2 {
          font-size: clamp(2.4rem, 5vw, 4.6rem);
          line-height: 0.95;
          letter-spacing: -0.05em;
          font-weight: 950;
          margin-bottom: 34px;
        }

        .gym-about {
          display: grid;
          grid-template-columns: 1fr 520px;
          gap: 64px;
          align-items: center;
        }

        .gym-about p {
          font-size: 1.08rem;
          line-height: 1.9;
          color: #222;
          margin-bottom: 24px;
        }

        .gym-about-img {
          width: 100%;
          height: 540px;
          border-radius: 34px;
          background:
            linear-gradient(rgba(0,0,0,.18), rgba(0,0,0,.18)),
            url('/gym-2.webp');
          background-size: cover;
          background-position: center;
        }

        .gym-activities {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 18px;
        }

        .gym-activities article {
          border: 1px solid #000;
          border-radius: 30px;
          padding: 30px;
        }

        .gym-activities span {
          display: block;
          font-size: 2.8rem;
          font-weight: 950;
          margin-bottom: 18px;
        }

        .gym-activities h3 {
          margin: 0 0 14px;
          font-size: 1.8rem;
          font-weight: 950;
        }

        .gym-activities p {
          margin: 0;
          font-size: 1.05rem;
          line-height: 1.8;
          color: #222;
        }

        .gym-schedules {
          margin-top: 36px;
          display: grid;
          grid-template-columns: repeat(5, 1fr);
          gap: 16px;
        }

        .gym-schedules article {
          border: 1px solid #000;
          border-radius: 26px;
          padding: 24px;
          background: #fff;
          transition: 0.25s ease;
        }

        .gym-schedules article:hover {
          background: #000;
          color: #fff;
          transform: translateY(-6px);
        }

        .gym-schedules span {
          display: block;
          text-transform: uppercase;
          letter-spacing: 0.16em;
          font-size: 0.75rem;
          font-weight: 900;
          opacity: 0.65;
          margin-bottom: 10px;
        }

        .gym-schedules strong {
          display: block;
          margin-bottom: 12px;
          line-height: 1.35;
        }

        .gym-schedules p {
          margin: 0;
          font-size: 1.25rem;
          font-weight: 950;
        }

        .gym-note {
          margin-top: 18px;
          border-radius: 24px;
          background: #f4f4f4;
          padding: 24px;
          font-weight: 800;
          line-height: 1.7;
        }

        .gym-black-block {
          position: relative;
          max-width: 1320px;
          margin: 100px auto 0;
          min-height: 520px;
          border-radius: 40px;
          overflow: hidden;
          background:
            linear-gradient(rgba(0,0,0,.62), rgba(0,0,0,.62)),
            url('/gym-3.webp');
          background-size: cover;
          background-position: center;
        }

        .gym-black-content {
          position: relative;
          z-index: 2;
          max-width: 760px;
          padding: clamp(40px, 7vw, 82px);
          color: #fff;
        }

        .gym-black-content h2 {
          font-size: clamp(2.8rem, 5vw, 5.5rem);
          line-height: 0.9;
          letter-spacing: -0.06em;
          margin: 0 0 26px;
          font-weight: 950;
        }

        .gym-black-content p {
          font-size: 1.15rem;
          line-height: 1.8;
          margin-bottom: 30px;
          color: #f1f1f1;
        }

        .gym-black-content a {
          display: inline-flex;
          border-radius: 999px;
          background: #fff;
          color: #000;
          padding: 16px 28px;
          text-decoration: none;
          font-weight: 900;
        }

        @media (max-width: 1080px) {
          .gym-schedules {
            grid-template-columns: repeat(2, 1fr);
          }
        }

        @media (max-width: 980px) {
          .gym-hero,
          .gym-about {
            grid-template-columns: 1fr;
          }

          .gym-strip,
          .gym-activities {
            grid-template-columns: 1fr 1fr;
          }

          .gym-visual,
          .gym-about-img {
            height: 420px;
            min-height: 420px;
          }
        }

        @media (max-width: 620px) {
          .gym-page {
            padding-top: 145px;
          }

          .gym-strip,
          .gym-schedules,
          .gym-activities {
            grid-template-columns: 1fr;
          }

          .gym-title {
            font-size: 4rem;
          }

          .gym-visual,
          .gym-about-img {
            height: 320px;
            min-height: 320px;
          }

          .gym-black-block {
            min-height: 560px;
          }
        }
      `}</style>

      <main className="gym-page">
        <section className="gym-hero">
          <div>
            <p className="gym-eyebrow">Siete Notas · Leganés · Madrid</p>

            <h1 className="gym-title">
              Gym
            </h1>

            <p className="gym-lead">
              Actividades de Gym en Leganés para entrenar, moverte y sentirte mejor.
              En Siete Notas ofrecemos clases de Pilates y Zumba con horarios de
              mañana y tarde, pensadas para mejorar fuerza, movilidad, coordinación,
              energía y bienestar.
            </p>

            <div className="gym-actions">
              <a href="tel:918281988" className="gym-cta">
                Llamar ahora
              </a>

              <a href="#horarios-gym" className="gym-secondary">
                Ver horarios
              </a>
            </div>
          </div>

          <div className="gym-visual">
            <div className="gym-visual-card">
              <span>GYM</span>
              <p>
                Pilates, Zumba, movimiento y bienestar en un espacio cercano,
                activo y motivador.
              </p>
            </div>
          </div>
        </section>

        <section className="gym-strip">
          <div><span>01</span><p>Fuerza y movilidad</p></div>
          <div><span>02</span><p>Clases de Pilates</p></div>
          <div><span>03</span><p>Zumba y energía</p></div>
          <div><span>04</span><p>Horarios mañana y tarde</p></div>
        </section>

        <section className="gym-section">
          <h2>Entrena, muévete y disfruta</h2>

          <div className="gym-about">
            <div>
              <p>
                La sección Gym de Siete Notas está pensada para personas que quieren
                cuidarse, mejorar su condición física y mantenerse activas de una
                forma dinámica y acompañada.
              </p>

              <p>
                Pilates ayuda a trabajar la postura, la fuerza, la movilidad y el
                control corporal. Zumba aporta ritmo, energía, coordinación y una
                forma divertida de hacer ejercicio a través de la música.
              </p>

              <p>
                Nuestro objetivo es que cada alumno encuentre una actividad que encaje
                con su ritmo, su cuerpo y sus objetivos, siempre en un ambiente cercano
                y motivador en Leganés.
              </p>
            </div>

            <div className="gym-about-img" aria-label="Clase de gym en Siete Notas"></div>
          </div>
        </section>

        <section className="gym-section">
          <h2>Actividades Gym</h2>

          <div className="gym-activities">
            <article>
              <span>01</span>
              <h3>Pilates</h3>
              <p>
                Trabajo corporal enfocado en fuerza, movilidad, postura, respiración
                y control. Ideal para mejorar el bienestar físico de forma progresiva.
              </p>
            </article>

            <article>
              <span>02</span>
              <h3>Zumba</h3>
              <p>
                Clase energética con música, baile y ejercicio cardiovascular.
                Perfecta para moverse, desconectar y disfrutar entrenando.
              </p>
            </article>
          </div>
        </section>

        <section className="gym-section" id="horarios-gym">
          <h2>Horarios Gym</h2>

          <div className="gym-schedules">
            <article>
              <span>Pilates</span>
              <strong>Lunes y miércoles</strong>
              <p>10:00 - 11:00</p>
            </article>

            <article>
              <span>Pilates</span>
              <strong>Lunes y miércoles</strong>
              <p>11:15 - 12:15</p>
            </article>

            <article>
              <span>Zumba</span>
              <strong>Martes y jueves</strong>
              <p>18:00 - 19:00</p>
            </article>

            <article>
              <span>Pilates</span>
              <strong>Martes y jueves</strong>
              <p>19:15 - 20:15</p>
            </article>

            <article>
              <span>Pilates</span>
              <strong>Martes y jueves</strong>
              <p>20:15 - 21:15</p>
            </article>
          </div>

          <div className="gym-note">
            Actividades extraídas del horario: Pilates en horario de mañana y tarde,
            y Zumba los martes y jueves por la tarde.
          </div>
        </section>

        <section className="gym-black-block">
          <div className="gym-black-content">
            <h2>Ven a probar una clase</h2>

            <p>
              Si buscas clases de Pilates o Zumba en Leganés, en Siete Notas te
              ayudamos a encontrar el grupo y horario que mejor encaje contigo.
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

export default GymPage