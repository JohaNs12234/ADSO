const Edades = prompt("Ingrese la edad");
function categorizarEdad(edad) {
  if (edad >= 0 && edad <= 11) {
    return "Niño/a ";
  } else if (edad >= 12 && edad <= 18) {
    return "Adolescente ";
  } else if (edad >= 19 && edad <= 55) {
    return "Adulto ";
  } else {
    return "Fuera de rango ";
  }
}
for (let i = 1; i <= 5; i++) {
  let edad = parseInt(prompt("Ingresa la edad #" + i + ":"));
  console.log("Edad " + edad + ": " + categorizarEdad(edad));
}
for (let i = 1; i <= 5; i++) {
  let edad = parseInt(prompt("Ingresa la edad #" + i + ":"));
  if (edad < 0 || edad > 55) {
    console.log("Edad " + edad + ": Fuera de rango ");
  }
}
