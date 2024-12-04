let tuNombre = prompt("Para anotarte a la clase escribí tu nombre y apellido")
let tuPractica = prompt("¿Qué horario preferís?")

if ((tuNombre === "") && (tuPractica === "")) {
    alert("Vamos de nuevo, escribí tu nombre completo y elegí el horario para anotarte a la clase.")
} else {
    alert("Bienvenido " + tuNombre + ", te anotaste en la clase de Yoga Integral a las " + tuPractica + " horas.")
}

/*
let cupo = 1

if (cupo == 1) {
    console.log("Quedan lugares disponibles, ¡anotate!");
} else {
    console.log("Ya no hay lugares disponibles, probá con la siguiente clase");
}
*/