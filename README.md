# Portal de Seguridad ENS & Proveedores

Aplicación web React + Vite + Tailwind CSS para gestionar la documentación de seguridad, proveedores, vulnerabilidades, inventario y anexos de la Guía de Seguridad (ENS v0.2).

## Características Principales
* **Dashboard Ejecutivo:** Métricas en tiempo real de proveedores, vulnerabilidades y estado del Anexo I.
* **Gestión de Proveedores y Cierre:** Fichas interactivas, checklist de controles del Anexo A.1 y certificados de destrucción.
* **Vulnerabilidades y SLA:** Seguimiento de parches, severidades (Crítica, Alta, Media, Baja) y plazos internos.
* **Inventario TIC y Solicitudes (Anexo H):** Control de activos y aprobación de software en portátiles corporativos.
* **GitLab y OpenShift RBAC:** Matriz nominal de accesos y control de logs.
* **Generador de Anexos (A–H + Cierre):** Visor interactivo y exportación a PDF / impresión directa.
* **Persistencia Local y Backup:** Almacenamiento automático en `localStorage` y opción de exportar/importar respaldos en JSON.

---

## Publicación en GitHub Pages

El repositorio publica la aplicación en GitHub Pages cada vez que se actualiza la rama `main`. En GitHub, configura **Settings → Pages → Build and deployment → Source: GitHub Actions**. La aplicación estará disponible en:

<https://rfpoeitss.github.io/guia_seguridad/>

El portal es público y no tiene autenticación. Los datos se guardan en el `localStorage` del navegador y no se comparten entre usuarios ni dispositivos. No introduzcas información real, confidencial o personal en el sitio público.

## Cómo ejecutarlo localmente o compilarlo

### 1. Requisitos previos
* [Node.js](https://nodejs.org/) (versión 18 o superior recomendada).

### 2. Instalación local y desarrollo
```bash
# Instalar dependencias
npm install

# Iniciar servidor de desarrollo en http://localhost:5173
npm run dev
```

### 3. Compilación para producción (Nginx, Apache, Vercel, Netlify u otros)
```bash
# Generar archivos estáticos en la carpeta dist/
npm run build
```
Los archivos generados en `dist/` son puramente estáticos y se pueden servir directamente desde cualquier servidor web (como Nginx o Apache) o subir a plataformas Cloud (Vercel, Netlify, AWS S3, GitHub Pages).
