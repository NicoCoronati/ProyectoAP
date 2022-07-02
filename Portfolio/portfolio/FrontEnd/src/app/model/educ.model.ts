export class educ{

    // ? para indicar q no es necesario, y q omita el error
    id?: number;
    nombre_escuela: String;
    url_foto: String;


    constructor(nombre_escuela: String, url_foto: String){
        this.nombre_escuela = nombre_escuela;
        this.url_foto = url_foto;
    }
}