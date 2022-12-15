//fill é um método que vai inserir dentro de um array determinados valores. Serve para popular ou repetir algumas funções.

Array(30)
  .fill(0)
  .forEach(() => console.log('opa'));

  // nesse exemplo, ele basicamente cria um array com 30 elementos, dentro desses 30 ele insere o valor 0, e com o foreach nós populamos cada um desses 30 elementos um console.log.

// exemplo em typescript
class Carro {
  private velocidadeAtual: number = 0;

  constructor(
    public marca: string,
    public modelo: string,
    private velocidadeMaxima: number = 200
  ) {}

  private alterarVelocidade(delta: number): number {
    const novaVelocidade = this.velocidadeAtual + delta;
    const velocidadeValida =
      novaVelocidade >= 0 && novaVelocidade <= this.velocidadeMaxima;

    if (velocidadeValida) {
      this.velocidadeAtual = novaVelocidade;
    } else {
      this.velocidadeAtual = delta > 0 ? this.velocidadeMaxima : 0;
    }

    return this.velocidadeAtual;
  }

  //acelera de 5 em 5, gradativamente
  public acelerar(): number {
    return this.alterarVelocidade(5);
  }

  // freia de 5 em 5, gradativamente
  public frear(): number {
    return this.alterarVelocidade(-5);
  }
}

const carro1 = new Carro('ford', 'ka', 180);

// esse array .fill basicamente 
Array(30)
  .fill(0)
  .forEach(() => carro1.acelerar());
console.log(carro1.acelerar());
