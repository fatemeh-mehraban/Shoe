import {El} from '@/library'
import {boxSearch,NotFound,saveInLocal,updateSearchArr,backToShop} from '@/HomePage'
import { debounce } from 'lodash/function';
export let searchpage
// import {color,size,NumberOfShoes} from "@/HomePage";


export const searchPage = () => {
    searchpage = El({
        element:"div",
        className:"w-full h-screen flex flex-col justify-start p-10",
        child:[
            El({
                element:"div",
                className:"flex items-center  border border-1 border-black px-2 w-[22rem] rounded-md ",
                child:[
                    El({
                        element:"i",
                        className:"bi bi-search text-xl"
                    }),
                    El({
                        element:"input",
                        type:"text",
                        id:"search",
                        className:"w-full h-full p-2 outline-none"
                    }),
                    El({
                        element:"img",
                        id:"filter",
                        src:"../../img/Untitled.png",
                        // className:"w-full h-full  p-2 outline-none"
                    }),
                ]
            }),


            El({
                element:"div",
                id:"Recent",
                className:"flex justify-between py-5 font-bold border-b",
                child:[
                    El({
                        element:"span",
                        child:"Recent"
                    }),
                    El({
                        element:"span",
                        child:"Clear All"
                    }),
                ]
            }),

            El({
                element:"div",
                id:"showSearch",
                className:"grid grid-cols-2 gap-5 p-3 mt-5",
            }),

            El({
                element:"div",
                id:"RecentSearches",
                className:"py-5 absolute top-32 w-4/5 bg-white",
    
            }),
        ],

    })
    searchpage.querySelector('#search').addEventListener('input',debounce(boxSearch,2000))
    updateSearchArr([])
    // searchpage.querySelector('#search').addEventListener('input',debounce(()=>{
    //     saveInLocal()
    // }, 3000))
    boxSearch()
    searchpage.querySelector('#search').addEventListener('click',debounce(backToShop,4000))
    
    searchpage.querySelector('#filter').addEventListener("click",()=>{
        saveInLocal()

        NotFound()
    })

return searchpage
}