// tempo esperado no formno (constante)
export const EXPECTED_MINUTES_IN_OVEN = 40

// Calcula quanto tempo ainda falta no forno
export function remainingMinutesInOven(actualMinutesInOven) {
  return EXPECTED_MINUTES_IN_OVEN - actualMinutesInOven;
}

// Calcula o tempo de preparo com base no número de camadas
export function preparationTimeInMinutes(numberOfLayers) {
  return numberOfLayers * 2;
}

// Calcula o tempo total gasto (preparo + forno)
export function  totalTimeInMinutes(numberOfLayers, actualMinutesInOven){
  return preparationTimeInMinutes(numberOfLayers) + actualMinutesInOven;
}