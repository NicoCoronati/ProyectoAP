export class persona{

    // ? para indicar q no es necesario, y q omita el error
    id?: number;
    nombre: String;
    apellido: String;
    ocupacion: String;
    correo: String;
    fecha_nac: String;
    id_domicilio: number;
    sobre_mi: String;
    url_banner: String;
    url_perfil: String;


    constructor(nombre: String, apellido: String, ocupacion: String, correo: String, fecha_nac: String, id_domicilio: number, sobre_mi: String, url_banner: String, url_perfil: String){
        this.nombre = nombre;
        this.apellido = apellido;
        this.ocupacion = ocupacion;
        this.correo = correo;
        this.fecha_nac = fecha_nac;
        this.id_domicilio = id_domicilio;
        this.sobre_mi = sobre_mi;
        this.url_banner = url_banner;
        this.url_perfil = url_perfil;
    }
}