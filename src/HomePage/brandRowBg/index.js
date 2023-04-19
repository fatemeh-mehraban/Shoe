import {axiosApi} from '@/axios'
import {information} from '@/HomePage'

// ***********   Single product page   *****************

// ***********  color*****************
export function changebgBrand() {
    const row = information.querySelector("#row")
    row.addEventListener("click",(e)=>{
        e.target.classList.add("bg-black","text-white")
console.log(row.querySelectorAll("button"));
row.querySelectorAll("button").forEach(element => {
    if (element !== e.target) {
        element.classList.remove("bg-black","text-white")

    }
});

    })
}
