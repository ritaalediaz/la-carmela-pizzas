import Layout from "./components/Layout";
import Header from "./components/Header";
import Hero from "./components/Hero";
import QuienesSomos from "./components/QuienesSomos";
import Productos from "./components/Productos";
import Contacto from "./components/Contacto";
import Footer from "./components/Footer";

import "./assets/styles/Header.css";
import "./assets/styles/Hero.css";
import "./assets/styles/QuienesSomos.css";
import "./assets/styles/Productos.css";
import "./assets/styles/Contacto.css";
import "./assets/styles/Footer.css";
import "./assets/styles/Layout.css";

function App() {
  return (
    <Layout>
      <Header />
      <Hero />
      <QuienesSomos />
      <Productos />
      <Contacto />
      <Footer />
    </Layout>
  );
}

export default App;

