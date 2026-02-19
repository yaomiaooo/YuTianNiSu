import Navbar from './components/Navbar';
import Hero from './sections/Hero';
import Introduction from './sections/Introduction';
import History from './sections/History';
import Craftsmanship from './sections/Craftsmanship';
import Features from './sections/Features';
import Gallery from './sections/Gallery';
import Inheritors from './sections/Inheritors';
import Protection from './sections/Protection';
import Footer from './sections/Footer';

function App() {
  return (
    <div className="min-h-screen bg-primary-bg">
      <Navbar />
      <main>
        <Hero />
        <Introduction />
        <History />
        <Craftsmanship />
        <Features />
        <Gallery />
        <Inheritors />
        <Protection />
      </main>
      <Footer />
    </div>
  );
}

export default App;
