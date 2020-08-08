const Paciente = require("../src/js/paciente");

function pacienteBuilder() {
  let nome, idade, peso, altura;
  nome = 'Gabriel',
  idade = 29,
  peso = 114,
  altura = 1.68;

  var clazz = {
    build: () => {
      return Paciente(nome, idade, peso, altura);
    },

    idade: (value) => {
      idade = value;
      return this;
    },

    peso: (value) => {
      peso = value;
      return this;
    },

    altura: (value) => {
      altura = value;
      return this;
    }
  }

  return clazz;
}

module.exports = pacienteBuilder;