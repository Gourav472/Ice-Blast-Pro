import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.min.js';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import Cleaning from './components/Cleaning';
import Understanding from './components/Understanding';
import Blasting from './components/Blasting';
import Scenes from './components/Scenes';
import Numbers from './components/Numbers';
import Team from './components/Team';
import Work from './components/Work';
import Faqs from './components/Faqs';
import Prime from './components/Prime';
import News from './components/News';
import Mail from './components/Mail';
import Footer from './components/Footer';
function App() {
  return (
    <>
      <header className=' header-bg header-height py-header '>
        <Navbar />
        <Hero />
      </header>
      <Cleaning />
      <Understanding />
      <Blasting />
      <Scenes />
      <Numbers />
      <Work />
      <Team />
      <Faqs/>
      <Prime/>
      <News/>
      <Mail/>
      <Footer/>
    </>
  );
}

export default App;
