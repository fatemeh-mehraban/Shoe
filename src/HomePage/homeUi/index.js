import { El } from "@/library"
import{axiosUserInfo,Render,brandName,renderbrandprod,changebgBrand,fetchScroll,reneText,footer} from '@/HomePage'
import {Routes} from '@/routes'

let page=1
export let arraylocal=[]
export const addarraylocal =(arr)=>{
    arraylocal=arr
}

export let information
export const homePage = () => {
 information= El({
    element:"div",
    className:"w-full h-screen flex flex-col items-center gap-4 px-5 ",
    child:[
        El({
            element:"div",
            className:"w-full h-16 px-4 py-10 flex justify-center items-center gap-3 ",
            child:[
                El({
                    element:"img",
                    id:"userImg",
                    className:"w-10 h-10 rounded-full",
                    
                }),
                El({
                    element:"div",
                    child:[
                        El({
                            element:"p",
                            className:"text-gray-500",
                            child:"Good Morning 👋"
                        }),
                        El({
                            element:"p",
                            className:"font-bold",
                            id:"username"
                        })
                    ]
                    
                }),
                El({
                    element:"div",
                    className:"ml-auto flex gap-3",
                    child:[
                        El({
                            element:"i",
                            className:"bi bi-bell  text-2xl"
                        }),
                        El({
                            element:"i",
                            className:"bi bi-heart text-2xl"
                        })
                    ]
                    
                })
            ]
        }),
        El({
            element:"div",
            className:"flex items-center bg-gray-100 px-2 w-[22rem] rounded-md ",
            child:[
                El({
                    element:"i",
                    className:"bi bi-search text-gray-600 text-xl"
                }),
                El({
                    element:"input",
                    type:"text",
                    id:"search",
                    placeholder:"search",
                    className:"w-full h-full bg-gray-100 p-2 rounded-full outline-0 border-none focus:border-none focus:outline-0 focus:ring-0 active:border-none active:outline-0"
                }),
            ]
        }),

        El({
            element:"div",
            className:"flex gap-y-5 gap-x-8 flex-wrap justify-center mt-2 p-2 ",
            child:[
                El({
                    element:"div",
                    id:"Nike",
                    className:" flex flex-col items-center gap-2 ",
                    child:[
                        El({
                            element:"div",
                            className:"bg-gray-200 rounded-full w-14 h-14 flex justify-center items-center ",
                            child:[
                                El({
                                element:"img",
                                className:"w-8 h-6 rounded-full ",
                                src:"../../img/brand/image 1.png",
                                onclick:(e)=>{
                                    Routes(e.target.closest("#Nike").id).navigate(`/${e.target.closest("#Nike").id}`)
                                    brandName(e.target.closest("#Nike").id)

                                },
                            })
                        ]
   
                           }) ,
                           El({
                            element:"p",
                            className:"text-center",
                           child:" Nike "
                        }),
                    ]
                }),

                El({
                    element:"div",
                    className:" flex flex-col items-center gap-2",
                    id:"Adidas",
                    child:[
                        El({
                            element:"div",
                            className:"bg-gray-200 rounded-full w-14 h-14 flex justify-center items-center ",
                            child:[
                                El({
                                element:"img",
                                className:"w-8 h-6 rounded-full ",
                                src:"../../img/brand/image 2.png",
                                onclick:(e)=>{
                                    Routes(e.target.closest("#Adidas").id).navigate(`/${e.target.closest("#Adidas").id}`)
                                    brandName(e.target.closest("#Adidas").id)

                                },
                            })
                        ]
                           }) ,
                           El({
                            element:"p",
                            className:"text-center",
                           child:"Adidas"
                        }),
                    ]
                }),


                El({
                    element:"div",
                    className:" flex flex-col items-center gap-2 ml-4",
                    id:"Puma",
                    child:[
                        El({
                            element:"div",
                            className:"bg-gray-200 rounded-full w-14 h-14 flex justify-center items-center ",
                            child:[
                                El({
                                element:"img",
                                className:"w-7 h-6 rounded-full ",
                                src:"../../img/brand/image 3.png",
                                onclick:(e)=>{
                                    Routes(e.target.closest("#Puma").id).navigate(`/${e.target.closest("#Puma").id}`)
                                    brandName(e.target.closest("#Puma").id)

                                },
                            })
                        ]
                           }) ,
                           El({
                            element:"p",
                            className:"text-center",
                           child:"Puma"
                        }),
                    ]
                }),


                El({
                    element:"div",
                    className:" flex flex-col items-center gap-2 ml-1",
                    id:"Asics",
                    child:[
                        El({
                            element:"div",
                            className:"bg-gray-200 rounded-full w-14 h-14 flex justify-center items-center ",
                            child:[
                                El({
                                element:"img",
                                className:"w-7 h-6 rounded-full ",
                                src:"../../img/brand/image 4.png",
                                onclick:(e)=>{
                                    Routes(e.target.closest("#Asics").id).navigate(`/${e.target.closest("#Asics").id}`)
                                    brandName(e.target.closest("#Asics").id)

                                },
                            })
                        ]
                           }) ,
                           El({
                            element:"p",
                            className:"text-center",
                           child:"Asics"
                        }),
                    ]
                }),


                El({
                    element:"div",
                    className:" flex flex-col items-center gap-2",
                    id:"Reebok",
                    child:[
                        El({
                            element:"div",
                            className:"bg-gray-200 rounded-full w-14 h-14 flex justify-center items-center ",
                            child:[
                                El({
                                element:"img",
                                className:"w-8 h-6 rounded-full ",
                                src:"../../img/brand/image 5.png",
                                onclick:(e)=>{
                                    Routes(e.target.closest("#Reebok").id).navigate(`/${e.target.closest("#Reebok").id}`)
                                    brandName(e.target.closest("#Reebok").id)

                                },
                            })
                        ]
                           }) ,
                           El({
                            element:"p",
                            className:"text-center",
                           child:"Reebok"
                        }),
                    ]
                }),
                El({
                    element:"div",
                    className:" flex flex-col items-center gap-2",
                    id:"NewBa",
                    child:[
                        El({
                            element:"div",
                            className:"bg-gray-200 rounded-full w-14 h-14 flex justify-center items-center ",
                            child:[
                                El({
                                element:"img",
                                className:"w-7 h-6 rounded-full ",
                                src:"../../img/brand/image 6.png",
                                onclick:(e)=>{
                                    Routes(e.target.closest("#NewBa").id).navigate(`/${e.target.closest("#NewBa").id}`)
                                    brandName(e.target.closest("#NewBa").id)

                                },
                            })
                        ]
                           }) ,
                           El({
                            element:"p",
                            className:"text-center",
                           child:"New Ba.."
                        }),
                    ]
                }),


                El({
                    element:"div",
                    className:" flex flex-col items-center gap-2",
                    id:"Converse",
                    child:[
                        El({
                            element:"div",
                            className:"bg-gray-200 rounded-full w-14 h-14 flex justify-center items-center ",
                            child:[
                                El({
                                element:"img",
                                className:"w-7 h-5 rounded-full ",
                                src:"../../img/brand/image 7.png",
                                onclick:(e)=>{
                                    Routes(e.target.closest("#Converse").id).navigate(`/${e.target.closest("#Converse").id}`)
                                    brandName(e.target.closest("#Converse").id)

                                },
                            })
                        ]
                           }) ,
                           El({
                            element:"p",
                            className:"text-center",
                           child:"Converse"
                        }),
                    ]
                }),


                El({
                    element:"div",
                    className:" flex flex-col items-center gap-2",
                    id:"More..",
                    child:[
                        El({
                            element:"div",
                            className:"bg-gray-200 rounded-full w-14 h-14 flex justify-center items-center ",
                            child:[
                                El({
                                element:"img",
                                className:"w-8 h-6 rounded-full ",
                                src:"../../img/brand/image 8.png",
                                onclick:(e)=>{
                                    Routes(e.target.closest("#More..").id).navigate(`/${e.target.closest("#More..").id}`)
                                    brandName(e.target.closest("#More..").id)

                                },
                            })
                        ]
                           }) ,
                           El({
                            element:"p",
                            className:"text-center",
                           child:"More.."
                        }),
                    ]
                })
                // ************end brand ***********
             ]
        }),
        // **************************see All****************
        El({
            element:"div",
            className:"w-full px-5 py-2 flex justify-between ",
            child:[
                El({
                    element:"p",
                    className:"text-lg font-bold",
                    child:"Most Popular"
                }),
                El({
                    element:"p",
                    className:"text-md font-bold",
                    child:"See All"
                })
            ]
        }),
        // ************* brands*******************
        El({
            element:"div",
            id:"row",
            className:" w-full px-5 pb-10 flex gap-3 overflow-hidden",
            child:[
                El({
                    element:"button",
                    className:"text-lg border border-1 border-black h-10 px-5 rounded-full bg-black text-white",
                    child:"All",
                    onclick:()=>{
                        Render()
                    },
                }),
                El({
                    element:"button",
                    className:"text-lg border border-1 border-black px-5 h-10 rounded-full",
                    child:"Nike",
                    onclick:(e)=>{
                        renderbrandprod(e)
                        
                    },
                }),
                El({
                    element:"button",
                    className:"text-lg border border-1 border-black px-5 h-10  rounded-full",
                    child:"Adidas",
                    onclick:(e)=>{
                        renderbrandprod(e)
                    },
                }),
                El({
                    element:"button",
                    className:"text-lg border border-1 border-black px-5 h-10 rounded-full",
                    child:"Puma",
                    onclick:(e)=>{
                        renderbrandprod(e)
                    },
                }),
                El({
                    element:"button",
                    className:"text-lg border border-1 border-black px-5 h-10 rounded-full",
                    child:"Asics",
                    onclick:(e)=>{
                        renderbrandprod(e)
                    },
                }),
                El({
                    element:"button",
                    className:"text-lg border border-1 border-black px-5 h-10 rounded-full",
                    child:"Reebok",
                    onclick:(e)=>{
                        renderbrandprod(e)
                    },
                }),
                El({
                    element:"button",
                    className:"text-lg border border-1 border-black px-5 h-10 rounded-full ",
                    child:"NewBa..",
                    onclick:(e)=>{
                        renderbrandprod(e)
                    },
                }),
                El({
                    element:"button",
                    className:"text-lg border border-1 border-black px-5 h-10 rounded-full",
                    child:"Converse",
                    onclick:(e)=>{
                        renderbrandprod(e)
                    },
                }),

            ]
        }),
        // ***********************end brand*****
        El({
            element:"section",
            id:"section",
            className:"grid grid-cols-2 gap-5 p-3 -mt-3 pb-20",
            child:""
        }),
        // ************** footer************
        footer()
    ]
})
const scrollContainer = information.querySelector("#row");

scrollContainer.addEventListener("wheel", (evt) => {
    evt.preventDefault();
    scrollContainer.scrollLeft += evt.deltaY;
});
axiosUserInfo()
Render()
information.querySelector("#search").addEventListener("focus",()=>{
    Routes().navigate("/searchPage")

})

changebgBrand()
return information
}