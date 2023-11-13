const deleteAllProducts = document.querySelector(".delete-div .fa-trash-can");

const products = document.querySelector(".products");
const numberEl = document.querySelector('#number');
deleteAllProducts.addEventListener("click", () => {

  if(confirm('Do you want delete prodcut?')){
    products.textContent = "No Products";
    products.classList.add("no-pro");
  }
 
});

products.addEventListener("click", (e) => {
  if (e.target.classList.contains("fa-plus")) {
    e.target.closest(".plus-minus").querySelector(".quantity").textContent++;
    calculateProductPrice(e.target);
    updateNumber();
  } else if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      calculateProductPrice(e.target);
      updateNumber();
    } else if ((e.target.nextElementSibling.innerText = 1)) {
      confirm("Do you want delete product?") &&
        e.target.closest(".product").remove();
      calculateProductPrice(e.target);
      updateNumber();
    }
  } else if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest(".product").remove();
    calculateProductPrice(e.target);
    updateNumber();
  }
});

const updateNumber = () => {
  const totalQuantity = Array.from(document.querySelectorAll(".quantity"))
    .map((quantityElement) => parseInt(quantityElement.textContent))
    .reduce((total, quantity) => total + quantity, 0);

  numberEl.textContent = totalQuantity.toString();
};

const calculateProductPrice = (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price").textContent;

  const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price");

  const quantity = btn
    .closest(".buttons-div")
    .querySelector("#quantity").textContent;

  productPrice.textContent = (discountedPrice * quantity).toFixed(2);
  calculateTotal()
};


const DELİVERY = 25.99;
const TAX = 0.18;
const FREE_SHİP_LİMİT = 500;

const calculateTotal = () => {

  const prices = document.querySelectorAll('#product-price')

  const subtotal = [...prices].reduce((sum,price)=>

    sum += Number(price.textContent),0
  )

  // ?delivery
const delivery = subtotal>= FREE_SHİP_LİMİT || subtotal === 0 ? 0 : DELİVERY

// ? tax

const tax = subtotal * TAX

// ? total

const total = subtotal + delivery + tax



document.getElementById('subtotal').textContent = subtotal.toFixed(2)

document.getElementById('tax').textContent = tax.toFixed(2)

document.getElementById('total').textContent  = total.toFixed(2)

document.getElementById('delivery').textContent = delivery.toFixed(2)

!total  && noProduct()

};



const noProduct =()=>{
  products.textContent = "No product"
  products.classList.add("no-product")
  document.querySelector(".delete-div").style.display = "none"

}

window.addEventListener("load", () => {
  calculateTotal()
  updateNumber();
})

document.addEventListener('DOMContentLoaded', function () {
  const searchIcon = document.querySelector('.bi-search');
  const inputSearch = document.querySelector('#search');
  const searchDiv = document.querySelector('#searchDiv');

  searchIcon.addEventListener('click', () => {
    inputSearch.classList.toggle('d-none');
    searchDiv.classList.toggle('searchDiv');
    inputSearch.classList.toggle('inputSearch');
    searchIcon.classList.toggle('magnifier');
  });
});





  const personIcon = document.querySelector('.bi-person');
  const form = document.querySelector('#form');
  const closeForm = document.querySelector('#closeForm');

  personIcon.addEventListener('click', (e) => {
    document.querySelector('main').style.opacity ='.6'
    form.style.display = 'block';
    
   
  });

