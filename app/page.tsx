import StickyBand from '@/components/StickyBand';
import Nav from '@/components/Nav';
import Hero from '@/components/Hero';
import LogosBar from '@/components/LogosBar';
import Pain from '@/components/Pain';
import WhyCrisva from '@/components/WhyCrisva';
import Process from '@/components/Process';
import Services from '@/components/Services';
import Cases from '@/components/Cases';
import Testimonials from '@/components/Testimonials';
import Team from '@/components/Team';
import FAQ from '@/components/FAQ';
import FinalCTA from '@/components/FinalCTA';
import Footer from '@/components/Footer';

export default function Page() {
  return (
    <main>
      <StickyBand />
      <Nav />
      <Hero />
      <LogosBar />
      <Pain />
      <WhyCrisva />
      <Process />
      <Services />
      <Cases />
      <Testimonials />
      <Team />
      <FAQ />
      <FinalCTA />
      <Footer />
    </main>
  );
}
