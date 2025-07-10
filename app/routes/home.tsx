import Navbar from '../components/Navbar';
import HeroSection from "../components/HeroSection";


export default function Home() {
   return (
    <div className="bg-black min-h-screen text-white font-sans">
     <div className="bg-black pt-8">
  <Navbar />
</div>
      <HeroSection />
    </div>
  );
}
