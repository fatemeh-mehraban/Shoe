import {Login,} from '@/login'
export function focus(x){
    x.classList.add("border-2","border-black")
}
export function unfocus(x){
    x.classList.remove("border-2","border-black")
}
export function jsUiForm() {
    Login.querySelector('#inputPassword').addEventListener('click', e => {
        focus(divInputPassword)
        Login.querySelector('#lockIcon').classList.remove("text-gray-500")
        Login.querySelector('#lockIcon').classList.add("text-black")
      
        Login.querySelector('#biEye').classList.remove("text-gray-500")
        Login.querySelector('#biEye').classList.add("text-black")
      
          })
          Login.querySelector('#inputEmail').addEventListener('click', e => {
                  focus(divInputEmail)
                  Login.querySelector('#emailIcon').classList.remove("text-gray-500")
                  Login.querySelector('#emailIcon').classList.add("text-black")
                })
          Login.querySelector('#inputEmail').addEventListener('blur', e => {
                  unfocus(divInputEmail)
                  Login.querySelector('#emailIcon').classList.remove("text-black")
                  Login.querySelector('#emailIcon').classList.add("text-gray-500")
                  })
          Login.querySelector('#inputPassword').addEventListener('blur', e => {
                      unfocus(divInputPassword)
                      Login.querySelector('#lockIcon').classList.remove("text-black")
                      Login.querySelector('#lockIcon').classList.add("text-gray-500")
                      Login.querySelector('#biEye').classList.remove("text-black")
                      Login.querySelector('#biEye').classList.add("text-gray-500")
          })
          Login.querySelector('#biEye').addEventListener("click",()=>{
              Login.querySelector('#biEye').classList.add("hidden")
              Login.querySelector('#inputPassword').setAttribute("type","text")
              Login.querySelector('#biEyeSlash').classList.remove("hidden")
          })
          Login.querySelector('#biEyeSlash').addEventListener("click",()=>{
              Login.querySelector('#biEyeSlash').classList.add("hidden")
              Login.querySelector('#inputPassword').setAttribute("type","password")
              Login.querySelector('#biEye').classList.remove("hidden")
          })

          Login.querySelector('#fakeCheckbox').addEventListener('click', () => {
                  console.log(1);
                  Login.querySelector('#fakeCheckbox').classList.toggle("bg-black")
                  Login.querySelector('#fakeCheckboxTik').classList.toggle("hidden")
                     })


}

