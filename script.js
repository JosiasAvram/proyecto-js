let inputColor = document.getElementById("inputColor")
let formulario = document.getElementById("idForm")
let arrayPersonas = []


inputColor.addEventListener("input", () => {
    document.body.style.backgroundColor = inputColor.value
})


formulario.addEventListener("submit", (event) => {
    event.preventDefault()
    let username = document.getElementById("exampleUserName1").value
    let email = document.getElementById("exampleInputEmail1").value
    let password = document.getElementById("exampleInputPassword1").value

    let usuario = {username: username, email: email, password: password}

    arrayPersonas.push(usuario)

    console.log(arrayPersonas)

    formulario.reset()
})


