const sectionItems = document.querySelector('.items');
const orderedList = document.querySelector('.cart__items');

const saveOnLocalStorage = () => {
  const carrinho = orderedList.innerHTML;
  localStorage.setItem('selecionados', carrinho);
};

const getItemOnLocalStorage = () => {
  const getOnLocal = localStorage.getItem('selecionados');
  orderedList.innerHTML = getOnLocal;
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
  // coloque seu código aqui
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
};
  
  function createProductItemElement({ id: sku, title: name, price: salePrice, thumbnail: image }) {
  const section = document.createElement('section');

  section.className = 'item';
  
  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('span', 'item__price', `R$ ${salePrice}`));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'))
    .addEventListener('click', setElements);
  
  sectionItems.appendChild(section);
}

const loadItems = () => {
  fetchProducts('computador')
  .then(({ results }) => {
    results.map(({ id, title, thumbnail, price }) =>
      createProductItemElement({ id, title, thumbnail, price }));
    });
};

window.onload = () => { 
  loadItems();
};
