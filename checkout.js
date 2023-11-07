const deleteAllProducts = document.querySelector('.delete-div .fa-trash-can')

const products = document.querySelector('.products')


deleteAllProducts.addEventListener('click',()=>{


  products.textContent = 'No Products'
  products.classList.add('no-pro')


})


products.addEventListener('click',(e)=>{

  if(e.target.classList.contains('fa-plus')){

    e.target.closest('.plus-minus').querySelector('.quantity').textContent++
  }else if(e.target.classList.contains('fa-minus')){

      if(e.target.nextElementSibling.innerText >1){

  e.target.nextElementSibling.innerText--
      } else if(e.target.nextElementSibling.innerText =1){

        confirm('Do you want delete product?')  &&  e.target.closest('.product').remove()
      
               }


  }else if(e.target.classList.contains('fa-trash-can')){
  
    e.target.closest('.product').remove()
}


})




const calculateProductPrice = ()=>{



}