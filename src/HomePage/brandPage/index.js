import { El } from "@/library"
import {brandName} from "@/HomePage"
import {Routes} from '@/routes'

export let BrandPage
export const brandPage = () => {
    BrandPage = El({
        element:"div",
        className:"w-screen h-screen p-5",
        child:[
            El({
                element:"div",
                className:"flex gap-5 items-center"
,                child:[
                    El({
                        element:"img",
                        src:"./img/flesh.png",
                        onclick:()=>{
                            Routes().navigate("/shop")
                        },
                    }),
                    El({
                        element:"span",
                        id:"brandName",
                        className:"font-bold",
                        child:"brand"
                    })
                ]
            }),
            El({
                element:"section",
                className:"bg-white w-full grid grid-cols-2 gap-5 p-3 -mt-3 mt-2"
            })
        ]
    })
    return BrandPage
}
