# Movies App con Next.js (SSR)

- Autora: Ángela López Oliva 
- Asignatura: Desarrollo Frontend con Frameworks (React)

---

## Descripción

Este proyecto consiste en el desarrollo de una aplicación web de películas utilizando Next.js con App Router.
La aplicación permite a los usuarios explorar películas populares, consultar detalles y realizar búsquedas.

A diferencia de la versión SPA, esta implementación utiliza renderizado en servidor (SSR), lo que mejora el rendimiento y la carga inicial de la aplicación.

---

## Funcionalidades

* Visualización de películas populares
* Búsqueda de películas por título
* Página de detalle de cada película
* Navegación entre páginas
* Renderizado en servidor (SSR)
* Consumo de API externa (The Movie Database - TMDB)

---

## Tecnologías utilizadas

* Next.js (App Router)
* React
* JavaScript (ES6+)
* Fetch API
* CSS
* TMDB API

---

## Estructura del proyecto

```bash
app/
│
├── page.js                  # Página principal (Home)
├── layout.js                # Layout global
├── globals.css              # Estilos globales
│
├── movie/
│   └── [id]/
│       └── page.js          # Página de detalle de película
│
├── search/
│   └── page.js              # Página de búsqueda
│
components/
│   └── MovieCard.jsx        # Tarjeta de película
│
services/
│   └── api.js               # Llamadas a la API
```

---

## API utilizada

Se ha utilizado la API de The Movie Database (TMDB):

https://www.themoviedb.org/

Para su uso es necesario:

1. Crear una cuenta
2. Obtener una API Key
3. Añadirla en `services/api.js`


---

## Instalación

```bash
npm install
```

---

## Ejecución del proyecto

```bash
npm run dev
```

Abrir en el navegador:

```bash
http://localhost:3000
```

---

## Uso de la aplicación

* `/` → Muestra películas populares
* `/search` → Permite buscar películas
* `/movie/:id` → Muestra el detalle de una película

---

## Renderizado en servidor (SSR)

Este proyecto utiliza Server Components de Next.js, lo que permite:

* Obtener datos directamente en el servidor
* Reducir el uso de useEffect
* Mejorar el rendimiento
* Cargar contenido más rápido

Ejemplo:

```js
export default async function Home() {
  const data = await getPopularMovies();
}
```

---

## Decisiones técnicas

* Uso de App Router en lugar de Pages Router
* Separación de la lógica en `services/api.js`
* Uso de componentes reutilizables (`MovieCard`)
* Manejo de rutas dinámicas (`[id]`)
* Uso de `await params` y `await searchParams` en Next.js moderno

---

## Notas

Este proyecto cumple con los requisitos de la práctica:

* Uso de Next.js
* Implementación de rutas con App Router
* Renderizado SSR
* Consumo de API externa
* Navegación entre páginas

---
