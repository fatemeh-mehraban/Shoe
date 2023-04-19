import {homeAddress } from "@/chackout";
// import {address}
export let userAddress
export function checkboxfunction() {
console.log(document.getElementById("address"));
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
return userAddress
}