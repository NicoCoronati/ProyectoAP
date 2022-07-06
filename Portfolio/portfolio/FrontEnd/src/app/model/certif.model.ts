export class certif{

    // ? para indicar q no es necesario, y q omita el error
    id?: number;
    nombre: String;
    nombre_academia: String;

    constructor(nombre: String, nombre_academia: String){
        this.nombre = nombre;
        this.nombre_academia = nombre_academia;
}
}