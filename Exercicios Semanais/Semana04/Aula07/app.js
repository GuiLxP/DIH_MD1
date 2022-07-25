class CalculadorDeAreas {
    constructor(tipo, base, altura) {
        this.tipo = tipo;
        this.base = base;
        this.altura = altura;
    }

    calcular() {
        let resultado = 0;
        switch (this.tipo) {
            case "triangulo":
                resultado = (this.base * this.altura) / 2;
                break;
            case "quadrado":
            case "retangulo":
                resultado = this.base * this.altura;
                break;
            default:
                throw new Error(
                    "Poiligono não identificado ou não possível de realizar contas no momento..."
                );
        }
        return resultado;
    }
}

let calculador = new CalculadorDeAreas("triangulo", 6, 8);
const areaDoTriangulo = calculador.calcular();
console.log(`A área do triângulo é: ${areaDoTriangulo}`);

calculador = new CalculadorDeAreas("quadrado", 4, 4);
const areaDoQuadrado = calculador.calcular();
console.log(`A área do quadrado é: ${areaDoQuadrado}`);

calculador = new CalculadorDeAreas("retangulo", 4, 6);
const areaDoRetangulo = calculador.calcular();
console.log(`A área do retângulo é: ${areaDoRetangulo}`);
