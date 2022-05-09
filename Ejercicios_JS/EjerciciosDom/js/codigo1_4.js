//pos 0 = 500; y ultima casilla importe total
//Todos los datos tienen que venir de un formulario (input):
//Introduccion de datos:
//pos 0 = 500; y ultima casilla importe total
let caja = [0, 0, 0, 1, 4, 8, 2, 5, 4, 0, 0, 1, 2, 3, 1, 0.0]; // Estan colocados en orden  descendente.
const precioArticulo = 1050;
let pago = [2, 0, 0, 0, 0, 2, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0];
let devolucion = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0.0];
// La función dineroTotal hace un sumatorio y multipliación del dinero total en la caja o en el pago.
function dineroTotal(dinero) {
  for (let i = 0; i < dinero.length - 1; i++) {
    if (dinero[i] != 0) {
      switch (i) {
        case 0:
          dinero[dinero.length - 1] = 500 * dinero[i];
          break;
        case 1:
          dinero[dinero.length - 1] += 200 * dinero[i];
          break;
        case 2:
          dinero[dinero.length - 1] += 100 * dinero[i];
          break;
        case 3:
          dinero[dinero.length - 1] += 50 * dinero[i];
          break;
        case 4:
          dinero[dinero.length - 1] += 20 * dinero[i];
          break;
        case 5:
          dinero[dinero.length - 1] += 10 * dinero[i];
          break;
        case 6:
          dinero[dinero.length - 1] += 5 * dinero[i];
          break;
        case 7:
          dinero[dinero.length - 1] += 2 * dinero[i];
          break;
        case 8:
          dinero[dinero.length - 1] += 1 * dinero[i];
          break;
        case 9:
          dinero[dinero.length - 1] += 0.5 * dinero[i];
          break;
        case 10:
          dinero[dinero.length - 1] += 0.2 * dinero[i];
          break;
        case 11:
          dinero[dinero.length - 1] += 0.1 * dinero[i];
          break;
        case 12:
          dinero[dinero.length - 1] += 0.05 * dinero[i];
          break;
        case 13:
          dinero[dinero.length - 1] += 0.02 * dinero[i];
          break;
        case 14:
          dinero[dinero.length - 1] += 0.01 * dinero[i];
          break;
      }
    }
  }
// Usamos en metodo toFixed para redondear a dos decimales.
  dinero[dinero.length - 1] = dinero[dinero.length - 1].toFixed(2);
}
// Nos muestra cuanto dinero total hay en caja y cuanto dinero me han pagado en total.
dineroTotal(pago);
dineroTotal(caja);
// Creamos un string que nos devuelve cuantos billetes o monedas tenemos en la caja.(Por seprado).
function mostrarDinero(dinero) {
  let mostrar = "";
  for (let i = 0; i < dinero.length - 1; i++) {
    if (dinero[i] != 0) {
      switch (i) {
        case 0:
          mostrar += "Hay " + dinero[i] + " billetes de 500 \n"; // \n salto de linea.
          break;
        case 1:
          mostrar += "Hay " + dinero[i] + " billetes de 200 \n";
          break;
        case 2:
          mostrar += "Hay " + dinero[i] + " billetes de 100 \n";
          break;
        case 3:
          mostrar += "Hay " + dinero[i] + " billetes de 50 \n";
          break;
        case 4:
          mostrar += "Hay " + dinero[i] + " billetes de 20 \n";
          break;
        case 5:
          mostrar += "Hay " + dinero[i] + " billetes de 10 \n";
          break;
        case 6:
          mostrar += "Hay " + dinero[i] + " billetes de 5 \n";
          break;
        case 7:
          mostrar += "Hay " + dinero[i] + " monedas de 2 \n";
          break;
        case 8:
          mostrar += "Hay " + dinero[i] + " monedas de 1 \n";
          break;
        case 9:
          mostrar += "Hay " + dinero[i] + " monedas de 0.5 \n";
          break;
        case 10:
          mostrar += "Hay " + dinero[i] + " monedas de 0.2 \n";
          break;
        case 11:
          mostrar += "Hay " + dinero[i] + " monedas de 0.1 \n";
          break;
        case 12:
          mostrar += "Hay " + dinero[i] + " monedas de 0.05 \n";
          break;
        case 13:
          mostrar += "Hay " + dinero[i] + " monedas de 0.02 \n";
          break;
        case 14:
          mostrar += "Hay " + dinero[i] + " monedas de 0.01 \n";
          break;
      }
    }
  }
  if (mostrar == "") {
    mostrar = "Su cambio es 0";
  }
  alert(mostrar); // Nos muestra la cantidad total de monedas y billetes(junto).
}
// Nos devuelve la posición del array donde tengo que mirar. Para saber cuanto tengo que devolver.
function rangoDevolucion(importeDevolucion) {
  if (importeDevolucion >= 500) {
    return 0;
  } else if (importeDevolucion >= 200) {
    return 1;
  } else if (importeDevolucion >= 100) {
    return 2;
  } else if (importeDevolucion >= 50) {
    return 3;
  } else if (importeDevolucion >= 20) {
    return 4;
  } else if (importeDevolucion >= 10) {
    return 5;
  } else if (importeDevolucion >= 5) {
    return 6;
  } else if (importeDevolucion >= 2) {
    return 7;
  } else if (importeDevolucion >= 1) {
    return 8;
  } else if (importeDevolucion >= 0.5) {
    return 9;
  } else if (importeDevolucion >= 0.2) {
    return 10;
  } else if (importeDevolucion >= 0.1) {
    return 11;
  } else if (importeDevolucion >= 0.05) {
    return 12;
  } else if (importeDevolucion >= 0.02) {
    return 13;
  } else if (importeDevolucion >= 0.01) {
    return 14;
  }
}
// Necesitamos traducir las posiciones a importes en euros o centimos.
function valorPosicion(posicion) {
  switch (posicion) {
    case 0:
      return 500;
      break;
    case 1:
      return 200;
      break;
    case 2:
      return 100;
      break;
    case 3:
      return 50;
      break;
    case 4:
      return 20;
      break;
    case 5:
      return 10;
      break;
    case 6:
      return 5;
      break;
    case 7:
      return 2;
      break;
    case 8:
      return 1;
      break;
    case 9:
      return 0.5;
      break;
    case 10:
      return 0.2;
      break;
    case 11:
      return 0.1;
      break;
    case 12:
      return 0.05;
      break;
    case 13:
      return 0.02;
      break;
    case 14:
      return 0.01;
      break;
  }
}
// Nos devuelve cual es el cambio.
devolucion[devolucion.length - 1] = pago[pago.length - 1] - precioArticulo; 
// Aplicamos el metodo toFixed para redondear a dos decinmales.
devolucion[devolucion.length - 1] = devolucion[devolucion.length - 1].toFixed(2); 
if (devolucion[devolucion.length - 1] == 0) { // Caso de devolucion 0 o pago justo.
  console.log("Gracias, vuelva pronto ");
  mostrarDinero(devolucion);
} else {
  if (devolucion[devolucion.length - 1] > caja[caja.length - 1]) { // No tenemos suficiente liquidez o dinero en caja para devolver el cambio.
    console.log("Me falta dinero");
  } else {
    if (pago[pago.length - 1] < precioArticulo) { // Pago insuficiente.
      console.log("Importe insuficiente");
    } else {                                     // Tenemos dinero para devolver.
      for ( 
        let i = rangoDevolucion(devolucion[devolucion.length - 1]);  
        i < caja.length - 1; // La ultima casilla del array de caja tiene la cantidad final del dinero de la caja.
        i++
      ) {
        if (caja[i] != 0) {  // Si en la caja de i hay billetes o monedas disintas de 0.
  // La variable valorposicion1 se refiere a que billete o moneda conrresponde el billete en el array.
          let valorPosicion1 = valorPosicion(i); 
  //  La cantidad de billetes y monedas multiplicado por el valor de la posicion, si es mayor o igual que la cantidad que tengo que devolver.
          if (caja[i] * valorPosicion1 >= devolucion[devolucion.length - 1]) {
  // La variable cantidad nos dice la cantidad de billetes o monedas que tengo que usar para devolver el cambio.
            let cantidad = Math.floor( // Usamos Math.floor para redondear la cantidad.
              devolucion[devolucion.length - 1] / valorPosicion1
            );
  // Restar a lo que hay que devolver, lo que le he entregado al usuario.
            devolucion[devolucion.length - 1] -= valorPosicion1 * cantidad;
  // Lo que tenemos que devolver lo redondeamos.
            devolucion[devolucion.length - 1] = devolucion[devolucion.length - 1].toFixed(2); // -toFixed lo usamos para redondear decimales.
            caja[i] -= cantidad; // Restamos a la poscion de la caja la cantidad que le doy al usuario.
            devolucion[i] = cantidad; // En el array devolución meto la cantidad de billetes que tengo que devolver.
            console.log("cantidad " + cantidad);
            console.log("devolucion " + devolucion);
            console.log("caja " + caja);
            console.log("valorPosicion1 " + valorPosicion1);
            caja[caja.length-1] -= valorPosicion1 * cantidad; // Le resto el dinero que tengo en caja lo que le acabo de dar al usuario.
          } else { // Este else significa que o no tengo monedas o billetes suficientes en esa casilla o momento en la caja o no puedo devolver el dinero. 
            devolucion[devolucion.length - 1] -= valorPosicion1 * caja[i]; // Resto lo que puedo devolver.
            devolucion[i] = caja[i]; // Todos los billetes o monedas que habia en ese casilla lo añado a devolucion.
            caja[i] = 0; // Quito en billete o moneda de la caja, la dejo a 0.
            caja[caja.length-1] -= valorPosicion1 * caja[i]; // Le resto el dinero que tengo en caja lo que le acabo de dar al usuario. 
          }
        }
      } 
      if (devolucion[devolucion.length - 1] > 0) { // No tenia suficiente monedas o billetes a devolver.
        alert("No tenemos suficiente cambio");
        for(let i = 0; i < devolucion.length-1; i++) {
          caja[i] += devolucion[i]; // Metemos el dinero de la devolucion en la caja de nuevo.
          devolucion[i] = 0;  // Ponemos la casilla a 0 porque le quitamos los billetes al usuario.
        }
        dineroTotal(caja)
      }  else {
        mostrarDinero(devolucion);
        for(let i = 0; i < pago.length-1; i++) {
          caja[i] += pago[i]; // Metemos el dinero del pago en la caja de nuevo.
          pago[i] = 0;  // Ponemos la casilla a 0 porque le cobramos los billetes al usuario.
        }  
        dineroTotal(caja)
      }
    }
  }
}