# 📚 Librería React

Este proyecto es una aplicación de biblioteca desarrollada con React.
Permite a los usuarios explorar libros, ver detalles, rentar libros y
gestionar los libros rentados.

## ✨ Características

-   Inicio: Página principal con lista de libros y filtrado por
    categorías.
-   Detalle del Libro: Información detallada de cada libro con opción
    para rentar.
-   Libros Rentados: Modal para visualizar y gestionar los libros
    rentados.
-   Persistencia: Los libros rentados se guardan en localStorage.

## 📁 Estructura del Proyecto

    public/
      ├── index.html
      ├── manifest.json
      └── robots.txt

    src/
      ├── components/
      │   ├── card/
      │   │   ├── card.jsx
      │   │   └── card.css
      │   ├── ficha/
      │   │   ├── bookDetail.jsx
      │   │   └── bookDetail.css
      │   └── header/
      │       ├── index.jsx
      │       └── header.css
      │
      ├── layout/
      │   └── desktop.js
      │
      ├── data/
      │   └── books.js
      │
      ├── pages/
      │   ├── inicio/
      │   │   ├── index.jsx
      │   │   └── inicio.css
      │   ├── acerca-de-nosotros/
      │   │   └── index.jsx
      │   ├── book-detail/
      │   │   └── index.jsx
      │   └── rentados/
      │       └── index.jsx
      │
      ├── App.js
      └── index.js

## 📜 Scripts Disponibles

npm start

Inicia la aplicación en modo de desarrollo.

npm test

Ejecuta las pruebas en modo interactivo.

npm run build

Construye la aplicación para producción en la carpeta build.

## 🛠 Instalación

1.  Clona este repositorio.
2.  Ejecuta npm install para instalar las dependencias.
3.  Ejecuta npm start para iniciar la aplicación.

##🧰 Tecnologías Utilizadas

-   React
-   React Router
-   CSS
-   LocalStorage

