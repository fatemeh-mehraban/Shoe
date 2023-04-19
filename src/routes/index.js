import {axiosApi} from '@/axios'
import Navigo from "navigo";
import { start } from "@/components";
import { login } from "@/login/index.js";
import {homePage,searchPage,brandPage,product,cart,order} from "@/HomePage";
import {Checkout,HomeAddress,ChooseShipingUi,Payment, SuccessfulPage} from '@/chackout'



const changePage = (page,data)=>{
    const routes = document.getElementById('app')
    routes.innerHTML=""
    routes.appendChild(page(data))

}


const roter = new Navigo("/")
export const Routes = (pagee) => {
    const routes = document.getElementById('app')
    routes.innerHTML = ''
    

roter.on("/shop",()=>{
         routes.appendChild(homePage())
})
roter.on("/login",()=>{
    routes.appendChild(login())
})
roter.on("/",()=>{
    routes.appendChild(start())
})
roter.on("/searchPage",()=>{
    routes.appendChild(searchPage())
})

roter.on("/product/:id",(item)=>{
    axiosApi(`/shoes/${item.data.id}`).then((res) => {
        routes.appendChild(product(res.data))
    })
})

roter.on("/cart",()=>{
    routes.appendChild(cart())
})
roter.on("/order",()=>{
    routes.appendChild(order())
})

roter.on("/Checkout",()=>{
    routes.appendChild(Checkout())
})

roter.on("/HomeAddress",()=>{
    routes.appendChild(HomeAddress())
})
roter.on("/ChooseShipingUi",()=>{
    routes.appendChild(ChooseShipingUi())
})
roter.on("/Payment",()=>{
    routes.appendChild(Payment())
})
roter.on("/SuccessfulPage",()=>{
    routes.appendChild(SuccessfulPage())
})
// roter.on(`/brand:${brand}`,()=>{
    roter.on(`/${pagee}`,(pagee)=>{
        changePage(brandPage,pagee.url)
    })



    roter.resolve()
    return roter

}

