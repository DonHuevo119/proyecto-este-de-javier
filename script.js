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

        document.querySelector('.form-control-sm').style.pointerEvents = "none";
        document.querySelector('.input-group-text').style.pointerEvents = "none";
        document.querySelector('.passwordInput').style.pointerEvents = "none";
        document.querySelector('.passwordLabel').style.pointerEvents = "none";
        document.querySelector('.passwordInput').style.userSelect = "none";
        document.querySelector('.form-control-sm').style.userSelect = "none";
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

        document.querySelector('.form-control-sm').style.pointerEvents = "auto";
        document.querySelector('.input-group-text').style.pointerEvents = "auto";
        document.querySelector('.passwordInput').style.pointerEvents = "auto";
        document.querySelector('.passwordLabel').style.pointerEvents = "auto";
        document.querySelector('.passwordInput').style.userSelect = "auto";
        document.querySelector('.form-control-sm').style.userSelect = "auto";
        contador = 0
        transicion()
    } else {
        var avisoElement = document.querySelector('.aviso');
        avisoElement.style.display = "block";
        avisoElement.classList.add('shakeX');
        setTimeout(function () {
            avisoElement.classList.remove('shakeX');
        }, 500);
    }
}

function transicion() {
    var alaverga = document.querySelector('.alaverga');
    alaverga.style.backgroundColor = "rgba(0, 0, 0, 0)";
    alaverga.style.display = "flex";

    // Añadir un retraso de 100ms antes de cambiar el color para permitir la transición
    setTimeout(function () {
        alaverga.style.backgroundColor = "black";
        alaverga.removeAttribute('onclick');

        // Tiempo adicional para la animación (3 segundos)
        setTimeout(function () {
            location.href = "index2.html";
        }, 3000); // 3000 ms = 3 segundos
    }, 100);
}

function volver(){
    location.href = "index.html";
}
