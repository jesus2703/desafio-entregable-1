// Algoritmo para conocer el precio de un corte de carne determinado

// Creamos la variable que va a contener el dato que le pedimos al usuario

let corteCarne =
  prompt(`Seleccione la opcion del corte de carne del cual desea conocer el precio:
                        1. Cuadril
                        2. Bola lomo
                        3. Peceto
                        4. Nalga
                        5. Bocado`);

// Con switch le damos la respuesta al usuario en funcion de la opcion elegida

switch (corteCarne) {
  case "1":
    alert("El cuadril vale 1280 el kilo. Muchas Gracias!!!");
    break;

  case "2":
    alert("La Bola de Lomo vale 995 el kilo. Muchas Gracias!!!");
    break;

  case "3":
    alert("El peceto vale 1350 el kilo. Muchas Gracias!!!");
    break;

  case "4":
    alert("La nalga vale 1300 el kilo. Muchas Gracias!!!");
    break;

  case "5":
    alert("El Bocado vale 900 el kilo. Muchas Gracias!!!");
    break;

  default:
    alert("Opcion no valida. Debe colocar un numero ya sea 1, 2, 3, 4 o 5");
    break;
}
