const Paciente = require("../src/js/paciente")

describe("Paciente", () => {
  var Paciente = require('../src/js/paciente');
  it('deve calcular o imc', ()=> {
    var pessoa = new Paciente("Paciente", 28, 72, 1.82);
    expect(pessoa.imc()).toEqual(72 / (1.82 * 1.82));
  })
})