# Proyecto del Grupo 1

Página del equipo construida en GitHub con ramas, Pull Requests y revisión de código.

**Página publicada:** https://GRUPOBACKEND2026.github.io/proyecto-equipo/

## Integrantes

| Integrante | Rol | GitHub |
|---|---|---|
| Juan david lopez galeano | Líder | [juandavidlopezgaleano99-alt](https://github.com/juandavidlopezgaleano99-alt) |
| Mariana Angel Buitrago | Frontend | [Marianita12](https://github.com/Marianita12) |
| juan david lopez galeano | Backend | [juandavidlopezgaleano99-alt](https://github.com/juandavidlopezgaleano99-alt) |
| Juandiego Rosas Reyes | Tester | [DarksuneOficial](https://github.com/DarksuneOficial) |
| Pablo Esteban Leytton Viloria | Documentador | [PabloElHackerr](https://github.com/PabloElHackerr) |

## Ramas

| Rama | Uso |
|---|---|
| `main` | Versión publicada y releases. |
| `develop` | Integración del trabajo; rama por defecto. |
| `frontend` | `index.html`, `css/estilos.css` y `js/app.js`. |
| `backend` | `datos/equipo.json`. |
| `testing` | `PRUEBAS.md`. |
| `docs` | `README.md`. |

Las ramas de trabajo salen de `develop`. El trabajo se integra mediante Pull Request a `develop`; no se suben cambios directamente a `main` ni a `develop`.

## Ejecutar con Live Server

1. Abrir la carpeta del repositorio en Visual Studio Code.
2. Instalar la extensión **Live Server** si aún no está instalada.
3. Hacer clic derecho en `index.html` y elegir **Open with Live Server**.
4. Verificar que `datos/equipo.json` esté en la raíz del repositorio, junto a `index.html`.

El navegador debe abrir la página desde un servidor local para que `fetch` pueda leer el archivo JSON.
