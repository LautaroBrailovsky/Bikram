// 13
let variableValorNumerico = 15;

// 14
const MiNombre = "Lautaro";

// 15
const MiNumeroFav = 7;

// 16
let booleanoOr = booleano1 || booleano2;

// 17
let booleanoMix1 = (booleano1 && (TAU / 2 == PI)) || (variableValorNumerico >= MiNumeroFav);

// 18
let seisNoEsNueve = 6 !== 9;

// 19
let booleanoMix2 = (variableValorNumerico > 0) || (variableValorNumerico < -(MiNumeroFav * TAU));

// 20
let valorSuma = MiNumeroFav + variableValorNumerico;

// 21
let valorResta = MiNumeroFav - variableValorNumerico;

// 22
let valorMultiplicacion = MiNumeroFav * variableValorNumerico;

// 23
let valorDivision = MiNumeroFav / 3;

// 24
let contarHasta10 = 0;
while (contarHasta10 !== 10) {
  contarHasta10++;
}

// 25
let preI = 0;
let preJ = 0;
for (let i = 0; i < 11; i++) {
  preI = preI + ++preJ;
}

// 26
let sumaImpares = 0;
for (let i = 0; i < 10; i++) {
  if (i % 2 !== 0) {
    sumaImpares = sumaImpares + i;
  }
}
