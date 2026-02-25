import Preloader from "@/components/Preloader";
import ScrollyCanvas from "@/components/ScrollyCanvas";
import Overlay from "@/components/Overlay";
import Navbar from "@/components/Navbar";
import HomeContent from "@/components/HomeContent";

export default function Home() {
  return (
    <main className="bg-black min-h-screen">

      <Navbar />

      {/* Scroll Sequence Container */}
      <div className="relative">
        <ScrollyCanvas />
        <Overlay />
      </div>

      <HomeContent />
    </main>
  );
}
