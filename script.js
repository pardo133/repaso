
import { obtenerrecursosexternos } from "./alumnoa.js"; 
import { escanearRecursos } from "./alumnoB.js";


const btnEscanear = document.querySelector("#btn-escanear");
const panelMensaje = document.querySelector("#resultado-escaneo");


if (btnEscanear && panelMensaje) {
    
    
    btnEscanear.addEventListener("click", async () => {
     
        panelMensaje.textContent = "🛰️ CONECTANDO CON LA NAVE... ESPERE.";
        btnEscanear.disabled = true;

        try {
         
            const fraseScanner = escanearRecursos();

            
            const inventario = await obtenerrecursosexternos();

          
            let informe = `${fraseScanner}\n`;
            informe += "====================================\n";
            informe += "📦 CARGAMENTO ENCONTRADO:\n\n";

            inventario.forEach(item => {
                informe += `🔸 ${item.nombre.toUpperCase()} | Cantidad: ${item.cantidad}\n`;
            });

            panelMensaje.textContent = informe;

        } catch (error) {
            panelMensaje.textContent = "❌ ERROR: LA NAVE HA EXPLOTADO (o hay un fallo de red).";
            console.error(error);
        } finally {
            btnEscanear.disabled = false;
        }
    });
}



