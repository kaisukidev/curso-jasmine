describe('Consulta\n', () => {
  var PacienteBuilder = require('./pacienteBuilder');
  var Consulta = require('../src/js/consulta');

  let paciente;

  beforeEach(() => {
    paciente = new PacienteBuilder().build();
  })


  describe('Consultas do tipo retorno\n', () => {
    it('Não deve cobrar nada se for um retorno', () => {
      let consulta = new Consulta(paciente, [], true, true)
      expect(consulta.preco()).toEqual(0); // retorno é igual a zero
    })
  })

  describe('Consultas com procedimentos\n', () => {
    it('Deve cobrar 25 por cada procedimento comum', () => {
      let consulta = new Consulta(paciente, ['proc1', 'proc2'], false, false);

      expect(consulta.preco()).toEqual(50); // 25 + 25
    })

    it('Deve cobrar preço específico dependendo do procedimento', () => {
      let consulta = new Consulta(paciente, ['procedimento-comum', 'raio-x', 'procedimento-comum', 'gesso'], false, false);

      expect(consulta.preco()).toEqual(137); // 25 + 55 + 25 + 32
    })
  })
})