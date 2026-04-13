

export { producto, obtenerrecursosexternos };

/**
 * clase producto
 * definida en minúsculas para evitar errores de referencia
 */
class producto {
  constructor(nombre, categoria, cantidad) {
    this.nombre = nombre;
    this.categoria = categoria; // valores: 'combustible' o 'comida'
    this.cantidad = cantidad;
  }
}

/**
 * simulador de carga asíncrono
 * emula la demora de la telemetría espacial (2 segundos)
 */
async function obtenerrecursosexternos() {
  console.log("🛰️ gemini-26: escaneando superficie del planeta...");

  return new Promise((resolve) => {
    setTimeout(() => {
      const inventario = [
        new producto("celulas de hidrogeno", "combustible", 45),
        new producto("raciones de emergencia", "comida", 150),
        new producto("combustible de plasma", "combustible", 20),
        new producto("algas nutritivas", "comida", 80)
      ];
      
      console.log("📡 escaneo completado. enviando datos al panel de control.");
      resolve(inventario);
    }, 2000);
  });
}

// exportamos los elementos para que el alumno b pueda usarlos

