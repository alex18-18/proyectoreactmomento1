function Hero() {
  return (
    <section className="hero">
      <div className="hero__text">
        <p className="hero__eyebrow">Lote 006 · Cosecha 2026</p>
        <h1 className="hero__title">
          Del árbol de cacao <br /> a tu mesa.
        </h1>
        <p className="hero__subtitle">
          Trabajamos directamente con productores de Tumaco, Arauca y Santander
          para transformar cacao fino de aroma en barras de tueste pequeño.
        </p>
        <a className="hero__cta" href="#catalogo">
          Ver catálogo
        </a>
      </div>

      <div className="hero__visual" aria-hidden="true">
        <div className="hero__pod hero__pod--1" />
        <div className="hero__pod hero__pod--2" />
        <div className="hero__pod hero__pod--3" />
      </div>
    </section>
  );
}

export default Hero;
