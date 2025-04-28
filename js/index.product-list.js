// fetch('api/products.json')
//   .then( response => response.json() )
//   .then( products => renderProducts(products) );

const response = await fetch("api/products.json");
const products = await response.json();
renderProducts(products);

function renderProducts(products, rate = 1) {
  let productHTML = "";
  for (const product of products) {
    productHTML += `
        <article class="products__item">
            <img class="products__image" src="${product.image}" alt="${
      product.title
    }">
            <h3 class="products__name">${product.title}</h3>
            <p class="products__description">${product.description}</p>
            </p>
            <div class="products__actions">
                <button class="products__button products__button--info button button-card">
                    Info
                </button>
                <button class="products__button products__button--buy button button-card">
                    Buy for ${(product.price * rate).toFixed(2)}
                </button>
            </div>
        </article>
        `;
  }
  const productList = document.querySelector(".products__list");
  productList.innerHTML = productHTML;
}

let currencies;
async function changeCurrency() {
  if (!currencies) {
    const response = await fetch(
      "https://api.exchangerate-api.com/v4/latest/USD"
    );
    currencies = await response.json();
  }
  const selectedCurrency = document.querySelector(".products__currency").value;
  const rate = currencies.rates[selectedCurrency];
  renderProducts(products, rate);
}

document.querySelector(".products__currency").addEventListener('change', changeCurrency);