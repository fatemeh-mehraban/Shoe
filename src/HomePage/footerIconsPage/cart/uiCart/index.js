import {El} from '@/library'
import {RenderCart, footerCart,arrayOfObj,reneTextCart,changearrayOfObj,priceTotal} from "@/HomePage";
import {Routes} from '@/routes'

export let Cart
export const cart = () => {
   Cart = El({
            element:"div",
            className:"bg-gray-100 h-screen",
            child:[
               El({
                  element:"div",
                  className:"flex justify-between p-5",
                  child:[
                     El({
                        element:"div",
                        className:"flex gap-5",
                        child:[
                           El({
                              element:"img",
                              className:"w-4",
                              src:"../img/logo.png"
                           }),
                           El({
                              element:"div",
                              className:"text-xl",
                              child:"My Cart"
                           })
                        ]
               }),
               El({
                  element:"i",
                  className:"bi bi-search text-xl"
              }),
                  ]
         }),
         El({
            element:"div",
            className:"flex flex-col gap-4 p-5  pb-64 overflow-y-scroll",
            id:"section",
            child:""

         }),

         // ****************footer fixed**************
         El({
            element:"div",
            className:"bg-white rounded-t-[60px] shadow-xl fixed bottom-0 w-full border-t-2",
            child:[
               El({
                  element:"div",
                  className:"px-10 p-6 flex justify-between gap-5 mb-2",
                  child:[
                     El({
                        element:"div",
                        className:"",
                        child:[
                           El({
                              element:"p",
                              className:"text-gray-600",
                              child:"Total price"
                           }),
                           El({
                              element:"p",
                              className:"text-2xl",
                              child:[
                                 "$",
                                 El({
                                    element:"span",
                                    id:"finalPrice",
                                    child:0 ,

                                 }),
                              ]
                           }),
                        ]
                     }),
                     El({
                        element:"button",
                        className:"bg-black text-white shadow-2xl px-16 rounded-full flex items-center",
                        child:[
                           "Checkout",
                        El({
                           element:"i",
                           className:"bi bi-arrow-right-short text-xl",
                        }),
                     ],
                     onclick : ()=>{
                        Routes().navigate("/Checkout")

                     }
                     }),
                  ]
               }),
               // **************footer-footer**********
               footerCart()
               ,
            ]

         }),


         // ************** delete box ************
         El({
            element:"div",
            id:"deleteBox",
            className:"bg-black/30 h-screen absolute top-0 w-full hidden",
            child:[
               El({
                  element:"div",
                  className:"bg-gray-100 flex flex-col items-center rounded-t-[60px] shadow-xl fixed bottom-0 w-full border-t-2 p-8",
                  child:[
                     El({
                        element:"span",
                        className:"w-[60px] h-1 bg-gray-300 rounded-full",
                    }),
                    El({
                     element:"p",
                     className:"text-center p-10 border-b-2 text-2xl ",
                     child:" Remove From Cart?"
                 }),

                 El({
                  element:"section",
                  id:"RemoveCardInDeleteBox",
                  className:" p-5 border-b-2",
                  
              }),

              El({
               element:"div",
               className:" p-5 flex justify-between gap-5",
               child:[
                  El({
                     element:"a",
                     className:"bg-gray-200 py-4 px-14 rounded-full hover:bg-black hover:text-white",
                     child:"Cancel",
                     onclick : (e)=>{
                        e.target.closest("#deleteBox").classList.add("hidden")
                        RenderCart()
                     }
                 }),
                 El({
                  element:"button",
                  className:"bg-gray-200 py-4 px-8 rounded-full hover:bg-black hover:text-white",
                  child:"Yes,Remove",
                  onclick : (e)=>{
                     console.log( Cart.querySelector("#RemoveCardInDeleteBox").children[0].id);
                     // console.log(arrayOfObj);
                    let arrtest = arrayOfObj.filter(item=> item.id !== +Cart.querySelector("#RemoveCardInDeleteBox").children[0].id)
                     changearrayOfObj(arrtest)
                     arrayOfObj.map(item=>{
                     Cart.querySelector("#section").innerHTML=""
                     reneTextCart(item)
                     
                    })
                    console.log(arrayOfObj);
                    e.target.closest("#deleteBox").classList.add("hidden")
                  }
              })
               ]
           }),

                  ]})

            ]})




            ]


   })
   RenderCart()

   return Cart
}
