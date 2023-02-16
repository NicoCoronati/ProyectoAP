export class expe{

    // ? para indicar q no es necesario, y q omita el error
    id?: number;
    nombre_expe: String;

    actividad: String;
    fecha: String;

    constructor(nombre_expe: String, actividad: String, fecha: String){
        this.nombre_expe = nombre_expe;
        this.actividad = actividad;
        this.fecha = fecha;
    }
}