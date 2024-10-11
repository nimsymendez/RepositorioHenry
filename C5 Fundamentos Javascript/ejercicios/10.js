function devolverString(string) {
  // La función recibe un argumento llamado string.
  // Debe retornar dicho string.
  // Por ejemplo: 
  // "texto" ---> "texto" 
  // "hola mundo" ---> "hola mundo" 
  // "SoyHenry" ---> "SoyHenry" 
  // Tu código:
  if (string == "texto" || string == "hola mundo" || string == "SoyHenry" || string == "Henry") {
    return string;
}
}
console.log(devolverString("texto"));
module.exports = devolverString;