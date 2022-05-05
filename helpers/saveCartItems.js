const saveCartItems = (object) => {
  localStorage.setItem('cartItems', object);
};

if (typeof module !== 'undefined') {
  module.exports = saveCartItems;
}
