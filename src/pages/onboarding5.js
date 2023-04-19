import {El} from '@/library'
import {Routes} from '@/routes'
export const onboarding5 = () => {
    return El({
        element:"div",
        id:"start1",
        className:"w-screen h-screen flex flex-col justify-start",
        child:[
            El({
                element:"img",
                src:"../../img/WallpaperDog-20534715 1.png",
                className:"h-[450px]"
            }), 
            El({
                element:"div",
                className:"bg-white p-5 flex flex-col justify-center items-center",
                child:[
                    El({
                        element:"p",
                        className:"text-center font-bold text-3xl",
                        child:"Let’s fulfill your fashion needs with shoearight now!"
                    }),
                    El({
                        element:"div",
                        className:"mt-5 flex gap-1",
                        child:[
                            El({
                                element:"div",
                                className:"bg-black/50 w-10 h-1 rounded-md ",
                            }),
                            El({
                                element:"div",
                                className:"bg-black/50 w-10 h-1 rounded-md ",
                            }),
                            El({
                                element:"div",
                                className:"bg-black w-10 h-1 rounded-md ",
                            })
                        ]
                    }),
                    El({
                        element:"button",
                        id:"next3",
                        className:"w-full bg-[#1E1E1E] text-white rounded-full p-3 mt-10",
                        child:"Get Start",
                        onclick:()=>{
                            Routes().navigate("/login")
                        }

                    })
                ]
            })
        ]
    })
}