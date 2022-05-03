const fetchItem = (ID) => {
  const url = `https://api.mercadolibre.com/items/${ID}`;

  return fetch(url)
  .then((response) => response.json())
  .then((resultado) => resultado);
};

fetchItem('MLB2081933352');

if (typeof module !== 'undefined') {
  module.exports = {
    fetchItem,
  };
}
