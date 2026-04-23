# Portafolio Samuel - Jekyll

Un portafolio profesional moderno y responsivo construido con Jekyll. Perfecto para mostrar tus proyectos en entrevistas de trabajo.

## 🚀 Instalación Rápida

### 1. **Clonar o descargar este repositorio**

```bash
git clone https://github.com/tu-usuario/portafolio.git
cd portafolio
```

### 2. **Instalar dependencias**

```bash
bundle install
```

### 3. **Ejecutar en local**

```bash
bundle exec jekyll serve
```

Luego abre `http://localhost:4000` en tu navegador.

---

## 📝 Personalización

### **Configuración General** (`_config.yml`)

Edita estos campos con tu información:

```yaml
title: Samuel's Portfolio          # Tu nombre
email: tu-email@example.com        # Tu email
description: Descripción corta     # Breve descripción
github_username: tu-github         # Tu usuario de GitHub
linkedin_username: tu-linkedin     # Tu usuario de LinkedIn
```

### **Página de Inicio** (`index.html`)

1. Abre el archivo `index.html`
2. Cambia el hero section con tu nombre y descripción
3. Reemplaza los proyectos de ejemplo con tus proyectos reales

**Estructura de un proyecto:**

```html
<div class="project-card">
  <h3>Nombre del Proyecto</h3>
  <p>Descripción corta de lo que hace</p>
  <div class="tech">
    <span class="tech-tag">Tecnología1</span>
    <span class="tech-tag">Tecnología2</span>
  </div>
  <div class="project-links">
    <a href="URL-GITHUB" class="btn btn-primary" target="_blank">Ver Código</a>
    <a href="URL-DEMO" class="btn btn-secondary">Demo</a>
  </div>
</div>
```

### **Página About** (`about.markdown`)

Edita:
- Tu descripción personal
- Tu experiencia
- Tus habilidades
- Tu información de contacto

---

## 📦 Desplegar en GitHub Pages

### **Opción 1: Automático con GitHub Actions**

1. Crea un repositorio en GitHub con el nombre: `tu-usuario.github.io`
2. Push tu código:

```bash
git add .
git commit -m "Initial commit"
git push origin main
```

3. GitHub Pages se desplegará automáticamente en `https://tu-usuario.github.io`

### **Opción 2: Manual**

1. Genera el sitio estático:

```bash
bundle exec jekyll build
```

2. Sube el contenido de `_site/` a tu hosting

---

## 🎨 Personalizar Estilos

Los estilos están en `assets/css/style.scss`. Puedes cambiar:

```scss
:root {
  --primary: #2563eb;        /* Color principal (azul) */
  --primary-dark: #1e40af;   /* Color oscuro */
  --text: #1f2937;           /* Texto principal */
  --text-light: #6b7280;     /* Texto secundario */
  --bg: #ffffff;             /* Fondo */
  --bg-light: #f9fafb;       /* Fondo claro */
}
```

---

## 📂 Estructura del Proyecto

```
portafolio/
├── _config.yml          # Configuración principal
├── Gemfile              # Dependencias Ruby
├── index.html           # Página de inicio
├── about.markdown       # Página About
├── assets/
│   └── css/
│       └── style.scss   # Estilos personalizados
├── _posts/              # Blog posts (opcional)
└── _includes/           # Componentes reutilizables
```

---

## 🚨 Troubleshooting

### Error: "Could not find gem 'jekyll'"

```bash
bundle install
```

### El sitio no se actualiza

Detén el servidor (Ctrl+C) y ejecuta:

```bash
bundle exec jekyll serve --livereload
```

### Ports ocupados

Si el puerto 4000 está en uso:

```bash
bundle exec jekyll serve --port 3000
```

---

## ✨ Tips Profesionales

1. **Mantén el contenido actualizado** - Actualiza tus proyectos regularmente
2. **Agrega descripciones claras** - Explica qué hace cada proyecto y qué tecnologías usaste
3. **Links funcionales** - Asegúrate que todos los links a GitHub y demos funcionan
4. **Mobile-first** - Verifica que se vea bien en móvil (ya está optimizado)
5. **SEO** - Los meta tags están configurados para buen SEO

---

## 📄 Licencia

Este proyecto es tuyo. Úsalo como quieras.

---

¿Preguntas? Abre un issue en GitHub o contacta directamente.

¡Buena suerte en tus entrevistas! 🚀
