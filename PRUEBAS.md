# Pruebas del proyecto

| # | Caso | Pasos | Resultado esperado |
|---|---|---|---|
| 1 | Carga de página | Abrir `index.html` con Live Server o GitHub Pages. | Se muestra la página sin errores de carga. |
| 2 | Datos del proyecto | Revisar el encabezado y la versión. | Aparecen el nombre, la descripción y la versión `1.0.0` leídos desde el JSON. |
| 3 | Cinco tarjetas | Revisar la sección de integrantes. | Se muestran cinco tarjetas, una por cada integrante del JSON. |
| 4 | Enlaces a GitHub | Abrir el enlace de cada tarjeta. | Cada enlace lleva a `https://github.com/[usuario]` correspondiente al integrante. |
| 5 | JSON válido | Validar `datos/equipo.json` con un analizador JSON. | El archivo se analiza sin errores y contiene `proyecto` e `integrantes`. |
| 6 | Vista en celular | Abrir la página en un Viewport de celular (320 px de ancho o más). | El contenido se adapta al ancho, sin desbordamiento horizontal. |
| 7 | Página publicada | Abrir `https://GRUPOBACKEND2026.github.io/proyecto-equipo/`. | GitHub Pages carga la página publicada y muestra los datos y las cinco tarjetas. |
