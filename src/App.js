import Footer from "./components/Footer";
import Hero from "./components/Hero";
import ItemListContainer from "./components/ItemListContainer";
import NavBar from "./components/NavBar";

function App() {
  return (
    <>
      <NavBar />
      <Hero />
      <ItemListContainer greeting={"Estos no son los droides que están buscando - No hay productos para mostrar"} />
      <Footer />
    </>
    
  );
}

export default App;
