
var numero = parseInt(prompt("Ingrese el numero hasta el cual quiere mostrar"))

for(let i = 0; i <= numero; i++){
        document.write("Vamos por el: " + i + "<br>");
}

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
    }

}else
    alert("Gracias por participar")

