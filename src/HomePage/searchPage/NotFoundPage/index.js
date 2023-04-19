import {axiosApi} from '@/axios'
import {searchpage,product,Render} from '@/HomePage'
import {Routes} from '@/routes'

export function NotFound() {
    let box = searchpage.querySelector('#showSearch')
        
    box.innerHTML = " "
    axiosApi("/shoes").then(res=>{
            res.data.find(elem => 
                {
                if (elem.title.includes(searchpage.querySelector('#search').value) && searchpage.querySelector('#search').value !=="") {
                  searchpage.querySelector('#RecentSearches').classList.add("hidden")
                  searchpage.querySelector('#Recent').classList.add("hidden")
               console.log(elem.title);
                    box.innerHTML+= ` <div id="${elem.id}" class="boxproduct">
                    <div class="bg-gray-100 p-4 rounded-3xl"><img src="${elem.images}" alt=""></div>
                    <h3 class="text-lg font-bold">${elem.title}</h3>
                    <div class="text-sm font-bold flex gap-2 justify-center items-center">
                    <span><i class="bi bi-star-half"></i> </span>
                    <span class="text-gray-500"> 4.5  |</span>
                    <span class="bg-gray-200 p-3 rounded-md text-[12px] text-gray-700"> 8.374 sold</span>
                    </div>
                    <span class=" text-lg font-bold -mt-5"><span>$</span>${elem.price}</span>
                  </div>
                  `

                }
                
                })
                name()
              });

}
export function backToShop(){
    if(searchpage.querySelector('#search').value ==""){
        Routes().navigate("/shop")
    }
     

}
 function name() {
  let box = searchpage.querySelector('#showSearch')
  box.querySelectorAll(".boxproduct").forEach(element => {
      element.addEventListener("click",()=>{
          axiosApi(`/shoes?id=${element.id}`).then(res=>{
            console.log(res.data);
              document.querySelector("#app").innerHTML=""
              document.querySelector("#app").appendChild(product(res.data[0].images,res.data[0].title,res.data[0].price,res.data[0].id))
          })

          })
      });
  }
