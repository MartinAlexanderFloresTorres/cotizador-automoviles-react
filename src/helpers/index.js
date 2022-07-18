//=============== getDiferenciaYear ===============//
/**
 * Retorna la diferencia del año actual con el año ingresado
 * @param {year} year
 * @returns diferencia_year
 */
export function getDiferenciaYear(year) {
  const yearActual = new Date().getFullYear();
  return yearActual - Number(year);
}

//=============== getCalcularMarca ===============//
/**
 * retorna el valor a incrementar
 * @param {*} marca
 * @returns incremento
 */
export function getCalcularMarca(marca) {
  let incremento;

  // 1 - Europeo 30%
  // 2 - Americano 15%
  // 3 - Asiatico 5%

  if (marca == "1") {
    incremento = 1.3;
  } else if (marca == "2") {
    incremento = 1.15;
  } else {
    incremento = 1.05;
  }
  return incremento;
}

//=============== getCalcularPlan ===============//
/**
 * retorna el valor a descontar
 * @param {*} plan
 * @returns descuento
 */
export function getCalcularPlan(plan) {
  // 1 - Basico 20%
  // 2 - Completo 50%
  return plan == "1" ? 1.2 : 1.5;
}

/**
 * retorna un valor en formato de dinero
 * @param {*} cantidad
 * @returns dinero_formateado
 */
export function getFormatearDinero(cantidad) {
  return cantidad.toLocaleString("en-PE", {
    style: "currency",
    currency: "PEN",
  });
}
