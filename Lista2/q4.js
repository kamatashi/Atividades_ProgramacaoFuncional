//  Programa para classificar um triângulo em Equilátero, Isósceles ou Escaleno a partir dos valores de seus três lados.

function classTrangulo (triangulo) {
    if (triangulo[0] == triangulo[1] == triangulo[2]) return "Equilátero"
    else if ((triangulo[0] == triangulo[1] != triangulo[2]) || (triangulo[0] =! triangulo[1] == triangulo[2]) || (triangulo[0] == triangulo[0] != triangulo[2])) return "Isóceles"
    else return "Escaleno"

}

