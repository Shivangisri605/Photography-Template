import Navbar from '@/components/Navbar';
import HeroSection from '@/components/HeroSection';
import AboutSection from '@/components/AboutSection';
import PortfolioSection from '@/components/PortfolioSection';
import GallerySection from '@/components/GallerySection';
import ContactSection from '@/components/ContactSection';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <main className="w-full bg-cover bg-center bg-no-repeat bg-fixed" style={{ backgroundImage: 'url(/bg27.jpg)' }}>
      <Navbar />
      <HeroSection />
      <AboutSection />
      <PortfolioSection />
      <GallerySection />
      <ContactSection />
      <Footer />
    </main>
  );
}
