import { useState } from "react";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./views/Home";
import "./index.css";

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
