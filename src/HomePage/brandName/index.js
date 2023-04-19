import {axiosApi} from '@/axios'
import {BrandPage} from '@/HomePage'

export function brandName(brandname) {
    axiosApi("/shoes").then(res=>{
    let test= res.data.filter(item=>item.brand === brandname)
    BrandPage.querySelector("#brandName").innerHTML = brandname
    console.log(test);
    test.map(item =>{
      BrandPage.querySelector("section").innerHTML += `
      <div class="">
        <div class="bg-gray-100 p-4 rounded-3xl"><img src="${item.images}" alt=""></div>
        <h3 class="text-lg font-bold mt-2">${item.title}</h3>
        <span class=" text-md mt-2"><span>$</span>${item.price}</span>
      </div>
      `
    })

    })
}