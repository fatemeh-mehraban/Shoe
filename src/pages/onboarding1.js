import {El} from '@/library'

export const onboarding1 = () => {
    return El({
        element:"div",
        id:"start1",
        className:"w-screen h-screen flex flex-col justify-start items-center",
        child:[
            El({
                element:"img",
                src:"../../img/Group 2.png",
                className:"w-40 mt-[250px]"
            }), 
            El({
                element:"img",
                src:"../../img/spinner-atom.png",
                className:"w-10 mt-[300px] animate-spin"
            })
        ]
    })
}