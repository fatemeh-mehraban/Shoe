import {El} from '@/library'
import {RenderCompleted} from '@/HomePage'

export let Order
export const order = () => {
   Order = El({
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
                        child:"My Order"
                     })
                  ]
         }),
         El({
            element:"div",
            className:"flex gap-5",
            child:[
               El({
                  element:"i",
                  className:"bi bi-search text-xl"
              }), 
                El({
               element:"img",
               className:"w-10",
               src:"./img/brand/image 8.png",
           })
            ]
        }), 

            ]
   }),
   El({
      element:"div",
      className:"flex justify-center px-5",
      child:[
         El({
            element:"div",
            id:"active",
            className:"w-full p-5 text-center border-b border-b-4 border-gray-900",
            child:"Active"
      
         }),
         El({
            element:"div",
            id:"Completed",
            className:" w-full p-5 text-center border-b border-gray-300",
            child:"Completed"
      
         }),
      ]

   }),
   El({
      element:"div",
      className:"flex flex-col gap-4 p-5  pb-64 overflow-y-scroll",
      id:"section",
      

   }),
]

   })
   Order.querySelector("#active").addEventListener("click",()=>{
      Order.querySelector("#active").nextElementSibling.classList.remove("border-gray-900","border-b-4")
      Order.querySelector("#active").classList.add("border-gray-900","border-b-4")
   })
   Order.querySelector("#Completed").addEventListener("click",()=>{
      Order.querySelector("#Completed").previousElementSibling.classList.remove("border-gray-900","border-b-4")
      Order.querySelector("#Completed").classList.add("border-gray-900","border-b-4")
      RenderCompleted()
   })
   return Order
}