// ProductCard es un componente "hijo": no conoce el arreglo completo,
// solo recibe UN producto por props y lo renderiza.
function ProductCard({ producto }) {
  const { nombre, origen, porcentaje, notas, precio, color, destacado } = producto;

  const precioFormateado = precio.toLocaleString("es-CO", {
    style: "currency",
    currency: "COP",
    maximumFractionDigits: 0,
  });

  return (
    <article className="product-card">
      <div className="product-card__swatch" style={{ background: color }}>
        <span className="product-card__percent">{porcentaje}%</span>
        {destacado && <span className="product-card__tag">Destacado</span>}
      </div>

      <div className="product-card__body">
        <h3 className="product-card__title">{nombre}</h3>
        <p className="product-card__origin">Origen: {origen}</p>

        <ul className="product-card__notes">
          {notas.map((nota) => (
            <li key={nota}>{nota}</li>
          ))}
        </ul>

        <div className="product-card__footer">
          <span className="product-card__price">{precioFormateado}</span>
          <button className="product-card__btn" type="button">
            Añadir
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProductCard;
