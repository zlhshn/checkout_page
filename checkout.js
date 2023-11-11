const deleteAllProducts = document.querySelector(".delete-div .fa-trash-can");

const products = document.querySelector(".products");

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
  } else if (e.target.classList.contains("fa-minus")) {
    if (e.target.nextElementSibling.innerText > 1) {
      e.target.nextElementSibling.innerText--;
      calculateProductPrice(e.target);
    } else if ((e.target.nextElementSibling.innerText = 1)) {
      confirm("Do you want delete product?") &&
        e.target.closest(".product").remove();
      calculateProductPrice(e.target);
    }
  } else if (e.target.classList.contains("fa-trash-can")) {
    e.target.closest(".product").remove();
    calculateProductPrice(e.target);
  }
});



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
const FREE_SHİP_LİMİT = 1000;

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
})
