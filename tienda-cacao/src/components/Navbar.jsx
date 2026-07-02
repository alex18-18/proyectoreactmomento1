// Componente de presentación: no maneja datos propios,
// recibe la cantidad de items del carrito por props.
function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__mark">●</span>
        <span className="navbar__name">Cacao&nbsp;&amp;&nbsp;Co.</span>
      </div>

      <nav className="navbar__links">
        <a href="#catalogo">Catálogo</a>
        <a href="#origenes">Orígenes</a>
        <a href="#nosotros">Nosotros</a>
      </nav>

      <button className="navbar__cart" type="button">
        Carrito
        <span className="navbar__cart-count">{cartCount}</span>
      </button>
    </header>
  );
}

export default Navbar;
