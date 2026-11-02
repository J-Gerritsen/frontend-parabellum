import Hero from "@/components/home/Hero";
import TrustBar from "@/components/home/TrustBar";
import Features from "@/components/home/Features";
import Footer from "@/components/layout/Footer";

export default function HomePage() {
  return (
      <main className="min-h-screen bg-[#202020]">
        <Hero />
        <TrustBar />
        <Features />
        <Footer />
      </main>
  );
}