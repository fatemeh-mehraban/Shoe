import {Login} from '@/login'
import {Routes} from '@/routes'
import {axiosApi} from '@/axios'

export function goShop() {
Login.querySelector('#submit').addEventListener('click', (e) => {
    e.preventDefault()
    Login.querySelector('#submit').classList.add("bg-black")
    Login.querySelector('#submit').classList.remove("bg-black/50")
    axiosApi("/user").then(res=>{
        if(res.data[0].email === Login.querySelector('#inputEmail').value && res.data[0].password == +Login.querySelector('#inputPassword').value){
            // history.pushState(null , null, '/shop')
            Routes().navigate("/shop")
        }else {
            Login.querySelector('#error').classList.remove("hidden")
        }
    })
    

       })    
       Login.querySelector('#error').addEventListener("click",()=>{
        Login.querySelector('#error').classList.add("hidden")
       })
}
