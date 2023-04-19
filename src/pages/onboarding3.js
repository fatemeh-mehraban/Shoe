import {El} from '@/library'
import{onboarding4} from '@/pages/onboarding4'
export const onboarding3 = () => {
    const Onboarding3= El({
        element:"div",
        id:"start1",
        className:"w-screen h-screen flex flex-col justify-start",
        child:[
            El({
                element:"img",
                src:"../../img/WallpaperDog-20534536 1.png",
                className:"h-[450px]"
            }), 
            El({
                element:"div",
                className:"bg-white p-5 flex flex-col justify-center items-center",
                child:[
                    El({
                        element:"p",
                        className:"text-center font-bold text-3xl",
                        child:"We provide high quality products just for you"
                    }),
                    El({
                        element:"div",
                        className:"mt-16 flex gap-1",
                        child:[
                            El({
                                element:"div",
                                className:"bg-black w-10 h-1 rounded-md ",
                            }),
                            El({
                                element:"div",
                                className:"bg-black/50 w-10 h-1 rounded-md ",
                            }),
                            El({
                                element:"div",
                                className:"bg-black/50 w-10 h-1 rounded-md ",
                            })
                        ]
                    }),
                    El({
                        element:"button",
                        id:"next1",
                        className:"w-full bg-[#1E1E1E] text-white rounded-full p-3 mt-10",
                        child:"Next"
                    })
                ]
            })
        ]
    })

    Onboarding3.querySelector('#next1').addEventListener("click",()=>{
        const Start =Onboarding3.closest("div")
        Start.innerHTML=""
        Start.append(onboarding4())
    })
    return Onboarding3
}