import {El} from '@/library'
import {Routes} from '@/routes'

export let successfulPage


export const SuccessfulPage = () => {
successfulPage = El({
element:"div",
className:"bg-black/30 h-screen flex justify-center items-center",
child:[
// ***********************header******************
El({
    element:"div",
    id:"ok",
    className:"p-5 flex flex-col gap-5 rounded-2xl bg-white",
    child:[
        El({
            element:"img",
            src:"./img/successful.png"
        }),
        El({
            element:"button",
            className:"bg-black text-white shadow-2xl w-full py-4 rounded-full flex justify-center items-center",
            child:"View order",
            onclick : ()=>{
            Routes().navigate("/order")
         }
         }),

         El({
            element:"button",
            className:"bg-black text-white shadow-2xl w-full py-4 rounded-full flex justify-center items-center",
            child:"View E-Receipt",
         }),
    ]
})

]
})

return successfulPage
}

// if(homeAddress.querySelectorAll('#boxcheck')){
//     console.log(homeAddress.querySelectorAll('#boxcheck'));
// }