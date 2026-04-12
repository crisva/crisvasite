import { notFound } from 'next/navigation';
import Image from 'next/image';
import Link from 'next/link';
import { casesData } from '@/lib/casesData';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return casesData.map((c) => ({
    slug: c.slug,
  }));
}

function CaseImage({ src, alt, height = 400 }: { src: string; alt: string; height?: number }) {
  if (!src || src.startsWith('/placeholder')) {
    return (
      <div style={{ height, borderRadius: '12px', background: 'var(--bg2)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <span style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>{alt}</span>
      </div>
    );
  }
  return (
    <div style={{ position: 'relative', width: '100%', height, borderRadius: '12px', overflow: 'hidden' }}>
      <img src={src} alt={alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
    </div>
  );
}

export default function CaseStudyPage({ params }: { params: { slug: string } }) {
  const caseData = casesData.find((c) => c.slug === params.slug);

  if (!caseData) {
    notFound();
  }

  return (
    <div className="case-study-page">
      <Nav />

      {/* 1. Executive Snapshot */}
      <section className="section bg-gradient-dark" style={{ paddingTop: '10rem', paddingBottom: '4rem', background: 'var(--bg3)' }}>
        <div className="container">
          <Link href="/" className="btn-ghost btn" style={{ marginBottom: '2rem', display: 'inline-flex', alignItems: 'center' }}>
            &larr; Volver al inicio
          </Link>

          <div style={{ marginBottom: '4rem' }}>
            <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1rem' }}>{caseData.industry}</span>
            <h1 className="display" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)' }}>{caseData.title}</h1>
            <p style={{ fontSize: 'clamp(1.2rem, 3vw, 1.5rem)', color: 'var(--white)', opacity: 0.9, maxWidth: '800px', lineHeight: 1.5 }}>
              {caseData.valueProposition}
            </p>
          </div>

          <CaseImage src={caseData.heroImage.src} alt={caseData.heroImage.alt} height={500} />

          <div className="card" style={{ padding: '2rem', marginTop: '4rem', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '2rem' }}>
            <div>
              <span className="caption" style={{ color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>CLIENTE</span>
              <strong style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{caseData.client}</strong>
            </div>
            <div>
              <span className="caption" style={{ color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>TIMELINE</span>
              <strong style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{caseData.timeline}</strong>
            </div>
            <div>
              <span className="caption" style={{ color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>PLATAFORMAS</span>
              <strong style={{ fontSize: '1.2rem', color: 'var(--white)' }}>{caseData.platforms}</strong>
            </div>
            <div>
              <span className="caption" style={{ color: 'var(--muted)', display: 'block', marginBottom: '0.5rem' }}>CORE OUTCOME</span>
              <strong style={{ fontSize: '1.2rem', color: 'var(--red)' }}>{caseData.coreOutcome}</strong>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Business Context & Problem Framing */}
      <section className="section">
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="h2" style={{ marginBottom: '2rem' }}>Contexto y Problema</h2>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}><strong>Background:</strong> {caseData.contextBackground}</p>
            <p style={{ marginBottom: '1.5rem', fontSize: '1.1rem' }}><strong>Desafío:</strong> {caseData.contextChallenges}</p>
            <p style={{ fontSize: '1.1rem' }}><strong>La urgencia:</strong> {caseData.contextBurningPlatform}</p>
          </div>
          <CaseImage src={caseData.contextImage.src} alt={caseData.contextImage.alt} height={400} />
        </div>
      </section>

      {/* 3. Objectives & Success Metrics & 4. Role & Scope */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '4rem' }}>
          <div>
            <h2 className="h2" style={{ marginBottom: '2rem' }}>Objetivos y KPIs</h2>
            <ul style={{ listStyle: 'none', padding: 0, marginBottom: '2rem' }}>
              {caseData.objectives.map((obj, i) => (
                <li key={i} style={{ marginBottom: '1rem', paddingLeft: '1.5rem', position: 'relative' }}>
                  <span style={{ position: 'absolute', left: 0, color: 'var(--red)' }}>→</span> {obj}
                </li>
              ))}
            </ul>
            <div className="card" style={{ padding: '1.5rem' }}>
              <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--red)' }}>KPIs Target</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {caseData.kpis.map((kpi, i) => (
                  <li key={i} style={{ marginBottom: '0.5rem', display: 'flex', alignItems: 'center', gap: '0.5rem' }}>
                    <div style={{ width: '6px', height: '6px', borderRadius: '50%', background: 'var(--red)', flexShrink: 0 }}></div> {kpi}
                  </li>
                ))}
              </ul>
            </div>
          </div>
          <div>
            <h2 className="h2" style={{ marginBottom: '2rem' }}>Rol y Alcance</h2>
            <div style={{ marginBottom: '2rem' }}>
              <h3 className="h3" style={{ marginBottom: '1rem' }}>Equipo</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {caseData.teamRoles.map((role, i) => (
                  <span key={i} style={{ background: 'var(--surface)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>{role}</span>
                ))}
              </div>
            </div>
            <div>
              <h3 className="h3" style={{ marginBottom: '1rem' }}>Servicios</h3>
              <div style={{ display: 'flex', gap: '0.5rem', flexWrap: 'wrap' }}>
                {caseData.servicesProvided.map((service, i) => (
                  <span key={i} style={{ background: 'var(--red-dim)', color: 'var(--white)', padding: '0.4rem 1rem', borderRadius: '20px', fontSize: '0.9rem' }}>{service}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 5. Discovery & Research & 6. Problem Definition */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem' }}>
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Descubrimiento y Síntesis</h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '2rem' }}>{caseData.researchHighlights}</p>
            <div style={{ padding: '2rem', background: 'var(--red-gradient)', borderRadius: '8px', color: 'var(--white)' }}>
              <h3 style={{ fontSize: '1.5rem', fontWeight: 600 }}>HMW Statement</h3>
              <p style={{ fontSize: '1.2rem', marginTop: '1rem', fontStyle: 'italic' }}>"{caseData.hmwStatement}"</p>
            </div>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '2rem', marginBottom: '3rem' }}>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 className="h3" style={{ marginBottom: '1.5rem' }}>Metodologías de Investigación</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {caseData.researchMethodologies.map((method, i) => (
                  <li key={i} style={{ marginBottom: '0.8rem', opacity: 0.8 }}>✓ {method}</li>
                ))}
              </ul>
            </div>
            <div className="card" style={{ padding: '2rem' }}>
              <h3 className="h3" style={{ marginBottom: '1.5rem' }}>Core Pain Points</h3>
              <ul style={{ listStyle: 'none', padding: 0 }}>
                {caseData.corePainPoints.map((pain, i) => (
                  <li key={i} style={{ marginBottom: '0.8rem', opacity: 0.8 }}>✕ {pain}</li>
                ))}
              </ul>
            </div>
          </div>

          <CaseImage src={caseData.researchImage.src} alt={caseData.researchImage.alt} height={400} />
        </div>
      </section>

      {/* 7. Strategy & Design Approach */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container">
          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
            <CaseImage src={caseData.approachImage.src} alt={caseData.approachImage.alt} height={400} />
            <div>
              <h2 className="h2" style={{ marginBottom: '2rem' }}>Estrategia y Principios</h2>
              <div style={{ marginBottom: '2rem' }}>
                <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--red)' }}>Pilares Estratégicos</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {caseData.strategicPillars.map((pillar, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{pillar}</li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="h3" style={{ marginBottom: '1rem', color: 'var(--red)' }}>Principios de Diseño</h3>
                <ul style={{ paddingLeft: '1.5rem' }}>
                  {caseData.designPrinciples.map((principle, i) => (
                    <li key={i} style={{ marginBottom: '0.5rem' }}>{principle}</li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 8. Solution Design & 9. Key Screens */}
      <section className="section">
        <div className="container">
          <h2 className="h2" style={{ textAlign: 'center', marginBottom: '2rem' }}>Diseño de Solución</h2>
          <p style={{ textAlign: 'center', maxWidth: '800px', margin: '0 auto 4rem', fontSize: '1.1rem' }}>
            {caseData.solutionEvolution}
          </p>

          <CaseImage src={caseData.keyScreensImage.src} alt={caseData.keyScreensImage.alt} height={600} />

          <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center', marginTop: '4rem' }}>
            <div>
              <h3 className="h3" style={{ marginBottom: '1rem' }}>Interacciones Clave</h3>
              <p style={{ fontSize: '1.1rem' }}>{caseData.keyScreensDesc}</p>
            </div>
            <CaseImage src={caseData.solutionImage.src} alt={caseData.solutionImage.alt} height={300} />
          </div>
        </div>
      </section>

      {/* 10. Validation & Iteration */}
      <section className="section" style={{ background: 'var(--bg2)' }}>
        <div className="container" style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '4rem', alignItems: 'center' }}>
          <div>
            <h2 className="h2" style={{ marginBottom: '1.5rem' }}>Validación e Iteración</h2>
            <p style={{ fontSize: '1.1rem' }}>{caseData.usabilityTestingDesc}</p>
          </div>
          <CaseImage src={caseData.testingImage.src} alt={caseData.testingImage.alt} height={350} />
        </div>
      </section>

      {/* 11. Results & Impact */}
      <section className="section">
        <div className="container">
          <div style={{ textAlign: 'center', marginBottom: '4rem' }}>
            <h2 className="display" style={{ fontSize: 'clamp(2.5rem, 5vw, 4rem)', marginBottom: '1.5rem', color: 'var(--red)' }}>Resultados e Impacto</h2>
            <p style={{ fontSize: '1.5rem', fontStyle: 'italic', maxWidth: '800px', margin: '0 auto', color: 'var(--white)' }}>
              {caseData.clientTestimonial}
            </p>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '2rem', marginBottom: '4rem' }}>
            {caseData.finalResults.map((res, i) => (
              <div key={i} className="card" style={{ padding: '3rem 2rem', textAlign: 'center' }}>
                <span style={{ display: 'block', fontSize: '3rem', fontWeight: 800, color: 'var(--red)', marginBottom: '1rem', fontFamily: 'var(--font-display)' }}>
                  {res.num}
                </span>
                <span className="caption" style={{ color: 'var(--muted)' }}>{res.label}</span>
              </div>
            ))}
          </div>

          <CaseImage src={caseData.impactImage.src} alt={caseData.impactImage.alt} height={400} />
        </div>
      </section>

      {/* Pre-footer Call to Action */}
      <section className="section" style={{ background: 'var(--red-gradient)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '1.5rem' }}>¿Tienes un desafío similar?</h2>
          <p style={{ marginBottom: '2rem', color: 'var(--white)', opacity: 0.9, fontSize: '1.2rem' }}>Hablemos de cómo podemos ayudar a tu equipo a crecer con criterio.</p>
          <a href="/#contacto" className="btn btn-ghost" style={{ border: '2px solid white', padding: '1rem 3rem', borderRadius: '30px', fontSize: '1.1rem', fontWeight: 600 }}>Agendar Sesión</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}