import {El} from '@/library'
import "bootstrap-icons/font/bootstrap-icons.css";
import {jsUiForm,valid,goShop} from '@/login'
export let Login
export const login = () => {
   Login = El({
        element:"div",
        id:"login",
        className:"w-screen h-screen p-5 pb-7 flex flex-col gap-5",
        child:[
            El({
                element:"img",
                src:"../../img/flesh.png",
                className:"w-5"
            }),
            El({
                element:"div",
                className:"flex flex-col items-center gap-20 mt-20",
                child:[
                    El({
                        element:"img",
                        className:"w-10",
                        src:"../../img/logo.png",

                    }),
                    El({
                        element:"p",
                        className:"text-3xl",
                        child:"Login to Your Account"  
                    })
                ]
            }),

            El({
                element:"form",
                className:"h-full flex flex-col mt-7",
                child:[
                    El({
                        element:"div",
                        className:"bg-gray-100 flex p-2 items-center gap-2 rounded-sm focus:border-2 border-black",
                        id:"divInputEmail",
                        child:[
                            El({
                                element:"i",
                                id:"emailIcon",
                                className:"bi bi-envelope-fill text-gray-500 text-xl"
                            }),
                            El({
                                id:"inputEmail",
                                element:'input',
                                className:"w-full h-full w-10 bg-gray-100 outline-none",
                                placeholder:"Email",
                                type:"text"
                            })
                        ]
                    }),
                    El({
                        element:"div",
                        className:"bg-gray-100 flex p-2 items-center gap-2 rounded-sm mt-5",
                        id:"divInputPassword",
                        child:[
                            El({
                                element:"i",
                                id:"lockIcon",
                                className:"bi bi-lock-fill text-gray-500 text-xl"
                            }),
                            El({
                                element:'input',
                                className:"w-full h-full w-10 bg-gray-100 outline-none",
                                placeholder:"password",
                                type:"password",
                                id:"inputPassword"
                            }),
                            El({
                                element:"i",
                                id:"biEye",
                                className:"bi bi-eye-fill text-gray-500 text-xl"
                            }),
                            El({
                                element:"i",
                                id:"biEyeSlash",
                                className:"bi bi-eye-slash-fill text-gray-500 text-xl hidden"
                            }),

                        ]
                    }),
                    El({
                        element:"div",
                        className:"text-center mt-10 relative",
                        child:[
                            El({
                                element:"div",
                                id:"fakeCheckbox",
                                className:"w-5 h-5 rounded-sm flex justify-center items-center border border-1 border-gray-400 absolute left-[125px] top-1 pt-1",
                                child:El({
                                    id:"fakeCheckboxTik",
                                    element:"i",
                                    className:"bi bi-check text-xl text-white hidden"
                                })                               
                            }),
                            El({
                                element:"input",
                                type:"checkbox",
                                className:"opacity-0",
                                id:"remember"
                            }),
                            El({
                                element:"label",
                                id:"rememberText",
                                for:"remember",
                                className:"ml-5 text-lg",
                                child:"Remember me"
                            })
                        ]
                    }),
                    El({
                        element:"input",
                        type:"submit",
                        id:"submit",
                        className:"bg-black/50 text-white w-full p-3 rounded-full mt-auto",
                        value:"Sing in"
                    })

                ]
            }),
            El({
                element:"div",
                id:"error",
                className:"bg-white/80 text-white w-full mt-auto absolute w-full h-full left-0 top-0 flex justify-center items-center text-2xl text-center text-red-500 hidden",
                child:"Email or password is not entered correctly!"
            })

        ]
    })
    jsUiForm()
    valid()
    goShop()
    return Login
}