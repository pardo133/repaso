export function escanearRecursos (){
    const recursos =["Hierro", "Criptonita","Adamantiun","escrotoLamo"]
    const encontrado = recursos[Math.floor(Math.random() * recursos.length)];
    return `[SCANNER]: Recurso detectado: ${encontrado}\nCoordenadas: Sector 3`;
}