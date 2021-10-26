// css
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";

// components
import Companies from "./components/Companies/Companies";
import Pricing from "./components/Pricing/Pricing";
import Contact from "./components/Contact/Contact";
import Join from "./components/Join/Join";
import Gallery from "./components/Gallery/Gallery";

function App() {
  return (
    <div className="app">
      <Pricing />
      <Join />
      <Gallery />
      <Contact />
      <Companies />
    </div>
  );
}

export default App;
