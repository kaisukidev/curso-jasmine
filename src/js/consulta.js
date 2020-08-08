function Consulta(paciente, procedimentos, particular, retorno, data){
  var clazz = {
    preco: () => {
      if(retorno) return 0;
      let precoFinal = 0;

      procedimentos.forEach(procedimento => {
        if(procedimento == "raio-x") precoFinal += 55;
        else if(procedimento == "gesso") precoFinal += 32;
        else precoFinal += 25;
      });

      if(particular) precoFinal *= 2;

      return precoFinal;
    },
    getNome: () => { return paciente},
    getProcedimentos: () => { return procedimentos},
    isParticular: () => { return particular},
    isRetorno: () => { return retorno},
    getData: () => { return data}
  }
  return clazz;
}

module.exports = Consulta;