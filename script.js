
class Libro {
//Constructor para crear el objeto, se crean con const variable= new variable(contenido)
    constructor(titulo, autor, genero, leido=false){
        this.titulo=titulo
        this.autor=autor
        this.genero=genero
        this.leido=leido
    }
    marcarComoLeido(){
        this.leido=true
        console.log("Este libro fue Leido")
    }

    marcarComoNoLeido(){
        this.leido=false
        console.log("Este libro no ha sido leido")
    }

    informacion(){
        console.log(`Titulo:${this.titulo}, Autor:${this.autor}, Genero:${this.genero}, Leido:${this.leido ? "Si":"No"}`)
    }
}

const librouno = new Libro("Cronicas de Sangonomiya","Kujou Michizane","Historia") 
const librodos = new Libro("Diario de Viaje de Teyvat","Alice","Aventuras")

librouno.informacion()

librodos.marcarComoNoLeido()
librodos.informacion()
