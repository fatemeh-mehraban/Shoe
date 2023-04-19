import {El} from '@/library'
import{onboarding5} from '@/pages/onboarding5'

export const onboarding4 = () => {
    const Onboarding4 = El({
        element:"div",
        id:"start1",
        className:"w-screen h-screen flex flex-col justify-start",
        child:[
            El({
                element:"img",
                src:"../../img/WallpaperDog-203976731.png",
                className:"h-[450px]"
            }), 
            El({
                element:"div",
                className:"bg-white p-5 flex flex-col justify-center items-center",
                child:[
                    El({
                        element:"p",
                        className:"text-center font-bold text-3xl",
                        child:"Your satisfaction is our number one periority"
                    }),
                    El({
                        element:"div",
                        className:"mt-16 flex gap-1",
                        child:[
                            El({
                                element:"div",
                                className:"bg-black/50 w-10 h-1 rounded-md ",
                            }),
                            El({
                                element:"div",
                                className:"bg-black w-10 h-1 rounded-md ",
                            }),
                            El({
                                element:"div",
                                className:"bg-black/50 w-10 h-1 rounded-md ",
                            })
                        ]
                    }),
                    El({
                        element:"button",
                        id:"next2",
                        className:"w-full bg-[#1E1E1E] text-white rounded-full p-3 mt-10",
                        child:"Next"
                    })
                ]
            })
        ]
    })

    Onboarding4.querySelector('#next2').addEventListener("click",()=>{
        const Start =Onboarding4.closest("div")
        Start.innerHTML=""
        Start.append(onboarding5())
    })
    return Onboarding4
}