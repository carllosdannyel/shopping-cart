const sectionItems = document.querySelector('.items');
const orderedList = document.querySelector('.cart__items');
const buttonClearCart = document.querySelector('.empty-cart');
const total = document.querySelector('.total-price');

const calculateTotalPrice = () => {
  const lis = document.querySelectorAll('li');
  let result = 0;
  lis.forEach((li) => {
    const value = li.innerText.split('$')[1];
    result += parseFloat(value);
  });
  total.innerHTML = `<h2>Preço Total: R$${result.toFixed(2)}</h2>`;
};

function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}
function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}

function cartItemClickListener(event) {
  event.target.remove();
  calculateTotalPrice();
  saveCartItems(orderedList.innerHTML);
}

function createCartItemElement({ id: sku, title: name, price: salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}

const setElements = async (event) => {
  const sectionFather = event.target.parentNode;
  const idElement = getSkuFromProductItem(sectionFather);
  const receiveId = await fetchItem(idElement);
  const allInfos = createCartItemElement(receiveId);
  orderedList.appendChild(allInfos);
  calculateTotalPrice();
  saveCartItems(orderedList.innerHTML);
};
  
  function createProductItemElement({ id: sku, title: name, price: salePrice, thumbnail: image }) {
  const section = document.createElement('section');
  const price = salePrice.toFixed(2);

  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', `R$ ${price}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', setElements);
  
  sectionItems.appendChild(section);
}

const loadItems = () => {
  fetchProducts('computador')
  .then(({ results }) => {
    results.map(({ id, title, thumbnail, price }) =>
      createProductItemElement({ id, title, thumbnail, price }));
      document.querySelector('.loading').remove();
    });
  };

const getLocalStorage = () => {
  const lis = getSavedCartItems('cartItems');
  orderedList.innerHTML = lis;
  
  const lisOfDom = document.querySelectorAll('.cart__item');
  lisOfDom.forEach((element) => {
    element.addEventListener('click', cartItemClickListener);
  });
};

const clearAllLis = () => {
  total.innerHTML = `<h2>Preço Total: R$${'0.00'}</h2>`;
  orderedList.innerHTML = '';
  localStorage.clear();
};

buttonClearCart.addEventListener('click', clearAllLis);

window.onload = () => { 
  loadItems();
  getLocalStorage();
  calculateTotalPrice();
};
