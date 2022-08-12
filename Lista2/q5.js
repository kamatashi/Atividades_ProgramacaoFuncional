// Programa para calcular a distância euclidiana entre dois pontos [(x1, y1), (x2,y2)][(x1,y1),(x2,y2)] no plano cartesiano. Utilize a equação geral da reta para calcular a distância quando a reta não for paralela a nenhum dos eixos (abscissas ou ordenadas) e as versões simplificadas quando for paralela.
function distanciaEuclidiana (pontoA, pontoB, dimencoes){
    if (dimencoes===0) return 0
    else {
        return (pontoA - pontoB) + distanciaEuclidiana(pontoA[0+1], pontoB[0+1] , dimencoes-1)
    }
}

const x = [1,1]
const y = [3,5]

resultado = distanciaEuclidiana(x, y, 2)

console.log(resultado)