import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import "./index.css";

// App es la raíz del árbol de componentes:
// App
//  ├─ Navbar
//  ├─ Home
//  │   ├─ Hero
//  │   └─ ProductCard (uno por cada producto del mock data)
//  └─ Footer
function App() {
  const [cartCount] = useState(0);

  return (
    <div className="app">
      <Navbar cartCount={cartCount} />
      <Home />
      <Footer />
    </div>
  );
}

export default App;
