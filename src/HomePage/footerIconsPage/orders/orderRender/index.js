import {arrayOfObj,Order} from '@/HomePage'
// export let priceTotal = 0


export function reneTextOrder(item) {

  Order.querySelector("#section").innerHTML += `
    <div id=${item.id} class="cardpro flex gap-2 items-center bg-white p-3 rounded-3xl">
        <img src="${item.images}" alt="" class="p-2 rounded-3xl bg-gray-200 w-[30%] h-[150px]">
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
          <div id="" class="text-center text-sm py-2 px-3 rounded-md bg-gray-200 w-32">
          completed 
          </div>

          <div id="priceBox" class="flex items-center justify-between">
            <span class="text-lg font-bold">
              <span class="text-lg font-bold">$</span>
              <span class="text-lg font-bold" data-id="totalPrice">${item.count * item.price}</span>
            </span>

            <div id="" class="text-center text-sm  px-3 rounded-full bg-black py-2 text-white">
              Buy Again
            </div>
          </div>


        </div>
      </div>


    `
  }
  export function RenderCompleted() {
    Order.querySelector("#section").innerHTML=""
    arrayOfObj.map(item => {
      reneTextOrder(item)
      // priceTotal += +item.count * +item.price
    })
}

