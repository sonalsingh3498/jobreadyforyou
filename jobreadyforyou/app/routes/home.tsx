import type { Route } from "./+types/home";
import { Welcome } from "../welcome/welcome";
import Navbar from '../../src/components/Navbar';
import HeroSection from "../../src/components/HeroSection";

// export function meta({}: Route.MetaArgs) {
//   return [
//     { title: "New React Router App" },
//     { name: "description", content: "Welcome to React Router!" },
//   ];
// }

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
