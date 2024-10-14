import InfiniteScroll from "@/components/custom/InfiniteScroll";
import Process from "@/components/custom/Process";
import Creations from "@/components/custom/Creations";
import Services from "@/components/custom/Services";
import Hero from "@/components/custom/Hero";
import FooterCTA from "@/components/custom/Cta-footer";
import Footer from "@/components/custom/Footer";

export default function Home() {
  return (
      <>
          <Hero/>
          <InfiniteScroll/>
          <Process/>
          <Creations/>
          <Services/>
          <FooterCTA/>
          <Footer/>
      </>
  );
}
