import { notFound } from 'next/navigation';
import Link from 'next/link';
import { casesData } from '@/lib/casesData';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';

export async function generateStaticParams() {
  return casesData.map((c) => ({ slug: c.slug }));
}

function CaseImage({ src, alt, height = 400 }: { src: string; alt: string; height?: number }) {
  if (!src || src.startsWith('/placeholder')) {
    return (
      <div style={{ height, borderRadius: '12px', background: 'var(--surf1)', border: '1px solid var(--border)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
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
  const c = casesData.find((x) => x.slug === params.slug);
  if (!c) notFound();

  const gridTwo = { display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '4rem', alignItems: 'center' };

  return (
    <div className="case-study-page">
      <Nav />

      {/* 1. Snapshot */}
      <section style={{ paddingTop: '10rem', paddingBottom: '5rem', background: 'var(--bg3)' }}>
        <div className="container">
          <Link href="/" className="btn-ghost btn" style={{ marginBottom: '2.5rem', display: 'inline-flex', alignItems: 'center', gap: '0.5rem' }}>
            &larr; Volver al inicio
          </Link>
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1rem' }}>{c.industry}</span>
          <h1 className="display" style={{ marginBottom: '1.5rem', fontSize: 'clamp(2.5rem, 6vw, 4.5rem)', maxWidth: '18ch' }}>{c.title}</h1>
          <p style={{ fontSize: 'clamp(1.1rem, 3vw, 1.4rem)', color: 'var(--white)', opacity: 0.85, maxWidth: '700px', lineHeight: 1.6, marginBottom: '4rem' }}>
            {c.valueProposition}
          </p>
          <CaseImage src={c.heroImage.src} alt={c.heroImage.alt} height={520} />
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(160px, 1fr))', gap: '2rem', marginTop: '3rem', padding: '2.5rem', background: 'var(--surf1)', borderRadius: '16px', border: '1px solid var(--border)' }}>
            <div>
              <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.5rem' }}>CLIENTE</span>
              <strong style={{ fontSize: '1rem', color: 'var(--white)' }}>{c.client}</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.5rem' }}>TIMELINE</span>
              <strong style={{ fontSize: '1rem', color: 'var(--white)' }}>{c.timeline}</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.5rem' }}>PLATAFORMAS</span>
              <strong style={{ fontSize: '1rem', color: 'var(--white)' }}>{c.platforms}</strong>
            </div>
            <div>
              <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.08em', color: 'var(--muted)', marginBottom: '0.5rem' }}>RESULTADO CLAVE</span>
              <strong style={{ fontSize: '1rem', color: 'var(--red)' }}>{c.coreOutcome}</strong>
            </div>
          </div>
          <div style={{ display: 'flex', gap: '0.75rem', flexWrap: 'wrap', marginTop: '2rem' }}>
            {c.servicesProvided.map((s, i) => (
              <span key={i} style={{ background: 'var(--red-dim)', color: 'var(--red)', padding: '0.35rem 1rem', borderRadius: '20px', fontSize: '0.8rem', fontWeight: 600 }}>{s}</span>
            ))}
          </div>
        </div>
      </section>

      {/* 2. El problema */}
      <section className="section">
        <div className="container">
          <div style={gridTwo}>
            <div>
              <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1rem' }}>El problema</span>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--white)', opacity: 0.85 }}>{c.problem}</p>
            </div>
            <CaseImage src={c.contextImage.src} alt={c.contextImage.alt} height={380} />
          </div>
        </div>
      </section>

      {/* 3. El insight */}
      <section className="section" style={{ background: 'var(--surf1)' }}>
        <div className="container">
          <div style={gridTwo}>
            <CaseImage src={c.insightImage.src} alt={c.insightImage.alt} height={380} />
            <div>
              <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1rem' }}>El insight</span>
              <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--white)', opacity: 0.85, marginBottom: '2rem' }}>{c.insight}</p>
              <div style={{ padding: '1.5rem 2rem', background: 'var(--red-gradient)', borderRadius: '12px' }}>
                <span style={{ display: 'block', fontSize: '0.7rem', letterSpacing: '0.1em', color: 'rgba(255,255,255,0.7)', marginBottom: '0.75rem' }}>HMW STATEMENT</span>
                <p style={{ fontSize: '1.05rem', fontStyle: 'italic', color: '#fff', lineHeight: 1.6, margin: 0 }}>"{c.hmwStatement}"</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 4. La solucion */}
      <section className="section">
        <div className="container">
          <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1rem' }}>La solucion</span>
          <p style={{ fontSize: '1.15rem', lineHeight: 1.8, color: 'var(--white)', opacity: 0.85, maxWidth: '800px', marginBottom: '3rem' }}>{c.solution}</p>
          <CaseImage src={c.keyScreensImage.src} alt={c.keyScreensImage.alt} height={560} />
          <div style={{ marginTop: '2rem' }}>
            <CaseImage src={c.solutionImage.src} alt={c.solutionImage.alt} height={340} />
          </div>
        </div>
      </section>

      {/* 5. Resultado */}
      <section className="section" style={{ background: 'var(--surf1)' }}>
        <div className="container">
          <div style={{ textAlign: 'center', maxWidth: '700px', margin: '0 auto 4rem' }}>
            <span className="label" style={{ color: 'var(--red)', display: 'block', marginBottom: '1rem' }}>Resultado</span>
            <p style={{ fontSize: '1.4rem', fontStyle: 'italic', lineHeight: 1.6, color: 'var(--white)' }}>{c.clientTestimonial}</p>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '1.5rem', marginBottom: '4rem' }}>
            {c.finalResults.map((r, i) => (
              <div key={i} style={{ padding: '3rem 2rem', textAlign: 'center', background: 'var(--bg)', border: '1px solid var(--border)', borderRadius: '16px' }}>
                <span style={{ display: 'block', fontSize: 'clamp(2rem, 5vw, 3rem)', fontWeight: 800, color: 'var(--red)', marginBottom: '0.75rem', fontFamily: 'var(--font-h)', lineHeight: 1 }}>{r.num}</span>
                <span style={{ fontSize: '0.75rem', color: 'var(--muted)', letterSpacing: '0.06em' }}>{r.label}</span>
              </div>
            ))}
          </div>
          <CaseImage src={c.impactImage.src} alt={c.impactImage.alt} height={420} />
        </div>
      </section>

      {/* CTA */}
      <section className="section" style={{ background: 'var(--red-gradient)', textAlign: 'center' }}>
        <div className="container">
          <h2 className="h2" style={{ marginBottom: '1rem' }}>Tienes un desafio similar?</h2>
          <p style={{ marginBottom: '2.5rem', color: 'var(--white)', opacity: 0.9, fontSize: '1.1rem' }}>Hablemos de como podemos ayudar a tu equipo a crecer con criterio.</p>
          <a href="/#contacto" className="btn btn-ghost" style={{ border: '2px solid white', padding: '1rem 3rem', borderRadius: '30px', fontSize: '1rem', fontWeight: 600 }}>Agendar sesion</a>
        </div>
      </section>

      <Footer />
    </div>
  );
}
