//  Programa para determinar se três valores passados podem representar um triângulo ou não.
function eTriangulo(triangulo) {
    if (triangulo == []) return undefined
    else return verificadorTriangulo(triangulo[0], triangulo[1], triangulo[2])
}

const verificadorTriangulo = (a, b, c) => ((a < b+c) && (b < a+c) && (c < a+b)) ? true : false
