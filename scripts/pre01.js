let tuNombre = prompt("Para anotarte a la clase escribí tu nombre y apellido")
let tuPractica = prompt("¿Qué horario preferís? (Debe ser un número)")

if ((tuNombre == "") || (tuPractica === "") || isNaN(tuPractica)) {
    alert("Vamos de nuevo, escribí tu nombre completo y elegí el horario para anotarte a la clase.")
} else {
    alert("Bienvenido " + tuNombre.trim().toUpperCase() + ", te anotaste en la clase de Yoga Integral a las " + tuPractica + " horas.")
}
