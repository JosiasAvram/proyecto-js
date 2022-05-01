
alert("Bienvenidos a la tabla de multiplicación")

var tabla = parseInt(prompt("Ingrese el número del que quiera conocer su tabla de multiplicación"))
var finTabla = parseInt(prompt("Ingrese el número que en terminara la tabla"))

for(let i = 1; i <= finTabla; i++){
        document.write(tabla + " x " + i + " = " + (tabla*i) + "<br>");
}










let datosIngresados = [];

let continuar = true
let sujeto1;
let sujeto2;
let edad1;
let edad2;

alert("Bienvenidos al programa para saber quien es mayor a quien")
let resultado = confirm("¿Estas seguro de continuar?")

if(resultado === true){
    while(continuar){
        sujeto1 = prompt("Ingrese el nombre de la PRIMERA persona")
        sujeto2 = prompt("Ingrese el nombre de la SEGUNDA persona")
        edad1 = parseInt(prompt("Ingrese la edad de "+sujeto1))
        edad2 = parseInt(prompt("Ingrese la edad de "+sujeto2))

        if(isNaN(edad1) || isNaN(edad2)){
            alert("por favor ingrese la edad correcta")
        }else if(edad1 > edad2){
            alert(sujeto1 + " es mayor que " + sujeto2)
            continuar = false;
        }else{
            alert(sujeto2 + " es mayor que "+ sujeto1)
            continuar = false;
        }
        datosIngresados.push(sujeto1, sujeto2, edad1, edad2)
        
    }

}else
    alert("Gracias por participar")














class Participantes {
    constructor(nombre, apellido, edad, estadoCivil){
        this.nombre = nombre
        this.apellido = apellido
        this.edad = edad
        this.estadoCivil = estadoCivil
    }
}

const participante1 = new Participantes("Josias", "Avram", 31, "casado")
const participante2 = new Participantes("Aylen", "Urrutia", 27, "Soltera")


var concursantes = [participante1, participante2]

concursantes.forEach((concursantesEnArray, index) => {
    console.log(concursantesEnArray)
    console.log(index)
})
