import {Login,} from '@/login'
import {axiosApi} from '@/axios'
export function valid() {

  // *********** for Email****************
    Login.querySelector('#inputEmail').addEventListener('blur', () => {
        if(!Login.querySelector('#inputEmail').value){
            console.log(1);
            Login.querySelector('#inputEmail').setAttribute("placeholder","Enter your Email!")
            Login.querySelector('#inputEmail').classList.add("placeholder-red-500")
        }
    })
    Login.querySelector('#inputEmail').addEventListener('click', () => {
        if(!Login.querySelector('#inputEmail').value){
            Login.querySelector('#inputEmail').setAttribute("placeholder","")
    }
})
  // *********** for Password****************
        Login.querySelector('#inputPassword').addEventListener('blur', () => {
            if(!Login.querySelector('#inputPassword').value){
                Login.querySelector('#inputPassword').setAttribute("placeholder","Enter your password!")
                Login.querySelector('#inputPassword').classList.add("placeholder-red-500")
            }
        })
        Login.querySelector('#inputPassword').addEventListener('click', () => {
            if(!Login.querySelector('#inputPassword').value){
                Login.querySelector('#inputPassword').setAttribute("placeholder",""
                )}
    })

    // **************** for checkbox Tik with rememberText and save Email-database in localhost ********************
    Login.querySelector('#rememberText').addEventListener('click', () => {
        axiosApi("/user").then(res=>{
            if(res.data[0].email === Login.querySelector('#inputEmail').value && res.data[0].password == +Login.querySelector('#inputPassword').value){
                Login.querySelector('#fakeCheckbox').classList.toggle("bg-black")
                Login.querySelector('#fakeCheckboxTik').classList.toggle("hidden")
                localStorage.setItem("user",res.data[0].email)
   
            }
        })

    })

}