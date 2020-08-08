const Consulta = require("./consulta");

function Agendamento(){
  var clazz = {
    para: (consulta) => {
      let novaData, novaConsulta, umDia, vinteDias;
      umDia = 1000 * 60 * 60 * 24; // Em Milissegundos
      vinteDias = 1000 * 60 * 60 * 24 * 20; // Em Milissegundos
      novaData = new Date(consulta.getData().getTime() + vinteDias);
      while(novaData.getDay() == 0 || novaData.getDay() == 6) novaData = new Date(novaData.getTime() + umDia);

      novaConsulta = new Consulta(consulta.getNome(), consulta.getProcedimentos(), consulta.isParticular(), true, novaData);
      return novaConsulta;
    }
  }
  return clazz;
}

module.exports = Agendamento;