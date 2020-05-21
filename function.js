function carro (velocidadeMaxima = 200 , delta = 5){
    let velocidadeAtual = 0

     this.acelerar = () => {
        if (velocidadeAtual + delta <= velocidadeMaxima){
            velocidadeAtual += delta
        } else {
            velocidadeAtual = velocidadeMaxima
        }
    }
    this.getvelocidadeAtual = () => velocidadeAtual
}

const uno = new carro
uno.acelerar()
uno.acelerar()
uno.acelerar()
console.log(uno.getvelocidadeAtual())

const ferrari = new carro(450 , 35)
ferrari.acelerar()
ferrari.acelerar()
console.log(ferrari.getvelocidadeAtual())
