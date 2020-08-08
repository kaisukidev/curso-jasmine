describe('firstTest', () => {
  var MaiorEMenor = require('../src/js/firstTest');
  it('Deve entender números em ordem não sequencial', () => {
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([5,15,7,9]);
    expect(algoritmo.pegaMaior()).toEqual(15);
    expect(algoritmo.pegaMenor()).toEqual(5);
  })

  it('Deve entender números em ordem crescente', () => {
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([5,6,7,8]);
    expect(algoritmo.pegaMaior()).toEqual(8);
    expect(algoritmo.pegaMenor()).toEqual(5);
  })

  it('Deve entender números em ordem decrescente', () => {
    var algoritmo = new MaiorEMenor();
    algoritmo.encontra([8,7,6,5]);
    expect(algoritmo.pegaMaior()).toEqual(8);
    expect(algoritmo.pegaMenor()).toEqual(5);
  })
});