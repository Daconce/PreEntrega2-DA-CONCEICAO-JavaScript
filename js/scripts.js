// Pedimos al usuario que ingrese la cantidad de empanadas que desea
var cantidad = prompt(
  "Bienvenido a Rincón Norteño\nLe tomaremos su pedido\nEl precio de cada empanada es de $250\n¿Cuántas empanadas deseas?"
);

// Convertimos la cantidad de empanadas a un número entero
cantidad = parseInt(cantidad);

// Creamos una variable para guardar el gusto de cada empanada
var gustos = [];

// Pedimos al usuario que seleccione el gusto de cada empanada
for (var i = 0; i < cantidad; i++) {
  // Pedimos al usuario que seleccione una opción
  var opcion = prompt(
    "Selecciona el gusto de la empanada número " +
      (i + 1) +
      "\n1. Carne\n2. Pollo\n3. Jamón y Queso"
  );

  // Validamos que la opción seleccionada sea válida
  while (opcion != 1 && opcion != 2 && opcion != 3) {
    // Si la opción no es válida, volvemos a pedir al usuario que ingrese una opción
    opcion = prompt(
      "Opción inválida. Selecciona el gusto de la empanada número " +
        (i + 1) +
        "\n1. Carne\n2. Pollo\n3. Jamón y Queso"
    );
  }

  // Guardamos el gusto seleccionado en la lista de gustos
  if (opcion == 1) {
    gustos.push("carne");
  } else if (opcion == 2) {
    gustos.push("pollo");
  } else if (opcion == 3) {
    gustos.push("jamón y queso");
  }
}

// Calculamos el precio total de las empanadas
var precioTotal = cantidad * 250;

// Mostramos un resumen del pedido y el precio total
var resumen = "Resumen del pedido:\n";
for (var i = 0; i < gustos.length; i++) {
  resumen += "- Empanada de " + gustos[i] + "\n";
}
resumen += "Precio total: $" + precioTotal;
alert(resumen);
