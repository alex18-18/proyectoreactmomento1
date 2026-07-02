function Footer() {
  const anio = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer__col">
        <span className="footer__brand">Cacao &amp; Co.</span>
        <p>Chocolate de origen colombiano, hecho en pequeños lotes.</p>
      </div>

      <div className="footer__col">
        <h4>Explorar</h4>
        <a href="#catalogo">Catálogo</a>
        <a href="#origenes">Orígenes</a>
        <a href="#nosotros">Nosotros</a>
      </div>

      <div className="footer__col">
        <h4>Contacto</h4>
        <a href="mailto:hola@cacaoyco.co">hola@cacaoyco.co</a>
        <a href="tel:+573000000000">+57 300 000 0000</a>
      </div>

      <p className="footer__bottom">© {anio} Cacao & Co. Proyecto académico — Momento 1.</p>
    </footer>
  );
}

export default Footer;
