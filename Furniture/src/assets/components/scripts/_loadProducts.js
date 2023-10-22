import Product from '../modules/Product.module';
import { trendCategoriesSlider } from './_slidersInit';

//=============================
//# Best sellers products data
//=============================

import bestSellersData from '/src/assets/data/best-sellers.json';

//# Best sellers products
const loadBestSellers = function () {
  //# Layout products
  const layoutProducts = Array.from(
    document.querySelectorAll('.best-sellers__items .item')
  ).map(product => {
    const img = product.querySelector('.item__img > img');
    const loader = product.querySelector('.item__preloader');

    if (!(loader && img))
      console.error(
        'The connection does not exist between image and loader. Check the selectors are right'
      );

    img.addEventListener('load', () => (loader.style.display = 'none'));
    if (img.complete) loader.style.display = 'none';

    return product;
  });

  //# Data products
  const products = bestSellersData.map(
    product =>
      new Product(product, {
        html: `
          ${product['hot-product'] ? '<div class="hot"></div>' : ''}
          ${
            product.discount
              ? `<div class="sale">${product.discount}</div>`
              : ''
          }
          <div class="item__preloader">
            <span class="loader"></span>
          </div>
          <a class="item__content" href="##">
            <div class="item__img">
              <img
                style="transform: scale(${product.imgScale})"
                loading="lazy"
                src="${product.imgsrc}"
                alt="${product.name}"
              />
            </div>
            <h4 class="item__name">${product.name}</h4>
            <p class="item__price">$${product.price.toFixed(2)}</p>
          </a>
          <div class="item__tools">
            <span class="_icon-twoArrowsReload"></span>
            <span class="_icon-emptyHeart"></span>
            <span class="_icon-cartLessDetails"></span>
          </div>
        `,
        parentEl: '.best-sellers__items',
        attributes: [['data-product-id', product.id]],
        loader: {
          imgEl: '.item__img > img',
          loaderEl: '.item__preloader',
        },
      })
  );

  return layoutProducts.concat(products);
};
loadBestSellers();

//=============================
//# Products data
//=============================

import productsData from '/src/assets/data/products.json';

const loadProducts = function (category) {
  const parentContainer = document.querySelector('.trend-categories__products');
  parentContainer.innerHTML = '';

  const products = productsData[String(category)].map(
    product =>
      new Product(product, {
        html: `
          ${product['hot-product'] ? '<div class="hot"></div>' : ''}
          ${
            product.discount
              ? `<div class="sale">${product.discount}</div>`
              : ''
          }
          <div class="product__preloader">
            <span class="loader"></span>
          </div>
          <a class="product__content" href="##">
            <div class="product__img">
              <img
                style="transform: scale(${product.imgScale});"
                loading="lazy"
                src="${product.imgsrc}"
                alt="${product.name}"
              />
            </div>
            <h4 class="product__name">${product.name}</h4>
            <p class="product__price">${product.price}$</p>
          </a>
          <div class="product__tools">
            <span class="_icon-twoArrowsReload"></span>
            <span class="_icon-emptyHeart"></span>
            <span class="_icon-cartLessDetails"></span>
          </div>`,
        className: 'product',
        parentEl: '.trend-categories__products',
        attributes: [['data-product-id', product.id]],
        loader: {
          imgEl: '.product__img > img',
          loaderEl: '.product__preloader',
        },
      })
  );

  return products;
};

const changeCategory = function (e) {
  const tab = e.clickedSlide.dataset.productsTab;
  loadProducts(tab);

  return tab;
};
trendCategoriesSlider.on('click', changeCategory);

//# Load default category when html block in viewport
const trendCategoriesObserver = function () {
  const target = document.querySelector('.trend-categories');

  const callback = function (entries, observer) {
    if (entries[0].isIntersecting) {
      loadProducts('dressing table'); // as default
      observer.unobserve(target); // stop observer when default category has been loaded
    }
  };

  const observer = new IntersectionObserver(callback, {
    root: null,
    threshold: 0,
  });

  observer.observe(target);
};
trendCategoriesObserver();
