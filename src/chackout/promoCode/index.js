// import {El} from '@/library'
import {checkout} from '@/chackout'
export function promoCode() {

    checkout.querySelector(".bi-plus").addEventListener("click",()=>{
        if(checkout.querySelector("#promoCodeInput").value == "gold"){
            checkout.querySelector("#promoCodeInput").value = 'Discount 30% off '
            checkout.querySelector("#boxInputOff").classList.add("bg-gray-900" , "text-white")
            checkout.querySelector("#promoCodeInput").classList.add("bg-gray-900")
            checkout.querySelector(".bi-x").classList.remove("hidden")
            checkout.querySelector("#promoprice").classList.remove("hidden")
            checkout.querySelector("#hiddenborder").classList.remove("border-b")
            checkout.querySelector(".priceoff").innerText = (checkout.querySelector(".price").innerText * 30)/100
            checkout.querySelector(".pricetotal").innerText =  +checkout.querySelector(".pricetotal").innerText - +checkout.querySelector(".priceoff").innerText
            console.log(checkout.querySelector(".pricetotal").innerText);
            console.log(checkout.querySelector(".priceoff").innerText);
        
        }
        if (checkout.querySelector(".bi-x")) {
            checkout.querySelector(".bi-x").addEventListener("click",()=>{
                checkout.querySelector("#promoCodeInput").value = ''
                checkout.querySelector("#boxInputOff").classList.remove("bg-gray-900" , "text-white")
                checkout.querySelector("#promoCodeInput").classList.remove("bg-gray-900")
                checkout.querySelector(".bi-x").classList.add("hidden")
            })
        }

    })
    }
