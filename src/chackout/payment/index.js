import {El} from '@/library'
import {Routes} from '@/routes'

export let payment


export const Payment = () => {
    payment = El({
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
                        child:"Payment Methods"
                    }),
                    El({
                        element:"i",
                        className:"bi bi-plus px-2 py-1 border border-black rounded-xl ml-16",
                    })
                ]})
            ]})
        ]}),
        El({
            element:"p",
            className:"p-5",
            child:"Select the payment method you want to use"
        }),
// ************************************div radio ******************************************************
El({
element:"div",
id:"boxradio",
className:"p-5 flex flex-col gap-5 pb-40",
innerHTML:[
    `
    <div class="boxcheck flex items-center pl-4  rounded-3xl bg-white px-5 py-2 dark:border-gray-700">
    <img src="./img/pay2.png" class="w-20">
        <div class="first w-full mt-5">
        <label for="bordered-radio-1" class="w-full py-4 ml-2 dark:text-gray-300 text-xl mt-5">MY Wallet</label>
        </div>

    
        <input data-id="inputRadio" id="bordered-radio-1" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300  focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600" checked>

        </div>

   


        <div class=" boxcheck flex items-center pl-4  rounded-3xl bg-white px-5 py-2 dark:border-gray-700">
    <img src="./img/pay1.png" class="w-20">
        <div class="w-full mt-5">
        <label for="bordered-radio-2" class="w-full py-4 ml-2 dark:text-gray-300 text-xl mt-5">PayPal</label>
        </div>

        <input data-id="inputRadio" id="bordered-radio-2" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300  focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

        </div>




        <div class="boxcheck flex items-center pl-4  rounded-3xl bg-white px-5 py-2 dark:border-gray-700">
    <img src="./img/pay3.png" class="w-20">
        <div class="w-full mt-5">
        <label for="bordered-radio-3" class="w-full py-4 ml-2 dark:text-gray-300 text-xl mt-5">Google Pay</label>
        </div>

        <input data-id="inputRadio" id="bordered-radio-3" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300  focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

        </div>




        <div class="boxcheck flex items-center pl-4  rounded-3xl bg-white px-5 py-2 dark:border-gray-700">
    <img src="./img/pay4.png" class="w-20">
        <div class="w-full mt-5">
        <label for="bordered-radio-4" class="w-full py-4 ml-2 dark:text-gray-300 text-xl mt-5">Apple Pay</label>
        </div>

        <input data-id="inputRadio" id="bordered-radio-4" type="radio" value="" name="bordered-radio" class="w-4 h-4 text-black bg-gray-100 border-gray-300  focus:ring-black dark:focus:ring-black dark:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600">

        </div>
    `
]
}),
El({
    element:"div",
    id:"footer",
    className:"pt-6 px-5 w-full rounded-t-[40px] border-t-2",
    child:El({
        element:"button",
        className:"bg-black text-white shadow-2xl w-full py-4 rounded-full flex justify-center items-center",
        child:"Confirm Payment",
        onclick : ()=>{
        Routes().navigate("/SuccessfulPage")

     }
     }),


})

]
})

return payment
}

// if(homeAddress.querySelectorAll('#boxcheck')){
//     console.log(homeAddress.querySelectorAll('#boxcheck'));
// }