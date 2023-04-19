import { El } from "@/library"
import {Routes} from "@/routes"
let Footer
export const footerCart = () => {
   Footer = El({
    element:"div",
    className:"flex flex-col items-center",
    child:[  
        El({
        element:"div",
        className:"flex justify-center gap-9 px-5 pb-10 w-full bg-white  text-gray-500",
        child:[
            El({
                element:"div",
                className:" flex flex-col items-center",
                child:[
                     El({
                        element:"i",
                        className:"bi bi-house-door text-[28px] text-xl"
                        }),
    
                       El({
                        element:"p",
                        className:"text-[13px] ",
                       child:"Home"
                    }),
                ],
                onclick:()=>{
                    Routes().navigate("/shop")
                }
            }),
    
            El({
                element:"div",
                className:" flex flex-col items-center",
                child:[
                     El({
                        element:"i",
                        className:"bi bi-bag-fill text-[28px] text-xl text-black"
                        }),
    
                       El({
                        element:"p",
                        className:"text-[13px] text-black",
                       child:"card"
                    }),
                ],
                onclick:()=>{
                    Routes().navigate("/cart")
    
                }
            }),
    
    
            El({
                element:"div",
                className:" flex flex-col items-center",
                child:[
                     El({
                        element:"i",
                        className:"bi bi-cart text-[28px] text-xl"
                        }),
    
                       El({
                        element:"p",
                        className:"text-[13px]",
                       child:"orders"
                    }),
                ],
                onclick:()=>{
                    Routes().navigate("/order")
    
                }
            }),
    
            El({
                element:"div",
                className:" flex flex-col items-center",
                child:[
                     El({
                        element:"i",
                        className:"bi bi-wallet2 text-[28px] text-xl"
                        }),
    
                       El({
                        element:"p",
                        className:"text-[13px]",
                       child:"wallet"
                    }),
                ]
            }),
    
            El({
                element:"div",
                className:" flex flex-col items-center",
                child:[
                     El({
                        element:"i",
                        className:"bi bi-person text-[28px] text-xl"
                        }),
    
                       El({
                        element:"p",
                        className:"text-[13px]",
                       child:"Profile"
                    }),
                ]
            }),

    
        ],
        
    }),



        // **************************
        El({
            element:"span",
            className:"w-[150px] h-2 bg-gray-300 rounded-full mb-3",
        }),
    ]
   })
    return Footer
}

