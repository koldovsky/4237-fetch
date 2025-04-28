const products = [
  {
    id: 1,
    title: "Baby Yoda",
    description: "The Child of the Mandalorian",
    price: 19.99,
    image: "img/baby-yoda.svg",
  },
  {
    id: 2,
    title: "Banana",
    description:
      "A ripe, yellow banana full of potassium and perfect for a healthy snack.",
    price: 14.99,
    image: "img/banana.svg",
  },
  {
    id: 3,
    title: "Girl",
    description:
      "A cheerful girl character, great for creative projects and storytelling.",
    price: 17.99,
    image: "img/girl.svg",
  },
  {
    id: 4,
    title: "Viking",
    description: "A brave Viking warrior, ready for adventure and exploration.",
    price: 21.99,
    image: "img/viking.svg",
  },
];

function renderProducts(products) {
  let productHTML = "";
  for (const product of products) {
    productHTML += `
        <article class="products__item">
            <img class="products__image" src="${product.image}" alt="${product.title}">
            <h3 class="products__name">${product.title}</h3>
            <p class="products__description">${product.description}</p>
            </p>
            <div class="products__actions">
                <button class="products__button products__button--info button button-card">
                    Info
                </button>
                <button class="products__button products__button--buy button button-card">
                    Buy for $${product.price}
                </button>
            </div>
        </article>
        `;
  }
  const productList = document.querySelector(".products__list");
  productList.innerHTML = productHTML;
}
renderProducts(products);