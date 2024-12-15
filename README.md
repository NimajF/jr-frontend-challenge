# Red Atlas Challenge - Frontend
### Este proyecto es una aplicación web desarrollada con React y TypeScript utilizando Vite. Es parte de un challenge técnico para gestionar propiedades, permitiendo su creación, edición, y visualización, con funcionalidades como filtros, ordenamiento y paginación.

### Navegar en la App
[![Ir a la branch del código](https://img.shields.io/badge/SITIO--WEB-CLICK--AQUI-emerald?style=for-the-badge)](https://red-atlas-challenge-junior.vercel.app)

* Explora propiedades con búsqueda, filtros y ordenamiento por precio.
* Registra nuevas propiedades con imágenes, descripciones, y más.
* Modifica las propiedades existentes.
* Carga más propiedades dinámicamente con un botón "Cargar Más".
* Visualiza las coordenadas de las propiedades en un mapa dinámico.
  <br>
<b>PD: Para editar/eliminar una propiedad solo podrán aquellas creadas por el usuario o las se encuentren bajo el nombre del propietario "benjamin-francisco" ```"owner": {
    "name": "benjamin-francisco",
    "contact": "bf@example.com"
  }```</b>

# ⚙️ Instalación y configuración
Sigue estos pasos para clonar y ejecutar el proyecto en tu entorno local:

1. Clonar el repositorio
```
git clone https://github.com/NimajF/red-atlas-challenge.git
cd red-atlas-challenge
```
2. Instalar dependencias
```
npm install
```
3. Ejecutar el proyecto en modo desarrollo
```
npm run dev
```
Abre tu navegador y accede a http://localhost:5173 para ver la aplicación.

### 🔧 Configuración del entorno (Opcional)
El proyecto utiliza una API pública por defecto. Si necesitas usar una URL personalizada, puedes configurarla en el archivo src/helpers/helpers.ts:

typescript
```
const API_BASE_URL = "https://fake-api-listings.vercel.app";
```

# React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
