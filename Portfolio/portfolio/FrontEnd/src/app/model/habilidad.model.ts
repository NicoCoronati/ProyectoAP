export class habilidad{

    // ? para indicar q no es necesario, y q omita el error
    id?: number;
    nombre: String;
    porcentaje: number;

    constructor(nombre: String, porcentaje: number){
        this.nombre = nombre;
        this.porcentaje = porcentaje;
}
}