
import {axiosApi} from '@/axios'
import{information,product,reneText,color} from '@/HomePage'
export function renderbrandprod(e){
    axiosApi("/shoes").then(res=>{
        let brandrender = res.data.filter(item =>item.brand == e.target.innerHTML)
        information.querySelector("#section").innerHTML=""
           brandrender.map(item=>{
            reneText(item)   
            }) 
            name()
        })
        
    }

    
    
    export function name() {
        information.querySelectorAll(".boxproduct").forEach(element => {
            element.addEventListener("click",()=>{
                axiosApi(`/shoes?id=${element.id}`).then(res=>{
                    document.querySelector("#app").innerHTML=""
                    document.querySelector("#app").appendChild(product(res.data[0]))
                })
// console.log(arrayOfObj);
                })
            });
        }

