import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Companies from './components/Companies/Companies';
import Pricing from './components/Pricing/Pricing';
import Contact from "./components/Contact/Contact";
import Join from "./components/Join/Join";

function App() {
  return (
    <div className="app">
      <Pricing />
      <Companies />
      <Contact />
      <Join />
    </div>
  );
}

export default App;
