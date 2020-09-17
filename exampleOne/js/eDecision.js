function mostrarMensaje() {
    let edad = parseInt(document.getElementById('edad').value)

    // if (edad >= 18) {
    //     mensaje = "Sos mayor de edad"
    // } else {
    //     mensaje = "Sos menor de edad"
    // }

    //If con operador terniario
    let mensaje = (edad >= 18) ? "Sos mayor de edad" : "Sos menor de edad"

    alert(mensaje)
    //document.write(mensaje)
}

function mostrarMensajeDos() {
    let edadP = parseInt(document.getElementById('edadP').value)
    let estaturaP = parseFloat(document.getElementById('estaturaP').value)
    let pesoP = parseInt(document.getElementById('pesoP').value)

    const parametroEdad = 80
    const parametroEstatura = 1.40
    const parametroPeso = 70
    let mensajeDecision = ""

    //If anidado
    // if (edadP <= parametroEdad) {
    //     if (estaturaP >= parametroEstatura) {
    //         if (pesoP == parametroPeso) {
    //             mensajeDecision = "Apto para realizar el deporte"
    //         } else {
    //             mensajeDecision = "No apto. Peso no valido"
    //         }            
    //     } else {
    //         mensajeDecision = "No apto. Estatura no valida"
    //     }
    // } else {
    //     mensajeDecision = "No apto. Edad no permitida"
    // }

    //If con operador logico AND(&&)
    /*if (edadP <= parametroEdad && estaturaP >= parametroEstatura && pesoP == parametroPeso) {
        mensajeDecision = "Apto para realizar el deporte"
    } else {
        mensajeDecision = "No Apto para realizar el deporte"
    } */

    //If con operador logico OR(||)
    /*if (edadP <= parametroEdad || estaturaP >= parametroEstatura || pesoP == parametroPeso) {
        mensajeDecision = "Apto para realizar el deporte"
    } else {
        mensajeDecision = "No Apto para realizar el deporte"
    }*/

    alert(mensajeDecision)
}

function mostrarMensajeTres() {
    let productName = document.getElementById('productName').value
    let price = 0

    const PRODUCT_ONE = 'A'
    const PRODUCT_TWO = 'B'
    const PRODUCT_THREE = 'C'
    const MESSAGE = 'Invalid product name'

    /*if (productName.toUpperCase() == PRODUCT_ONE) {
        price = 2000
    } else {
        if (productName.toUpperCase() == PRODUCT_TWO) {
            price = 2200
        } else {
            if (productName.toUpperCase() == PRODUCT_THREE) {
                price = 1800
            } else {
                alert(MESSAGE.toUpperCase())
            }
        }
    }

    alert(price) */

    switch (productName.toUpperCase()) {
        case PRODUCT_ONE:
            price = 20000
            break;
        case PRODUCT_TWO:
            price = 22000
            break;
        case PRODUCT_THREE:
            price = 18000
            break;    
        default:
            alert(MESSAGE.toUpperCase())
            break;
    }

    alert(Intl.NumberFormat().format(price))
}

//function prenderApagar(interruptor) 
let prenderApagar = interruptor => {
    let pic

    /*if (interruptor == 0) {
        alert('OFF')
    } else {
        alert('ON')
    } */

    let mensaje = (interruptor == 0) ? "OFF" : "ON"

    alert(mensaje)
    
}

