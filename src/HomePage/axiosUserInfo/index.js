import {axiosApi} from '@/axios'
import {information} from '@/HomePage'
export function axiosUserInfo() {
    axiosApi("/user").then(res=>{
        information.querySelector('#userImg').setAttribute("src",`${res.data[0].images}`)
        information.querySelector('#username').innerHTML = res.data[0].username
    })

}