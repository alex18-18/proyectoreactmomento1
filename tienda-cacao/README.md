# Cacao & Co. — Momento 1

Proyecto React inicializado con **Vite**. Tienda simulada de chocolate de origen colombiano.

## Cómo correrlo

```bash
npm install
npm run dev
```

Abre la URL que muestra la terminal (por defecto `http://localhost:5173`).

## Estructura

```
src/
├── assets/          # imágenes/recursos estáticos
├── components/      # componentes reutilizables
│   ├── Navbar.jsx
│   ├── Hero.jsx
│   ├── ProductCard.jsx
│   └── Footer.jsx
├── data/
│   └── products.js  # mock data (arreglo de productos)
├── views/
│   └── Home.jsx      # vista principal: arma el catálogo
├── App.jsx           # raíz: Navbar + Home + Footer
└── index.css
```

## Árbol de componentes

```
App
 ├─ Navbar        (recibe cartCount por props)
 ├─ Home
 │   ├─ Hero
 │   └─ ProductCard × N   (uno por producto del mock data, vía props)
 └─ Footer
```

## Entregables cubiertos

1. **Proyecto React inicializado**: Vite + estructura de carpetas (`components`, `assets`, `views`, `data`).
2. **Árbol de componentes**: interfaz dividida en `Navbar`, `Hero`, `ProductCard`, `Footer`, en vez de un solo archivo.
3. **Gestión de estado y props**: el mock data vive en `src/data/products.js`, se importa en el componente padre `Home.jsx` y se reparte a cada `ProductCard` mediante props (`producto={producto}`). `Navbar` también recibe `cartCount` por props desde `App`.
