var btnRegistrar = document.getElementById("registrar")
btnRegistrar.addEventListener("click", function () {
    axios.post("http://localhost:4567/usuario", {
        email : document.getElementById("email").value,
        password : document.getElementById("password").value
    })
    .then(function (response) {
        alert("mensaje: usuario creado "+response.data.status+" con id: "+response.data.id);
        id = response.data.id;
        estado=response.data.status;
    })
    .catch(function (error) {
        console.log(error);
    })
})

var btnUsuarios = document.getElementById("usuarios")
btnUsuarios.addEventListener("click", function () {
    axios.get("http://localhost:4567/usuarios")
    .then(function (response) {
        console.log(response.data);
        //usuarios(response.data);
    })
    .catch(function (error) {
        console.log(error);
    })
})