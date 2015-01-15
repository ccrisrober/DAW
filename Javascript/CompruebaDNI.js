function calcularDNI() {

      var letras = ['T', 'R', 'W', 'A', 'G', 'M', 'Y', 'F', 'P', 'D', 'X', 'B', 'N', 'J', 'Z', 'S', 'Q', 'V', 'H',
      'L', 'C', 'K', 'E'];

      var numeroDNI = prompt("Introduce tu número de DNI.");
      var numeroDNI = eval(numeroDNI);
      var letraDNI = prompt("Introduce tu letra de DNI.");

      if (numeroDNI < 0) {
        alert("DNI incorrecto.");
      } else if (numeroDNI > 99999999) {
        alert("DNI incorrecto.");
      }

      var calculoDNI = numeroDNI % 23;
      var calculoLetra = letras[calculoDNI];

      if (letraDNI == calculoLetra) {
        alert("El DNI es correcto.");
      } else {
        alert("El DNI es incorrecto.");
      }
}
