// RETO 1: PALABRA MAS LARGA
// Devolver la palabra mas larga de una frase
// Si hay mas de una palabra con la misma longitud, devolver un array con esas palabras

// palabraMasLarga('Hola Mundo!!! Saludos desde Coderhouse!') => coderhouse
console.log(palabraMasLarga('Hola Mundo!!! Saludos desde Coderhouse!'))

// palabraMasLarga('Hola Mundo!!! Saludos desde Coder!') => saludos
console.log(palabraMasLarga('Hola Mundo!!! Saludos desde Coder!'))

// palabraMasLarga('Hola Mundo!!! Somos Coder!') => [ 'mundo', 'somos', 'coder' ]
console.log(palabraMasLarga('Hola Mundo!!! Somos Coder!'))





function palabraMasLarga(sen) {
  // Eliminamos caracteres especiales (Creamos un array con solo las palabras)
  const soloPalabras = sen.toLowerCase().match(/[a-z0-9]+/g);
  // ordenamos el array de solo palabras
  const palabrasOrdenadas = soloPalabras.sort((a, b) => b.length - a.length);
  // Creamos array con las palabras mas largas
  const palabrasMasLargas = palabrasOrdenadas.filter(item => item.length === palabrasOrdenadas[0].length);
  if (palabrasMasLargas.length === 1) {
    // Si el array tiene una sola palabra, devolvemos la palabra individual
    return palabrasMasLargas[0];
  } else {
    // Caso contrario, devolvemos el array completo
    return palabrasMasLargas;
  }
}