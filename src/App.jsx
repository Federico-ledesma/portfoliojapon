
// css //


// COMPONENTES //
import Navbar from "./components/navbar"
import Inicio from "./components/Inicio"
import SobreMi from "./components/SobreMi"
import Habilidades from "./components/Habilidades"
import Proyectos from "./components/Proyectos"
import Experiencias from "./components/Experiencias"
import Educacion from "./components/Educacion"
import Contacto from "./components/Contacto"
import Footer from "./components/Footer"

function App() {

  return (
    <>

      <Navbar />

      <section id="inicio">
        <Inicio />
      </section>

      <section id="sobremi">
        <SobreMi />
      </section>

      <section id="habilidades">
        <Habilidades />
      </section>

      <section id="proyectos">
       <Proyectos />

      </section>

      <section id="experiencia">
        <Experiencias />
      </section>

      <section id="educacion">
        <Educacion />
      </section>

      <section id="contacto">
        <Contacto />
      </section>

        <Footer />
    </>
  )
}

export default App;
