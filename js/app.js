const nombreProyecto = document.querySelector("#nombre-proyecto");
const descripcionProyecto = document.querySelector("#descripcion-proyecto");
const versionProyecto = document.querySelector("#version-proyecto");
const contenedorIntegrantes = document.querySelector("#integrantes");
const avisoError = document.querySelector("#aviso-error");

async function cargarEquipo() {
  try {
    const respuesta = await fetch("datos/equipo.json");
    if (!respuesta.ok) {
      throw new Error(`No se pudo leer el archivo: ${respuesta.status}`);
    }

    const equipo = await respuesta.json();
    nombreProyecto.textContent = equipo.proyecto.nombre;
    descripcionProyecto.textContent = equipo.proyecto.descripcion;
    versionProyecto.textContent = equipo.proyecto.version;

    for (const integrante of equipo.integrantes) {
      const tarjeta = document.createElement("article");
      tarjeta.className = "tarjeta";

      const nombre = document.createElement("h3");
      nombre.textContent = integrante.nombre;

      const rol = document.createElement("p");
      rol.textContent = integrante.rol;

      const enlace = document.createElement("a");
      enlace.href = `https://github.com/${encodeURIComponent(integrante.github)}`;
      enlace.textContent = `GitHub: ${integrante.github}`;
      enlace.target = "_blank";
      enlace.rel = "noopener noreferrer";

      tarjeta.append(nombre, rol, enlace);
      contenedorIntegrantes.append(tarjeta);
    }
  } catch (error) {
    console.error("Error al cargar datos/equipo.json:", error);
    avisoError.hidden = false;
  }
}

cargarEquipo();
