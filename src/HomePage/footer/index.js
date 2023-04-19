import { El } from "@/library"
import {Routes} from "@/routes"
let Footer
export const footer = () => {
   Footer =  El({
        element:"div",
        className:"flex justify-center gap-9 px-5 py-3 w-full bg-white fixed bottom-0",
        child:[
            El({
                element:"div",
                className:" flex flex-col items-center",
                child:[
                     El({
                        element:"i",
                        className:"bi bi-house-door-fill text-[28px] text-xl"
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
                        className:"bi bi-bag text-[28px] text-xl"
                        }),
    
                       El({
                        element:"p",
                        className:"text-[13px]",
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
            })
    
    
        ]
    })
    return Footer
}

