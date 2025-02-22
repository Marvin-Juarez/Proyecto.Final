//Es la cantidad inicial con la cual se va a hacer las operaciones.
var cantidad = 4200
// Le preguntamos a la persona si es mayor o menor de edad.
mayor_menor = prompt("Coloque un si si es mayor de edad o un no si es menor de edad.").toLowerCase().trim();
// Si la persona no coloca un si o no, se va a repetir la pregunta hasta que ponga si o no.
while (mayor_menor === "si" || mayor_menor === "no"){
    if (mayor_menor === "si"){
      let nombre = prompt("Digite su nombre:");
// Le preguntamos la edad.     
      let edad = Number(prompt("Digite su edad:").trim());
/* Si la edad es menor a 1 o mayor a 110 le va a salir un error y se va a repetir la pregunta hasta que
   la persona coloque una edad del rango del 1 al 110. */
      while (edad < 1 || edad > 110){
        alert("Coloque un edad valida.")
        edad = Number(prompt("Digite su edad:"));
      }
// Le va a salir error por colocar una edad menor a 18, luego le repite la pregunta.    
      while (edad > 0 && edad < 18){
        alert("Error. Usted no puede ser menor de 18 años.");
        edad = Number(prompt("Por favor ingrese su edad:"));
      }
// Le pregunta cual es el estado civil.
      let civil = prompt("Cual es su estado civil:").toLowerCase().trim();
/* Le sale error si no coloca cual es el estado civil de la persona y le vulve a pregunta 
   cual es el estado civil.                                                            */
      while (civil !== "soltero" && civil !== "casado" && civil !== "divorciado"){
        alert("Error. Coloque su estado civil: soltero, casado o divorciado.");
        civil = prompt("Cual es su estado civil:");
// Si coloca el estado civil se sale del bucle.        
        if (civil === "soltero" || civil === "casado" || civil === "divorciado"){ break;}
        else 
          alert("Error. Coloque su estado civil: soltero, casado o divorciado.");
        civil = prompt("Cual es su estado civil:");
      }
/* Si es soltero y dependiendo de la edad de la persona se hara una operación y
   le muestra en pantalla el resultado de la operación.                 */
      if (civil === "soltero"){
        if (edad >= 18 || edad <= 24){
          resultado = cantidad * 10/100;
          alert("Hola " + nombre + ", el recargo total sera Q. " + resultado + ".00");
          alert("Y el precio sería Q. " + cantidad + ".00");
              }
       else if (edad >= 25 || edad <= 49){
           resultado = cantidad * 20/100;
           alert("Hola " + nombre + ", el recargo total sera Q. " + resultado + ".00");
           alert("Y el precio sería Q. " + cantidad + ".00");
          }
       else if (edad >= 50 || edad <= 110){
           resultado = cantidad * 30/100;
           alert("Hola " + nombre + ", el recargo total sera Q. " + resultado + ".00");
           alert("Y el precio sería Q. " + cantidad + ".00");
          }
      }      
      let cantidad1 = 0
// Si la persona coloco que está casado o divorciado le va a oreguntar cuantos hijos tiene.
      if (civil === "casado" || civil === "divorciado"){
        hijos = Number(prompt("Entre del 1 al 5 cuantos hijos tiene y si no tiene coloque un 0:"));
// Si no coloca un número del 0 al 5 le va a salir error hasta que coloque un número del 0 al 5
        while (hijos < 0 || hijos > 5){
            alert("Error.");
            hijos = Number(prompt("Entre del 1 al 5 cuantos hijos tiene y si no tiene coloque un 0:"));
            }
// Por cada hijo que tenga se va a multiplicar * 20.
            cantidad1 = hijos * 20;
/* Es la misma operación de la que está harriba solo que la unica diferencia que tiene es que
   se le agrega el porcentaje de los hijos que tenga la persona.                          */
            if (edad >= 18 || edad <= 24){
                resultado = cantidad * 10/100;
                resul = (cantidad - resultado) * cantidad1/100;
                suma = resultado + resul;
                alert("Hola " + nombre + ", el recargo total sera Q. " + suma + ".00");
                alert("Y el precio sería Q. " + cantidad + ".00");
              }
              else if (edad >= 25 || edad <= 49){
                resultado = cantidad * 20/100;
                resul = (cantidad - resultado) * cantidad1/100;
                suma = resultado + resul;
                alert("Hola " + nombre + ", el recargo total sera Q. " + suma + ".00");
                alert("Y el precio sería Q. " + cantidad + ".00");
              }
              else if (edad >= 50 || edad <= 110){
                resultado = cantidad * 30/100;
                resul = (cantidad - resultado) * cantidad1/100;
                suma = resultado + resul;
                alert("Hola " + nombre + ", el recargo total sera Q. " + suma + ".00");
                alert("Y el precio sería Q. " + cantidad + ".00");
              }   
            }    
    }
// Solo es un mensaje si la persona un no.
    else
      alert("No puede ingresar por ser menor de edad.");
}