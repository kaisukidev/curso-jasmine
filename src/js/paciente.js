function Paciente(nome, idade, peso, altura) {
  var clazz = {
    imprime: () => {
      alert(`${nome} tem ${idade} anos`)
    },
    batimentos: () => {
      return idade * 365 * 24 * 60 * 80;
    },
    imc: () => {
      return peso / (altura * altura);
    }
  }
  return clazz;
}

module.exports = Paciente;