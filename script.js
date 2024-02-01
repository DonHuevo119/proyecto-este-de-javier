let contador = 0

function comprobar() {
    contador++
    error()
}

function error() {
    if (contador === 1) {
        document.querySelector('.intentos').innerText = "left 2 attemps"
        document.querySelector('.ventanaemergente').style.display = "flex"
        document.querySelector('.alaverga').style.display = "flex"
    } else if (contador === 2) {
        document.querySelector('.intentos').innerText = "left 1 attemps"
        document.querySelector('.ventanaemergente').style.display = "flex"
        document.querySelector('.alaverga').style.display = "flex"
    } else if (contador === 3) {
        document.querySelector('.ar').style.display = "none"
        document.querySelector('.intentos').innerText = "You have reached the maximum number of login attempts the system is locked"
        document.querySelector('.ventanaemergente').style.display = "flex"
        document.querySelector('.alaverga').style.display = "flex"
        document.querySelector('.signin').style.backgroundColor = "#091717"
        document.querySelector('.signin').style.cursor = "alias"
        document.querySelector('.lock').style.visibility = "visible"
        document.querySelector('.ventanaemergente2').style.display = "flex"
    }
}

function cerrarEmergente() {
    document.querySelector('.ventanaemergente').style.display = "none"
    document.querySelector('.alaverga').style.display = "none"
}

function abrirFormulario() {
    document.querySelector('.ventanaemergente3').style.display = "block"
}


function comprobarFormulario() {
    let texto = document.getElementById("quegracioso").value
    let texto2 = document.getElementById("quegracioso2").value
    if (texto === "admin" && texto2 === "admin") {
        document.querySelector('.ventanaemergente3').style.display = "none"
        document.querySelector('.ventanaemergente2').style.display = "none"
        document.querySelector('.signin').style.backgroundColor = "#20808D"
        document.querySelector('.signin').style.cursor = "pointer"
        document.querySelector('.lock').style.visibility = "hidden"
        document.querySelector('.ar').style.display = "block"
        document.getElementById("quegracioso").value = ""
        document.getElementById("quegracioso2").value = ""
        contador = 0
    } else {
        var avisoElement = document.querySelector('.aviso');
        avisoElement.style.display = "block";

        // Añadir la clase shakeX después de mostrar el elemento
        avisoElement.classList.add('shakeX');

        // Eliminar la clase shakeX después de la animación
        setTimeout(function () {
            avisoElement.classList.remove('shakeX');
        }, 500); // Tiempo igual a la duración de la animación
    }
}
