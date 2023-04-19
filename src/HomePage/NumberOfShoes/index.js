import {axiosApi} from '@/axios'
import {Product,information} from '@/HomePage'
export let countspan
// ***********   Single product page   *****************

// ***********  Number Of Shoes *****************
export function NumberOfShoes(Product,data) {

    Product.querySelector("#Counter").querySelector("#plus").addEventListener("click",()=>{
        Product.querySelector("#Counter").querySelector("#number").innerHTML=+Product.querySelector("#Counter").querySelector("#number").innerHTML + 1
        totalPrice(Product)
    })

    
        Product.querySelector("#Counter").querySelector("#minus").addEventListener("click",()=>{
            if (+Product.querySelector("#Counter").querySelector("#number").innerHTML == "0"  ) return
            Product.querySelector("#Counter").querySelector("#number").innerHTML=+Product.querySelector("#Counter").querySelector("#number").innerHTML - 1
            totalPrice(Product)
        })
        
        data.count = Product.querySelector("#Counter").querySelector("#number").innerHTML
}

// ******************* total price***************
export function totalPrice(Product) {



            
            axiosApi(`/shoes?id=${Product.id}`).then(res=>{
                Product.querySelector("#totalPrice").innerHTML = +(res.data[0].price) * +(Product.querySelector("#Counter").querySelector("#number").innerHTML)
            })

    
}