// Mock data: catálogo simulado de la tienda "Cacao & Co."
// En un proyecto real esto vendría de una API, pero para el Momento 1
// lo simulamos como un arreglo de objetos en el componente padre.

const products = [
  {
    id: 1,
    nombre: "Barra 70% Origen Tumaco",
    origen: "Tumaco, Nariño",
    porcentaje: 70,
    notas: ["frutos rojos", "caramelo", "madera"],
    precio: 24000,
    color: "#1F5E4A",
    destacado: true,
  },
  {
    id: 2,
    nombre: "Barra 85% Intenso",
    origen: "Arauca",
    porcentaje: 85,
    notas: ["café tostado", "nuez", "especias"],
    precio: 27000,
    color: "#15201B",
    destacado: false,
  },
  {
    id: 3,
    nombre: "Barra con Leche 45%",
    origen: "Santander",
    porcentaje: 45,
    notas: ["miel", "vainilla", "panela"],
    precio: 22000,
    color: "#E8643C",
    destacado: false,
  },
  {
    id: 4,
    nombre: "Barra Blanca con Maracuyá",
    origen: "Huila",
    porcentaje: 30,
    notas: ["maracuyá", "cítricos", "cremoso"],
    precio: 25000,
    color: "#F2A03D",
    destacado: true,
  },
  {
    id: 5,
    nombre: "Barra 60% con Ají",
    origen: "Cauca",
    porcentaje: 60,
    notas: ["ají amazónico", "cacao tostado", "picante"],
    precio: 26000,
    color: "#3E9C7A",
    destacado: false,
  },
  {
    id: 6,
    nombre: "Trufas Surtidas x6",
    origen: "Mezcla de orígenes",
    porcentaje: 55,
    notas: ["avellana", "café", "coco"],
    precio: 32000,
    color: "#1F5E4A",
    destacado: true,
  },
];

export default products;
