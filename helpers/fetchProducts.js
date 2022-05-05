const fetchProducts = async (item) => {
  const url = `https://api.mercadolibre.com/sites/MLB/search?q=${item}`;
  
  if (!item) {
    throw new Error('You must provide an url');
  }
    return fetch(url)
    .then((response) => response.json())
    .then((data) => data);
};

// fetchProducts('computador');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchProducts,
  };
}
