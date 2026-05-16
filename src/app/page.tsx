import Navbar from "@/components/Navbar";
import SequenceScroll from "@/components/SequenceScroll";
import Footer from "@/components/Footer";
import Menu from "@/components/Menu";
import Location from "@/components/Location";

export default function Home() {
  return (
    <main className="bg-black text-white selection:bg-white selection:text-black">
      <Navbar />
      
      <div id="home">
        <SequenceScroll />
      </div>

      {/* 
        Stabilized the transition between the hero and content by using a fixed
        negative margin instead of a viewport-relative one, which prevents gaps
        when the mobile address bar hides.
      */}
      <div className="relative z-10 -mt-32 bg-background">
        <Menu />
        <Location />
        <Footer />
      </div>
    </main>
  );
}
