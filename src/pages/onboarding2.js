import {El} from '@/library'

export const onboarding2 = () => {
    return El({
        element:"div",
        id:"start1",
        className:"w-screen h-screen bg-hero-pattern bg-no-repeat bg-cover",
        child:[
            El({
                element:"div",
                className:"h-full w-full bg-gradient-to-t from-black/90 to-white/10 flex items-end p-10",
                child:[
                    El({
                        element:"div",
                        className:"",
                        child:[
                            El({
                                element:"div",
                                className:"",
                                child:[
                                    El({
                                        element:"p",
                                        className:"text-white text-[40px]", 
                                         child:"Welcome to 👋"
                                    })
                                ]
                            }),
                            El({
                                element:"p",
                                className:"text-white text-[72px]", 
                                 child:"Shoea"
                            }),
                            El({
                                element:"p",
                                className:"text-white font-bold text-[18px]", 
                                 child:"The best sneakers & shoes e-commerse app of the century for your fashion needs!"
                            })

                        ]

                    })
                ]
            }), 
        ]
    })
}