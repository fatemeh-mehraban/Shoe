import {El} from '@/library'
import {RenderCheckout,userAddress,ChooseShiping,send,prices,promoCode} from '@/chackout'
import {Routes} from '@/routes'
import {finalPrice} from '@/HomePage'

export let checkout


export const Checkout = () => {
    checkout = El({
element:"div",
className:"bg-gray-100 h-screen overflow-y-scroll",
child:[
    // ************************ 2 div => footer and other********
    El({
        element:"div",
        id:"firstDiv",
        className:"p-5 mb-40 flex flex-col gap-5",
        child:[
            El({
            element:"div",
            className:"flex justify-between",
            child:[
                El({
                    element:"div",
                    className:"flex gap-5 items-center",
                    child:[
                        El({
                            element:"img",
                            src:"./img/flesh.png",
                            onclick:()=>{
                                Routes().navigate("/cart")
                            },
                        }),
                        El({
                            element:"span",
                            className:"text-xl",
                            child:"checkout"
                        })
                    ]
                }),

                El({
                    element:"img",
                    className:"w-10",
                    src:"./img/brand/image 8.png",
                })
            ]
        }),
        // ******************* part 2  shipping Address***************
        El({
            element:"div",
            className:"flex flex-col gap-5 mt-5 border-b-2 pb-8",
            child:[
                El({
                    element:"h2",
                    className:"text-xl",
                    child:"Shipping Address"
                }),

                El({
                    element:"div",
                    className:" shadow-md bg-white rounded-xl p-2 flex justify-between items-center gap-5",
                    child:[
                        El({
                            element:"img",
                            className:"w-14",
                            src:"./img/homeCheckout.png",
                        }),
                        El({
                            element:"div",
                            id:"address",
                            className:"text-xl -ml-14",
                            child:[
                                userAddress ? userAddress: El({
                                    element:"div",
                                    className:"home w-full mt-5",
                                    child:[
                                        El({
                                            element:"label",
                                            for:"bordered-radio-1",
                                            className:"w-full py-4 ml-2 dark:text-gray-300 text-xl mt-5",
                                            child:"Home"

                                        }),
                                        El({
                                            element:"p",
                                            className:"w-full py-4 ml-2 text-gray-500 dark:text-gray-300 text-sm -mt-3",
                                            child:"4224 Sunbrook Park , pc,254"

                                        })
                                    ]
                                })
                                   
                                
                            ],
                                
                                 
                            
                        }),
                        El({
                            element:"img",
                            className:"w-7",
                            src:"./img/edit.png",
                            onclick:(e)=>{
                                Routes().navigate("/HomeAddress")
                                // e.target.previousElementSibling.innerHTML=""
                                // e.target.previousElementSibling.append(userAddress)

                            },
                        }),
                    ]
                })
            ]
        }),
        // ******************* part 3  render ***************
        El({
            element:"div",
            className:" border-b-2 pb-8",
            child:[
                El({
                    element:"h3",
                    className:"text-xl",
                    child:"Order List"
                }),
                El({
                    element:"section",
                    className:"flex flex-col gap-5",
                    id:"section"
                }),
            ]
        }),
        // ******************* part 4 choose shipping***************
        El({
            element:"div",
            className:" border-b-2 pb-8 flex flex-col gap-5",
            child:[
                El({
                    element:"h3",
                    className:"text-xl",
                    child:"Choose Shipping"
                }),



                // *********************change**************
                El({
                    element:"div",
                    id:"boxChooseCar",
                    className:" shadow-md bg-white rounded-xl flex px-3 justify-around items-center gap-5",
                    child:[

                        send ? send : El({
                            element:"div",
                            className:"flex items-center gap-5 p-4",
                            child:[
                                El({
                                    element:"img",
                                    className:"w-10",
                                    src:"./img/car.png",
                                }),
                                El({
                                    element:"div",
                                    className:"text-xl",
                                    child:
                                        El({
                                            element:"h2",
                                            className:"text-xl",
                                            child:"choose Shipping Type"
                                        }),
        
                                }),
                            ]
                        }),
                        El({
                            element:"i",
                            className:"bi bi-chevron-right",   
                            onclick:()=>{
                                Routes().navigate("/ChooseShipingUi")
                            },                      
                        }),
                    ]
                })
            ]
        }),
        // ******************* part 5 promo code ***************
        El({
            element:"div",
            child:[
                El({
                    element:"h3",
                    className:"text-xl",
                    child:"Promo Code"
                }),
                El({
                    element:"div",
                    className:"flex gap-5 mt-5",
                    child:[
                        El({
                            element:"div",
                            id:"boxInputOff",
                            className:"flex items-center pr-3 w-full  bg-gray-200 rounded-2xl",
                            child:[
                                El({
                                    element:"input",
                                    id:"promoCodeInput",
                                    className:" p-4 w-full  bg-gray-200 rounded-2xl",
                                    placeholder:"Enter Promo Code"
                                }),
                                El({
                                    element:"i",
                                    className:"bi bi-x hidden",                         
                                }),
                            ]
                        }),
                        El({
                            element:"i",
                            className:"bi bi-plus px-3 rounded-full text-white text-3xl bg-black flex justify-center items-center ",                         
                        }),
                    ]
                }),

// ****************price *****************
                        El({
                            element:"div",
                            className:" p-4 w-full bg-white mt-5 shadow-md rounded-xl",
                            child:[
                                El({
                                    element:"div",
                                    className:" p-2 w-full flex justify-between",
                                    child:[
                                        El({
                                            element:"p",
                                            className:"",
                                            child:"Amount"
                                        }),
                                        El({
                                            element:"p",
                                            className:"",
                                            child:[
                                                El({
                                                    element:"span",
                                                    className:"",
                                                    child:"$"
                                                }),
                                                El({
                                                    element:"span",
                                                    className:"price",
                                                    child:finalPrice
                                                }),
                                            ]
                                        }),
                                    ]
                                }),



                                El({
                                    element:"div",
                                    id:"hiddenborder",
                                    className:" p-2 w-full flex justify-between pb-4 border-b",
                                    child:[
                                        El({
                                            element:"p",
                                            className:"",
                                            child:"Shipping"
                                        }),
                                        El({
                                            element:"p",
                                            className:"",
                                            child:
                                                El({
                                                    element:"span",
                                                    className:"price",
                                                    child:prices
                                                }),
                                            
                                        }),
                                    ]
                                }),



                                El({
                                    element:"div",
                                    id:"promoprice",
                                    className:" p-2 w-full flex justify-between pb-4 border-b hidden",
                                    child:[
                                        El({
                                            element:"p",
                                            className:"",
                                            child:"promo"
                                        }),
                                        El({
                                            element:"p",
                                            className:"",
                                            child:[
                                                El({
                                                    element:"span",
                                                    className:"",
                                                    child:"-$"
                                                }),
                                                El({
                                                    element:"span",
                                                    className:"priceoff",
                                                }),]
                                            
                                        }),
                                    ]
                                }),





                                El({
                                    element:"div",
                                    className:" p-2 w-full flex justify-between mt-5",
                                    child:[
                                        El({
                                            element:"p",
                                            className:"",
                                            child:"Total"
                                        }),
                                        El({
                                            element:"p",
                                            className:"",
                                            child:[
                                                El({
                                                    element:"span",
                                                    className:"",
                                                    child:"$"
                                                }),
                                                El({
                                                    element:"span",
                                                    className:"pricetotal",

                                                }),]
                                            
                                        }),
                                    ]
                                }),
                            ]
                        }),

            ]

        })




        
    ]
    }),






    // ****************footer***********
    El({
        element:"div",
        id:"footer",
        className:" pb-10 pt-6 px-5 w-full rounded-t-[40px] border-t-2",
        child:El({
            element:"button",
            className:"bg-black text-white shadow-2xl w-full py-4 rounded-full flex justify-center items-center",
            child:[
               "Continue to Payment",
            El({
               element:"i",
               className:"bi bi-arrow-right-short text-xl",
            }),
         ],
         onclick : ()=>{
            Routes().navigate("/Payment")

         }
         }),

    }),
]
   })
   RenderCheckout()
   ChooseShiping()
   promoCode()
return checkout
}