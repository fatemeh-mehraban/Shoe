import {El} from '@/library'
import {Routes} from '@/routes'
import { checkboxfunction } from '@/chackout';

export let homeAddress


export const HomeAddress = () => {
    homeAddress = El({
element:"div",
className:"bg-gray-100 h-screen overflow-y-scroll",
child:[
// ***********************header******************
El({
    element:"div",
    id:"firstDiv",
    className:"p-5 flex flex-col gap-5",
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
                            Routes().navigate("/Checkout")
                        },
                    }),
                    El({
                        element:"span",
                        className:"text-2xl",
                        child:"Shipping Address"
                    })
                ]})
            ]})
        ]}),
// ************************************div radio ******************************************************
El({
element:"div",
id:"boxradio",
className:"p-5 flex flex-col gap-5 pb-20",
innerHTML:[
    `
    <div class="boxcheck shadow-md flex items-center pl-4  rounded-3xl bg-white px-5 py-2 dark:border-gray-700">
    <img src="./img/homeCheckout.png" class="w-20">
        <div class="home w-full mt-5">
        <label for="bordered-radio-1" class="w-full py-4 ml-2 dark:text-gray-300 text-xl mt-5">Home</label>
        <p class="w-full py-4 ml-2 text-gray-500 dark:text-gray-300 text-sm -mt-3"> 4224 Sunbrook Park , pc,254</p>
        </div>
        <input data-id="inputRadio" id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300  focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>

        </div>

   


        <div class=" boxcheck shadow-md flex items-center pl-4  rounded-3xl bg-white px-5 py-2 dark:border-gray-700">
    <img src="./img/homeCheckout.png" class="w-20">
        <div class="w-full mt-5">
        <label for="bordered-radio-2" class="w-full py-4 ml-2 dark:text-gray-300 text-xl mt-5">Office</label>
        <p class="w-full py-4 ml-2 text-gray-500 dark:text-gray-300 text-sm -mt-3"> 4224 Sunbrook Park , pc,254</p>
        </div>
        <input data-id="inputRadio" id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300  focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

        </div>




        <div class="boxcheck shadow-md flex items-center pl-4  rounded-3xl bg-white px-5 py-2 dark:border-gray-700">
    <img src="./img/homeCheckout.png" class="w-20">
        <div class="w-full mt-5">
        <label for="bordered-radio-3" class="w-full py-4 ml-2 dark:text-gray-300 text-xl mt-5">Apartment</label>
        <p class="w-full py-4 ml-2 text-gray-500 dark:text-gray-300 text-sm -mt-3"> 4224 Sunbrook Park , pc,254</p>
        </div>
        <input data-id="inputRadio" id="bordered-radio-3" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300  focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

        </div>




        <div class="boxcheck shadow-md flex items-center pl-4  rounded-3xl bg-white px-5 py-2 dark:border-gray-700">
    <img src="./img/homeCheckout.png" class="w-20">
        <div class="w-full mt-5">
        <label for="bordered-radio-4" class="w-full py-4 ml-2 dark:text-gray-300 text-xl mt-5">Parent's House</label>
        <p class="w-full py-4 ml-2 text-gray-500 dark:text-gray-300 text-sm -mt-3"> 4224 Sunbrook Park , pc,254</p>
        </div>
        <input data-id="inputRadio" id="bordered-radio-4" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300  focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

        </div>
    `
]
}),
El({
    element:"div",
    id:"footer",
    className:" pb-10 pt-6 px-5 w-full rounded-t-[40px] border-t-2",
    child:El({
        element:"button",
        className:"bg-black text-white shadow-2xl w-full py-4 rounded-full flex justify-center items-center",
        child:[
           "Apply",
        El({
           element:"i",
           className:"bi bi-arrow-right-short text-xl",
        }),
     ],
     onclick : ()=>{
        Routes().navigate("/Checkout()")

     }
     }),

}),

]
})

checkboxfunction()
return homeAddress
}

// if(homeAddress.querySelectorAll('#boxcheck')){
//     console.log(homeAddress.querySelectorAll('#boxcheck'));
// }