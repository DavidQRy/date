import Navbar from '../components/landing/NavBar';
import Hero from '../components/landing/Hero';
import Funcionalidades from '../components/landing/funcionalidades';
import PorQueDate from '../components/landing/Beneficios';
import CTA from '../components/landing/CTA';
import Footer from '../components/landing/Footer';

const brand = '#c96a3f';
const brandHover = '#b85e36';
const pageBg = '#f5f1eb';
const cardBg = '#faf8f4';
const borderColor = '#ddd8cf';
const serif = "'Instrument Serif', serif";

export function LandingPage() {
  return (
    <div className='min-h-screen' style={{ background: pageBg, fontFamily: 'Geist, sans-serif' }}>
      <Navbar />

      <main>
        <Hero brand={brand} brandHover={brandHover} serif={serif} />

        <div id='funcionalidades'>
          <Funcionalidades />
        </div>

        <PorQueDate />

        <CTA brand={brand} serif={serif} pageBg={pageBg} />
      </main>

      <Footer cardBg={cardBg} borderColor={borderColor} />
    </div>
  );
}
