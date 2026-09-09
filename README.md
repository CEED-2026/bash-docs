# BASH Fundamentos

Manual y guía de Bash Scripting.

## Desarrollo local

```bash
# Instalar dependencias
yarn install

# Iniciar servidor de desarrollo
yarn docs:dev
```

El sitio estará disponible en `http://localhost:5173/bash-docs/solved-exercises/`

## Build de producción

```bash
yarn docs:build
```

## Preview del build

```bash
yarn docs:preview
```

## Deploy a GitHub Pages

El sitio está configurado para desplegarse en `https://CEED-2026.github.io/bash-docs/`.

```bash
yarn deploy
```

Este comando:
1. Ejecuta `docs:build` para generar el sitio estático en `.vitepress/dist`
2. Usa `gh-pages` para publicar el contenido en la rama `gh-pages` del repositorio

### Configuración requerida

- `base: '/bash-docs/'` en `.vitepress/config.mjs` (ya configurado)
- Repositorio en GitHub: `https://github.com/CEED-2026/bash-docs`
- GitHub Pages habilitado en el repositorio, sirviendo desde la rama `gh-pages`
