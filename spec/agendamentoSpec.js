const pacienteBuilder = require("./pacienteBuilder");
const Consulta = require("../src/js/consulta");
const Agendamento = require("../src/js/agendamento");

describe('Agendamento', () => {
  let gui, agenda;
  beforeEach(() => {
    gui = new pacienteBuilder().build(),
    agenda = new Agendamento();
  })
  it('Deve agendar para 20 dias depois', () => {
    let consulta, novaConsulta;

    consulta = new Consulta(gui, [], false, false, new Date(2014, 7, 1)),
    novaConsulta = agenda.para(consulta);

    expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 7, 21).toString());
  })

  it('Deve pular fins de semana', () => {
    let consulta, novaConsulta;

    consulta = new Consulta(gui, [], false, false, new Date(2014, 5, 30));
    novaConsulta = agenda.para(consulta);

    expect(novaConsulta.getData().toString()).toEqual(new Date(2014, 6, 21).toString());
  })
})