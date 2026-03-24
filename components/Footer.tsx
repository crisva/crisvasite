'use client';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surf1)', borderTop: '1px solid var(--border)', padding: '3rem 0 2rem' }}>
      <div className="container">
        <div className="footer-inner" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem' }}>
          <div className="footer-brand">
            <div className="logo" style={{ fontFamily: 'var(--font-h)', fontSize: '1.15rem', fontWeight: 800 }}>
              CRISVA<span style={{ color: 'var(--red)' }}>.</span>
            </div>
            <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginTop: '.75rem', maxWidth: '260px', lineHeight: 1.65 }}>
              Diseñamos productos digitales que trascenden. Branding + UX + UI end-to-end para startups y empresas que quieren impacto real.
            </p>
            <div className="footer-socials" style={{ display: 'flex', gap: '.5rem', marginTop: '1.5rem' }}>
              <span className="tag" style={{ fontSize: '.72rem' }}>LinkedIn</span>
              <span className="tag" style={{ fontSize: '.72rem' }}>Instagram</span>
              <span className="tag" style={{ fontSize: '.72rem' }}>Podcast</span>
            </div>
          </div>

          <div className="footer-col">
            <h5 style={{ fontFamily: 'var(--font-h)', fontSize: '.82rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Servicios</h5>
            <div className="footer-links">
              <a href="#servicios">Human Branding</a>
              <a href="#servicios">Product Design E2E</a>
              <a href="#servicios">UX Audit Express</a>
              <a href="#servicios">Retainer Mensual</a>
              <a href="#servicios">Design Sprint</a>
            </div>
          </div>

          <div className="footer-col">
            <h5 style={{ fontFamily: 'var(--font-h)', fontSize: '.82rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Empresa</h5>
            <div className="footer-links">
              <a href="#proceso">Nuestro proceso</a>
              <a href="#equipo">El equipo</a>
              <a href="#casos">Casos de éxito</a>
              <a href="#testimonios">Testimonios</a>
              <a href="#podcast">Podcast</a>
            </div>
          </div>

          <div className="footer-col">
            <h5 style={{ fontFamily: 'var(--font-h)', fontSize: '.82rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Contacto</h5>
            <div className="footer-links">
              <a href="mailto:c@crisva.com">c@crisva.com</a>
              <span style={{ display: 'block', fontSize: '.88rem', color: 'var(--muted)', marginBottom: '.5rem' }}>LinkedIn</span>
              <a href="#contacto">Agenda una llamada</a>
              <span style={{ display: 'block', fontSize: '.88rem', color: 'var(--muted)', marginBottom: '.5rem' }}>Lima, Perú</span>
            </div>
          </div>
        </div>

        <div className="footer-bottom" style={{ marginTop: '3rem', paddingTop: '1.5rem', borderTop: '1px solid var(--border)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '1rem' }}>
          <p style={{ fontSize: '.82rem', color: 'var(--muted)' }}>© 2026 Crisva Design Lab. Todos los derechos reservados.</p>
          <div className="made" style={{ display: 'flex', alignItems: 'center', gap: '.35rem', fontSize: '.82rem', color: 'var(--muted)' }}>
            Diseño hecho con <span style={{ color: 'var(--red)' }}>♥</span> y proceso humano
          </div>
        </div>
      </div>

      <style jsx>{`
        .footer-links a { display: block; font-size: .88rem; color: var(--muted); margin-bottom: .5rem; transition: color .2s; }
        .footer-links a:hover { color: var(--text); }
        @media (max-width: 760px) {
          .footer-inner { grid-template-columns: 1fr 1fr !important; }
        }
        @media (max-width: 480px) {
          .footer-inner { grid-template-columns: 1fr !important; }
        }
      `}</style>
    </footer>
  );
}
