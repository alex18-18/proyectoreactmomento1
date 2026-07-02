import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

function Home() {
  return (
    <main>
      <Hero />

      <section id="catalogo" className="catalog">
        <div className="catalog__header">
          <h2>Catlogo</h2>
          <p>{products.length} productos disponibles</p>
        </div>

        <div className="catalog__grid">
          {products.map((producto) => (
            <ProductCard key={producto.id} producto={producto} />
          ))}
        </div>
      </section>
    </main>
  );
}

export default Home;
