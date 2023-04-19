import {homeAddress  } from "@/chackout";
export  let userAddress

export function checkboxfunction() {
    userAddress = homeAddress.querySelector(".boxcheck").querySelector(".home")
    if(homeAddress.querySelectorAll('.boxcheck')){
    homeAddress.querySelectorAll('.boxcheck').forEach(element => {
        homeAddress.addEventListener("click", (e)=>{
            if(e.target.dataset.id == "inputRadio"){
                 userAddress = e.target.previousElementSibling
                 console.log(userAddress);
            }
        })

    });
}
}