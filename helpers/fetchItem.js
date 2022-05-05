const fetchItem = async (ID) => {
  const url = `https://api.mercadolibre.com/items/${ID}`;
  if (!ID) {
    throw new Error('You must provide an url');
  }
  return fetch(url)
  .then((response) => response.json())
  .then((resultado) => resultado);
};

// console.log(fetchItem('MLB2081933352'));

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
