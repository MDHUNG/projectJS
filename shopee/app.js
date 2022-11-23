 // select API
const bannerApi = 'http://localhost:3000/banner';
const categoryApi = 'http://localhost:3000/category';
const productApi = 'http://localhost:3000/product_sale';

function start() {
  getBanner( function (banners) {
    renderBanner(banners);
  })

  getCategory(function(categoryes){
    renderCategory(categoryes);
  })

  getProduct( function(products){
    renderProduct(products);
  })

}

start();

// banner
function getBanner(callBack){
  fetch(bannerApi)
    .then(function(response){
      return response.json();
    })
    .then(callBack);
}

function renderBanner (banners) {
  const footerBannerBlog = document.querySelector('.footer-banner');
  var htmls = banners.map(function(banner){
    return `
    <a href="#" class="utiliti">
    <div class="body-footer-banner">               
      <div class="icon-footer-banner">
        <img src="${banner.src}" alt="${banner.description}" class="icon">
      </div>
      <div class="ctn-footer-banner">${banner.description}</div>
    </div>
  </a>
    `
  });
  footerBannerBlog.innerHTML = htmls.join('');
}

// category
function getCategory(callback){
  fetch(categoryApi)
    .then(function(response){
      return response.json();
    })
    .then(callback);
} 

function renderCategory (categoryes) {
  const categoryList = document.querySelector('.category-section');
  var htmls = categoryes.map(function(category){
    return`
    <div class="ctn-section">
    <li class="category-item">
      <div class="header-li">
       <div class="img-li">
        <img src="${category.src_top}" alt="${category.description_top}">
       </div>
        <p>${category.description_top}</p>
      </div>
      <div class="footer-li">
        <div class="img-li">
          <img src="${category.src_bottom}" alt="${category.description_bottom}">
        </div>
        <p>${category.description_bottom}</p>
      </div>
    </li>
  </div>
    `
  })
  categoryList.innerHTML = htmls.join('');
}

//countdown time

function time(){
let hour = 24;
let minute = 60;
let seconds = 60;
const timeHour = document.querySelector('.time-hour');
const timeMinute = document.querySelector('.time-minute');
const timeSecond = document.querySelector('.time-second');

setInterval(function countdownSecond () {
  seconds--;
  if(seconds === 0){
    minute--;
    seconds = 60;
    if(minute === 0){
      hour--;
      minute = 60;
    }
  }
  timeSecond.innerHTML = seconds;
  timeMinute.innerHTML = minute;
  timeHour.innerHTML = hour;
},1000)
}
time();

// product list

function getProduct(callback){
  fetch(productApi)
    .then(function(response){
      return response.json();
    })
    .then(callback); 
}

function renderProduct (products){
  const productList = document.querySelector('.item-sale');
  const htmls = products.map(function(product){
    return`
    <div class="product-sale">
    <li class="product-list">
      <a href="#" class="product">
        <div class="sale-product">
          <img src="${product.src}" alt="flash sale">
        </div>
        <div class="price-product">
          <span>${product.price}</span>
        </div>
        <div class="products-sold">
          <div class="download-out">
          </div>
          <div class="download-ctn">Đang Bán Chạy</div>
        </div>
      </a>
    </li>
  </div>
    `
  })
  productList.innerHTML = htmls.join('');
}