import Hero from "../components/Hero";
import ProductCard from "../components/ProductCard";
import products from "../data/products";

// Home es el componente "padre" de esta vista: aquí vive el mock data
// (importado de src/data/products.js) y se reparte a cada <ProductCard />
// por medio de props. ProductCard no sabe nada del arreglo completo.
function Home() {
  return (
    <main>
      <Hero />

      <section id="catalogo" className="catalog">
        <div className="catalog__header">
          <h2>Catálogo</h2>
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
