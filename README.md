# E-commerce PWA con `<espe-login-card>`

Esta es una Progressive Web App (PWA) desarrollada con Vite, TypeScript y Lit, utilizando el componente Web `<espe-login-card>` del repositorio [ecommerce-espe-gc](https://github.com/AndresPantoja004/ecommerce-espe-gc/tree/feature/login). La aplicación ofrece una interfaz de inicio de sesión y muestra una lista de productos tras una autenticación exitosa, con soporte para funcionamiento offline e instalación en dispositivos.


## ✨ Características

- **Interfaz de Inicio de Sesión**: Utiliza `<espe-login-card>` para autenticación con campos de correo y contraseña, emitiendo un evento `login-submit`.
- **Listado de Productos**: Muestra una lista de productos simulada tras un login exitoso (extensible a una API real como [Fake Store API](https://fakestoreapi.com/)).
- **Funcionalidades PWA**:
  - Instalable en dispositivos con modo `standalone`.
  - Soporte offline mediante Service Worker con estrategia "Cache First".
  - Diseño responsivo con soporte para temas claro/oscuro (`prefers-color-scheme`).
- **Tecnologías**: Vite, TypeScript, Lit y Web Components.

## 🚀 Instrucciones de Configuración

1. **Clonar el Repositorio**:
   ```bash
   git clone <tu-repositorio-git>
   cd ecommerce-espe-gc
   ```
2. **Instalar Dependencias**:
    ```bash
    npm install
    ```


3. Iniciar el Servidor de Desarrollo:

    ```bash
    npm run dev
    ```

4. Abre http://localhost:5173 en tu navegador.

5. Compilar para Producción:
    ```bash
    npm run build
    ```

## 🚀 Previsualizar la Compilación
```bash
npm run preview
```

## 🔧 Cambios Implementados

Fase 2: Desarrollo de la Aplicación  
Estructura del proyecto organizada en carpetas `src/components/`, `src/logic/` y `src/styles/`. Se copió el componente `<espe-login-card>` a `src/components/espe-login.ts` y se creó la carpeta `public/` para activos de la PWA (manifiesto, Service Worker, íconos).  
En `src/logic/app.ts` se implementó la clase `AppLogic` para gestionar autenticación y obtención de productos. El método `login` valida correo y contraseña actualizando el estado de autenticación, mientras que `fetchProducts` devuelve datos simulados de productos (extensible a una API real), manteniendo la lógica independiente de la interfaz para mayor modularidad.  

En la interfaz de usuario, se actualizó `index.html` para incluir `<espe-login-card>`, una sección de productos y el enlace al manifiesto PWA. Se creó `src/main.ts` para conectar el evento `login-submit` de `<espe-login-card>` con `AppLogic`, mostrando productos tras un login exitoso. Los estilos inline se movieron a `src/styles/main.css` para estilos globales y se corrigió la sintaxis de `src/components/espe-login.ts` moviendo `@query` y `handleSubmit` dentro de la clase.

## Funcionalidades PWA  
Se definió el manifiesto web `public/manifest.json` con propiedades: `name`, `short_name`, `start_url`, `display: standalone`, `background_color`, `theme_color` e íconos (192x192 y 512x512). Fue enlazado en `index.html` con `<link rel="manifest" href="/manifest.json">`.  
En `public/sw.js` se programó el evento `install` para almacenar en caché el "Application Shell" (`index.html`, `main.css`, `main.ts`, `espe-login.ts`, íconos, manifiesto) y el evento `fetch` usando la estrategia **Cache First** para soporte offline. El registro del Service Worker se hizo en `main.ts` mediante `navigator.serviceWorker.register`.

## Despliegue  
El proyecto se subió a un repositorio de GitHub y se conectó a Netlify.  
- Comando de compilación: `npm run build`  
- Directorio de publicación: `dist`  
- Desplegado en: `https://tu-sitio.netlify.app` (reemplazar con la URL real).  

Pruebas finales:  
- Verificada la instalabilidad en Chrome, Edge y navegadores móviles.  
- Probado el funcionamiento offline con Chrome DevTools (Application > Service Workers > Offline).  
- Confirmado que `<espe-login-card>` y la lista de productos funcionan correctamente, incluyendo cambio de tema claro/oscuro.

## 📱 Uso
1. Abrir la aplicación e ingresar un correo y contraseña en `<espe-login-card>`.
2. Al iniciar sesión correctamente, se oculta el formulario y aparece la lista de productos.
3. La aplicación es instalable y funciona offline, sirviendo recursos cacheados.
