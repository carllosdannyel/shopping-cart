const fetchProducts = (item) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  
  return fetch(url)
    .then((response) => {
      if (!item) {
        throw new Error('You must provide an url');
      }
      return response.json();
    })
    .then((results) => results)
    .catch((error) => error.message);
  };

fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
