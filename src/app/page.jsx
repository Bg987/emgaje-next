import Navbar from "./components/Navbar";
import Testimonials from "./components/Testimonials";
import HeroSection from "./components/Herosection";
import FeatureCard from "./components/Featurecard";
import Footer from "./components/Footer";
import { features } from "./data";

export default function HomePage() {
  return (
    <div>
      <Navbar />
      <HeroSection />
      <section id="features" className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 p-6">
        {features.map((f) => (
          <FeatureCard key={f.id} {...f} />
        ))}
      </section>
      <Testimonials />
      <Footer />
    </div>
  );
}
