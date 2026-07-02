function Navbar({ cartCount }) {
  return (
    <header className="navbar">
      <div className="navbar__brand">
        <span className="navbar__mark">●</span>
        <span className="navbar__name">Cacao&nbsp;&amp;&nbsp;Co.</span>
      </div>

      <nav className="navbar__links">
        <a href="#catalogo">Catalogo</a>
        <a href="#origenes">Origenes</a>
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
