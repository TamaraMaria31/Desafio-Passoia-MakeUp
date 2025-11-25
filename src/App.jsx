import Header from "./components/header";
import Gallery from "./components/Gallery";
import Product from "./components/Product";
import Novidades from "./components/Novidades";
import Footer from "./components/Footer";

export default function App() {
  return (
    <div className="page">
      <Header />

      {/* Banner */}
      <div className="banner-wrap">
        <img src="/IMG/Banner.jpg" alt="banner" className="banner" />
      </div>

      <main>
        <section>
          <h2 className="section-title">LOOKS E DICAS DE MAQUIAGEM</h2>
          <Gallery />
        </section>

        <section>
          <h2 className="section-title">APROVEITE OS LANÇAMENTOS</h2>
          <Product />
        </section>

        
        <Novidades />
      </main>

    
      <Footer />
    </div>
  );
}



