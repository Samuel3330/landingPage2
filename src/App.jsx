import Aboutus from "./Components/Aboutus";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Help from "./Components/Help";
import Hero from "./Components/Hero";
import Work from "./Components/Work";
import { useState } from "react";
import "./Components/css/spinner.css";

function App() {
  const [loading, setLoading] = useState(true);
  window.onload = () => {
    setLoading(false);
  };

  return (
    <section>
      {loading ? (
        <div className="w-full h-[100vh] flex justify-center items-center">
          <div className="spinner"></div>
        </div>
      ) : (
        <>
          <Header />
          <Hero />
          <Work />
          <Help />
          <Aboutus />
          <Footer />
        </>
      )}
    </section>
  );
}

export default App;
