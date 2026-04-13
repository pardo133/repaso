import { escanearRecursos } from "./alumnoB.js";
const Escanear = document.getElementById("btn-escanear")
const Mensaje = document.getElementById("resultado-escaneo")
if (Escanear&&Mensaje){
   Escanear.addEventListener("click", () => {
        
        const mensaje = escanearRecursos();
        
        
        Mensaje.textContent = mensaje;
    });
}