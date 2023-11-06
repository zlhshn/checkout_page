//***********************************/
//*        CHECKOUT APP
//***********************************/

// function createEventsForPlusMinus() {
//   const minusBtns = document.querySelectorAll(".fa-minus")
//   const plusBtns = document.querySelectorAll(".fa-plus")

//   minusBtns.forEach((minus) => {
//     minus.addEventListener("click", () => {
//       //? Eksilme islemleri
//     })
//   })

//   plusBtns.forEach((plus) => {
//     plus.addEventListener("click", () => {
//       //? Arttirma islemleri
//     })
//   })
// }

const deleteProducts = document.querySelector(".delete-div .fa-trash-can")
const products = document.querySelector(".products")

//? Delete Products button event
deleteProducts.addEventListener("click", (e) => {
  if (confirm("Silmek istedigine emin misiniz?")) {
    products.textContent = "No product"
    products.classList.add("no-product")
    // document.querySelector(".delete-div").style.display = "none"
    e.target.parentElement.style.display = "none"
  }
})

products.addEventListener("click", (e) => {
  console.log(e.target)

  //   if (e.target.classList.contains("fa-minus")) {
  //     alert("minus")
  //   } else if (e.target.classList.contains("fa-plus")) {
  //     alert("plus")
  //   } else if (e.target.classList.contains("fa-trash-can")) {
  //     alert("remove")
  //   } else {
  //     alert("diger")
  //   }

  if (e.target.classList.contains("fa-plus")) {
    // document.getElementById("quantity").innerText++
    e.target.previousElementSibling.innerText++
    calculateProductPrice(e.target)
  }
})




const calculateProductPrice = (btn) => {
  const discountedPrice = btn
    .closest(".product-info")
    .querySelector("#discounted-price").textContent

  const quantity = btn
    .closest(".buttons-div")
    .querySelector("#quantity").textContent

  const productPrice = btn
    .closest(".buttons-div")
    .querySelector("#product-price")

  productPrice.textContent = discountedPrice * quantity
}
