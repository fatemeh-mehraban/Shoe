import {chooseShipingUi,checkout } from "@/chackout";
import {Routes} from '@/routes'
export let prices 
export let send
export function ChooseShiping() {
    if(chooseShipingUi){
        chooseShipingUi.querySelectorAll('.boxcheck').forEach(element => {
            chooseShipingUi.addEventListener("click", (e)=>{
            if(e.target.dataset.id == "inputRadio"){
                 send = e.target.closest(".boxcheck")
                 prices = send.querySelector(".priceCar").innerHTML
                 send.querySelector("input").classList.add("hidden")
                 
                //  checkout.querySelector("#boxChooseCar").querySelector(".bi").classList.remove("bi-chevron-right")
                //  checkout.querySelector(".bi").classList.add("bi-pencil-fill")
                // if(!send){
                //     // checkout.querySelector("#boxChooseCar").append(send)
                //     e.target.closest(".boxcheck").classList.add("hidden")

                // }
                     
                     console.log(checkout.querySelector("#boxChooseCar"));
                    //  Routes().navigate("/Checkout")
                 
            }
        })

    });
}
if (prices>0) {
    
    checkout.querySelector(".pricetotal").innerText = +checkout.querySelector(".price").innerText + +prices
}else{
    checkout.querySelector(".pricetotal").innerText = +checkout.querySelector(".price").innerText 
}


}