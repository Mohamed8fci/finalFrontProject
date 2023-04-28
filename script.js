var container = document.getElementById("imageContainer");
if (container) {
  var imgs = container.getElementsByTagName("img");
  var btnNext = document.getElementById("arrow_left");
  var btnPrevious = document.getElementById("arrow_right");
var currentImg = 0;

function goNext() {
    imgs[currentImg].style.display = "none";
    currentImg++;
    if (currentImg > imgs.length - 1) {
        currentImg = 0;
    }
    imgs[currentImg].style.display = "block";
}

function backPrevious() {
    imgs[currentImg].style.display = "none";
    currentImg--;
    if (currentImg < 0) {
        currentImg = imgs.length - 1;
    }
    imgs[currentImg].style.display = "block";
}

function playingSlideShow(){
    slideShowInterval = setInterval(goNext,2000);
}
// btnNext.addEventListener("click", playingSlideShow);
// btnPrevious.addEventListener("click", backPrevious);

// Display the first image by default
imgs[currentImg].style.display = "block";



playingSlideShow();

}


const filterBtns = document.querySelectorAll('.filter-btn');
// get all products
const products = document.querySelectorAll('.pro');

// add click event listener to each filter button
filterBtns.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    e.preventDefault();
    // get the data filter value of the clicked button
    const filter = e.target.dataset.filter;
    // iterate over all products
    products.forEach((product) => {
      // check if the product has the corresponding category class
      if (product.classList.contains(filter)) {
        // show the product
        product.style.display = 'block';
      } else {
        // hide the product
        product.style.display = 'none';
      }
    });
  });
});


var form = document.querySelector('#my-form');
var nameInput = document.querySelector('#name');
var emailInput = document.querySelector('#email');
var passwordInput = document.querySelector('#password');
var validationErrors = document.querySelector('#validation-errors');

function validateForm(event) {
  event.preventDefault();
  validationErrors.innerHTML = '';

  var errors = [];

  if (nameInput.value.length < 3) {
    errors.push('Name must be at least 3 characters');
  }

  if (!emailInput.value.includes('@')) {
    errors.push('Email must be a valid email address');
  }

  if (passwordInput.value.length < 8) {
    errors.push('Password must be at least 8 characters');
  }

  if (errors.length > 0) {
    validationErrors.innerHTML = errors.join('<br>');
  } else {
    form.submit();
  }
}

if (form) {
  form.addEventListener('submit', validateForm);
}



const backToTopBtn = document.querySelector("#back-to-top-btn");

backToTopBtn.addEventListener("click", () => {
  window.scrollTo({ top: 0});
});



const close = document.getElementById('close');
const bar = document.getElementById('bar');
const nav = document.getElementById('navbar');

if(bar){
    bar.addEventListener('click',() => {
        nav.classList.add('active');
    })
}

if(close){
    close.addEventListener('click',() =>{
        nav.classList.remove('active');
    })
}


let cartCount = 0
let addToCartBtn = document.querySelectorAll(".add-cart");
addToCartBtn.forEach((btn) =>{

  btn.addEventListener('click',(e) => {
    e.preventDefault();
    // + an item in cart
    cartCount += 1;
    // storeCartItem('cart-item',cartCount);
    // render the icon in navbar
    renderCartItem(cartCount); //
  })  
})

function renderCartItem(newCartCount){ 
  let cartIcons = document.querySelectorAll('.cart-count-indicator');
  cartIcons.forEach(icon => {
    icon.innerHTML = newCartCount;
  });
}

(function(){
  renderCartItem(0);
})();