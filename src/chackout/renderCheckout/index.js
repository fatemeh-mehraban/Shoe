import {axiosApi} from '@/axios'
import {arrayOfObj} from '@/HomePage'
import { checkout } from '@/chackout';
export let priceTotal = 0


export function reneTextCart(item) {

    checkout.querySelector("#section").innerHTML += `
    <div id=${item.id} class="cardpro flex gap-2 items-center bg-white p-3 rounded-3xl">
        <img src="${item.images}" alt="" class="p-2 rounded-3xl bg-gray-200 w-[30%]">
        <div class="w-full flex flex-col gap-3 ml-3">
          <div class="flex justify-between w-full">
            <p id="titleProductCart">${item.title}</p>
          </div>

          <div id="informationProduct" class="text-gray-500">
            <div>
              <span id="colorCart" class="px-2 bg-${item.color}-700 rounded-full"></span>
              <span id="colorText" class="ml-2 capitalize" >${item.color} |</span>
              <span class="ml-2" id="SizeText">Size = </span>
              <span id="SizeCart" class="text-gray-500 capitalize">${item.size}</span>
            </div>
          </div>


          <div id="priceBox" class="flex items-center justify-between">
            <span class="text-lg font-bold">
              <span class="text-lg font-bold">$</span>
              <span class="text-lg font-bold" data-id="totalPrice">${item.count * item.price}</span>
            </span>

            <div id="" class="Counter flex items-center justify-center gap-3 font-bold px-3 py-2 bg-gray-100 rounded-full">
              <span data-action="number" class="text-sm font-bold">${item.count}</span>
            </div>
          </div>


        </div>
      </div>


    `
  }
  export function RenderCheckout() {
    checkout.querySelector("#section").innerHTML=""
    arrayOfObj.map(item => {
      reneTextCart(item)
      priceTotal += +item.count * +item.price
    })
//     NumberOfShoesCart()
//     const finalPrice = checkout.querySelector("#finalPrice")
//        finalPrice.innerText = priceTotal
   
}
  export function NumberOfShoesCart() {
    // checkout.querySelector("#section").addEventListener("click",(e)=>{
    //   if (e.target.tagName !== "I") return
    //   if(e.target.dataset.action == "plus"){
    //     let plusNumber = +e.target.previousElementSibling.innerHTML
    //     e.target.previousElementSibling.innerHTML = plusNumber + 1
    //   } 
    //   if(e.target.dataset.action == "minus") {
    //     let plusNumber = +e.target.nextElementSibling.innerHTML
    //     e.target.nextElementSibling.innerHTML = plusNumber - 1
    //   }    
    //   totalPrice(e)

    //     deleteCart(e)
   
    // })

  }

// export function totalPrice(e) {   
//   if(e.target.closest(".Counter")){
//   axiosApi(`/shoes?id=${e.target.closest(".cardpro").id}`).then(res=>{
//     e.target.closest(".Counter").previousElementSibling.children[1].innerHTML = +(res.data[0].price) * +(e.target.closest(".Counter").children[1].innerHTML)
//   })}
  
// }

