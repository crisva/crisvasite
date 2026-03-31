'use client';

export default function Footer() {
  return (
    <footer style={{ background: 'var(--surf1)', borderTop: '1px solid var(--border)', padding: '3rem 0 2rem' }}>
      <div className="container">
        <div className="footer-inner" style={{ display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: '3rem' }}>
          <div className="footer-brand">
            <a href="#" className="logo">
              <img 
                src="/images/LOGO/LOGO-CRISVA.png" 
                alt="Crisva Logo" 
                style={{ height: '64px', width: 'auto', marginBottom: '.5rem' }} 
              />
            </a>
            <p style={{ color: 'var(--muted)', fontSize: '.88rem', marginTop: '1.5rem', maxWidth: '260px', lineHeight: 1.65 }}>
              Diseñamos productos digitales que trascenden. Branding + UX + UI end-to-end para startups y empresas que quieren impacto real.
            </p>

          </div>

          <div className="footer-col">
            <h5 style={{ fontFamily: 'var(--font-h)', fontSize: '.82rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Servicios</h5>
            <div className="footer-links">
              <a href="#product-design">Product Design</a>
              <a href="#branding">Branding</a>
              <a href="#strategy-design">Strategy Design</a>
              <a href="#design-growth">Design Growth</a>
              <a href="#web-desarrollo">Web Desarrollo</a>
            </div>
          </div>

          <div className="footer-col">
            <h5 style={{ fontFamily: 'var(--font-h)', fontSize: '.82rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Empresa</h5>
            <div className="footer-links">
              <a href="#proceso">Nuestro proceso</a>
              <a href="#equipo">El equipo</a>
              <a href="#casos">Casos de éxito</a>
              <a href="#testimonios">Testimonios</a>
            </div>
          </div>

          <div className="footer-col">
            <h5 style={{ fontFamily: 'var(--font-h)', fontSize: '.82rem', fontWeight: 700, letterSpacing: '.08em', textTransform: 'uppercase', color: 'var(--muted)', marginBottom: '1rem' }}>Contacto</h5>
            <div className="footer-links">
              <a href="mailto:c@crisva.com">c@crisva.com</a>
              <a href="https://www.linkedin.com/company/crisva/" target="_blank" rel="noopener noreferrer">LinkedIn</a>
              <a href="https://www.instagram.com/crisvadesign/" target="_blank" rel="noopener noreferrer">Instagram</a>
              <a href="http://hackeandoproductos.com/" target="_blank" rel="noopener noreferrer">Podcast</a>
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
        .footer-links a { 
          display: block; 
          font-size: .88rem; 
          color: var(--muted); 
          margin-bottom: .5rem; 
          transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1); 
        }
        .footer-links a:hover { 
          color: var(--red); 
          transform: translateX(6px);
        }
        .tag {
          transition: all 0.3s ease;
        }
        .tag:hover {
          color: var(--red) !important;
          border-color: var(--red) !important;
          transform: translateY(-2px);
        }
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
