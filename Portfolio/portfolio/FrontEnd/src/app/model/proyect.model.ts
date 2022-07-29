export class proyect{

    // ? para indicar q no es necesario, y q omita el error
    id?: number;
    fecha: String;
    nombre: String;
    parrafo: String;
    url: String;
    url_foto: String;

    constructor(fecha: String, nombre: String, parrafo: String, url: String, url_foto: String){
        this.fecha = fecha;
        this.nombre = nombre;
        this.parrafo = parrafo;
        this.url = url;
        this.url_foto = url_foto;
}
}