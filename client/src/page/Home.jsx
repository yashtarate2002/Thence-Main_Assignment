import FAQs from "../components/Main/FAQs";
import Footer from "../components/Main/Footer";
import Hero from "../components/Main/Hero.jsx";
import Navbar from "../components/Main/Navbar.jsx";

export default function Home() {
  return (
    <>
     <div style={{backgroundColor:'white'}}>
     <Navbar />
      <Hero />
      <FAQs />
      <Footer />
     </div>
    </>
  );
}
