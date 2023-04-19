import {axiosApi} from '@/axios'
import {Product} from '@/HomePage'

// ***********   Single product page   *****************


// ***********  color*****************
export function color(items,datacart) {

        Product.querySelector("#colorShoes").innerHTML=""
    // datacart.title = item.title
    // datacart.price = item.price
    // datacart.img = item.images
    // datacart.id = item.id
// console.log(items);

    items.map(item =>{
            Product.querySelector("#colorShoes").innerHTML += `
    <div id="divColor" data-value=${item} class="flex items-center justify-center mr-4 bg-${item}-800 p-6 rounded-full">
    <i class="bi bi-check-lg text-white hidden"></i>
</div>
   `

})

    // ******************* select one color ******************

Product.querySelector("#colorShoes").addEventListener("click",(e)=>{
    if (e.target.nextElementSibling ) {
        e.target.nextElementSibling.closest("#divColor").children[0].classList.add("hidden")
        e.target.nextElementSibling.closest("#divColor").classList.remove("py-2" ,"px-4")
        e.target.nextElementSibling.closest("#divColor").classList.add("p-6")
    }
    if (e.target.previousElementSibling ) {
        e.target.previousElementSibling.closest("#divColor").children[0].classList.add("hidden")
        e.target.previousElementSibling.closest("#divColor").classList.remove("py-2" ,"px-4")
        e.target.previousElementSibling.closest("#divColor").classList.add("p-6")
    }

 e.target.closest("#divColor").children[0].classList.remove("hidden")
 e.target.closest("#divColor").classList.add("py-2" ,"px-4")
 datacart.color= e.target.closest("#divColor").dataset.value
 
 
})
}


// **********************size********************

export function size(item,datacart) {


    item.map(item =>{
            Product.querySelector("#Size").innerHTML += `
            <span id="${item}" class="border border-1 border-black rounded-full py-2 px-3">${item}</span>
           `
    })

    Product.querySelector("#Size").addEventListener("click",(e)=>{
        if (e.target.nextElementSibling ) {
            e.target.nextElementSibling.classList.remove("bg-black","text-white")
        }
        if (e.target.previousElementSibling) {
            e.target.previousElementSibling.classList.remove("bg-black","text-white")
        }
     e.target.classList.add("bg-black","text-white")
     datacart.size = e.target.innerHTML

    })
    

}






