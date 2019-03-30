var pResultado = document.getElementById("resultado");
/**
 * Ejercicio 1
 */
function calcularSalario() {
    var salario = parseFloat(obtenerIdDOM("txtSalario").value);
    if (salario >= 0 && salario <= 9000) pResultado.innerHTML = salario + (salario * 0.2);
    else if (salario >= 9001 && salario <= 15000) pResultado.innerHTML = salario + (salario * 0.1);
    else if (salario >= 15001 && salario <= 20000) pResultado.innerHTML = salario + (salario * 0.05);
    else pResultado.innerHTML = salario;
}

/**
 * Ejercicio 3
 */
function calcularMediaNumeros() {
    var cantidadNumeros = parseFloat(obtenerIdDOM("txtNumeros").value);
    var numeros = [];
    var i = 0;
    while (i < cantidadNumeros) {
        var numero = window.prompt("Ingrese el número");
        numeros.push(parseFloat(numero));
        i++;
    }
    numeros.sort(function (a, b) { return a - b; });
    var media = 0;
    numeros.forEach(function (item) {
        media = media + item;
    })
    media = media / numeros.length;
    pResultado.innerHTML = "Menor: " + numeros[0] + ", mayor: " + numeros[numeros.length - 1] + ", media: " + ajustarNumeroDecimal(media, 2);
}

function validarValoresVacios(array) {
    var validacion = array.find(function (item) {
        return item === "";
    });
    if (validacion != "") return true;
    else {
        alert("Faltan valores");
        return false;
    }
}

function obtenerIdDOM(nombre) {
    return document.getElementById(nombre);
}

function ajustarNumeroDecimal(num, decimales) {
    return num.toFixed(decimales);
}

/**
 * Ejercicio 2
 */
function calcularPi() {
    var numeroTerminos = parseFloat(obtenerIdDOM("txtNumeros").value);
    var resultado = 2;
    for (var i = 1; i <= numeroTerminos; i++) {
        resultado *= ((2 * i) / ((2 * i) - 1)) * ((2 * i) / ((2 * i) + 1));
    }
    pResultado.innerHTML = resultado;
}

/**
 * Ejercicio 4
 */

function obtenerDomingoPascua() {
    var maximoAnio = 2000;
    var minAnio = 1990;
    var resultado = '<table style="width: 100%;">';
    var a = 0;
    var b = 0;
    var c = 0;
    var d = 0;
    var e = 0;
    for (var i = minAnio; i <= maximoAnio; i++) {
        a = i % 19;
        b = i % 4;
        c = i % 7;
        d = (19 * a + 24) % 30;
        e = (2 * b + 4 * c + 6 * d + 5) % 7;
        resultado += '<tr><td style="background: black;">'+ i +'</td><td width="200" style="background: gray;">'+calcularFecha(22 + d + e)+"</td></tr>";
    }
    resultado+="</table>";
    pResultado.innerHTML = resultado;
}

function calcularFecha(dias) {
    if (dias > 31) {
        return (dias - 31) + " de abril";
    }
    return dias + " de marzo";
}

/**
 * Ejercicio 7
 */

function calcularNumerosPerfectos() {
    var listaNumeros = [];
    var i = 1;
    while (listaNumeros.length < 3) {
        if (validarNumeroPerfecto(i)) {
            listaNumeros.push(i);
        }
        i++;
    }
   pResultado.innerHTML = listaNumeros;
}


/**
 * Ejercicio 8
 */
function calcularEjercicio8() {
    var x = parseFloat(obtenerIdDOM("txtNumeros").value)
    var maxPotencia = 100;
    var i = 1;
    var resultado = 1;
    for (i; i <= maxPotencia; i++) {
        resultado += (Math.pow(x, i) / factorial(i));
    }
    pResultado.innerHTML = resultado;
}

function factorial(n) {
    var resultado = 1;
    var i = 1;
    for (i; i <= n; i++) {
        resultado *= i
    }
    return resultado;
}
/**
 * Ejercicio 11
 */

function validarNumeroPrimo() {
    var numero =  parseFloat(obtenerIdDOM("txtNumeros").value);
    var mitad = numero / 2;
    var isPrimo = "Es primo";
    for (var i = 2; i <= mitad; i++) {
        if (numero % i === 0) {
            isPrimo = "No es primo";
            break;
        }
    }
    if (numero === 1) isPrimo = "No es primo";
    pResultado.innerHTML = isPrimo;
}

/**
 * Ejercicio 12
 */
function calcularSerie12() {
    var resultado = 0;
    var numeroMaximo = parseFloat(obtenerIdDOM("txtNumeros").value);
    for (var i = 1; i <= numeroMaximo; i++) {
        resultado += (1 / i);
    }
   pResultado.innerHTML = resultado;
}

/**
 * Ejercicio 13
 */
function calcularSerie13() {
    var resultado = 0;
    var numeroMaximo = parseFloat(obtenerIdDOM("txtNumeros").value);
    for (var i = 1; i <= numeroMaximo; i++) {
        resultado += (i / Math.pow(2, i));
    }
    pResultado.innerHTML = resultado;
}

/**
 * Ejercicio 14
 */
function mostrarLineas() {
    var lineas = parseFloat(obtenerIdDOM("txtNumeros").value);
    var grafica = '';
    var i = 0;
    for (i; i <= lineas; i++) {
        var j = 0;
        for (j; j < i; j++) {
            grafica += "*"
        }
        grafica += "<br>";
    }
    pResultado.innerHTML = grafica;
}

/**
 * Ejercicio 15 
 */
function listarNumerosPerfectos() {
    var numeroLimite = parseFloat(obtenerIdDOM("txtNumeros").value);;
    var resultado = "";
    for (var i = 1; i < numeroLimite; i++) {
        if (validarNumeroPerfecto(i)) {
            resultado += " " + i;
        }
    }
    pResultado.innerHTML = resultado;
}

function validarNumeroPerfecto(numero) {
    var mitad = numero / 2;
    var suma = 0;
    for (var i = 1; i <= mitad; i++) {
        if (numero % i === 0) {
            suma += i;
        }
    }
    return suma === numero;
}

/**
 * Ejercicio 16
 */
function calcularNumeroNatural16() {
    var numeroEntrante = parseFloat(obtenerIdDOM("txtNumeros").value);
    var suma = 0;
    var i;
    var numero = 0;
    for (i = 1; suma <= numeroEntrante; i++) {
        numero = i;
        suma += i;
    }
    pResultado.innerHTML = numero;
}