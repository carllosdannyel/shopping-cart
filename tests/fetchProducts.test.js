require('../mocks/fetchSimulator');
const { fetchProducts } = require('../helpers/fetchProducts');
const computadorSearch = require('../mocks/search');

describe('1 - Teste a função fecthProducts', () => {
  // implemente seus testes aqui
  beforeEach(async () => {
    return resultado = await fetchProducts('computador');
});
  // fail('Teste vazio');
  it('Teste se `fetchProducts` é uma função', async () => {
    await expect(typeof fetchProducts).toBe('function')
  });

  it('Execute a função `fetchProducts` com o argumento "computador" e teste se `fetch` foi chamada', () => {
  fail('Teste vazio');
  });

  it('Teste se, ao chamar a função `fetchProducts` com o argumento "computador", a função `fetch` utiliza o endpoint "https://api.mercadolibre.com/sites/MLB/search?q=computador"', () => {
  fail('Teste vazio');
  });

  it('Teste se o retorno da função `fetchProducts` com o argumento "computador" é uma estrutura de dados igual ao objeto `computadorSearch`, que já está importado no arquivo', () => {
  fail('Teste vazio');
  });

  it('Teste se, ao chamar a função `fetchProducts` sem argumento, retorna um erro com a mensagem: `You must provide an url`', () => {
  fail('Teste vazio');
  });
});
