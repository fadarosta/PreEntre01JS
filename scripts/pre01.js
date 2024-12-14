const cupoMaximo = 2;
let inscripciones = 0;

for (let i = 0; i < cupoMaximo; i++) {
    let tuNombre = prompt("👋¡Hola! Para anotarte a la clase, escribí tu nombre y apellido");
    let tuPractica = parseInt(prompt("🥰 ¿Qué horario preferís? (Debe ser un número)"));

    if (tuNombre.trim() === "" || isNaN(tuPractica)) {
        alert("🤥 Vamos de nuevo. Asegurate de escribir tu nombre completo y que el horario sea un número.");
        i--; // restar uno para repetir el intento
    } else {
        inscripciones++; // sumar un inscripto
        alert("😍 Bienvenid@ " + tuNombre.toUpperCase() + ", te anotaste en la clase de Yoga Integral a las " + tuPractica + " horas.");
        alert("Se ocuparon " + inscripciones + " de " + cupoMaximo + " lugares de la sala");
    }
    // verificador
    if (inscripciones === cupoMaximo) {
        alert("Ya no hay cupo 🥺 ¡Probá con otro horario!");
        break;
    }
}
