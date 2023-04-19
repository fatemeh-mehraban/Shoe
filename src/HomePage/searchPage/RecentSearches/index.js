import {axiosApi} from '@/axios'
import {searchpage, searchArr,updateSearchArr} from '@/HomePage'
let filterSearch = []
export function boxSearch() {
  let box = searchpage.querySelector('#RecentSearches')

    renderSearch()
          box.addEventListener("click",(e)=>{
            // console.log(e.target.closest("#suggestion").querySelector("#searchtext").innerHTML);
            if (e.target.closest(".close")) {
              filterSearch=searchArr.filter(item=>item !== e.target.closest("#suggestion").querySelector("#searchtext").innerHTML)
              updateSearchArr(filterSearch)
              renderSearch()
              if(searchpage.querySelector('#search').value =="") return
              localStorage.setItem("search",JSON.stringify(searchArr))
            
              }
              if(e.target.id=="searchtext"){
                searchpage.querySelector('#search').value =e.target.innerHTML
              }
          });
          
      }
      // ********* render search   create box and suggestion div*****
      function renderSearch() {
        let box = searchpage.querySelector('#RecentSearches')
       
        box.innerHTML =""
        searchArr.map(item => {
          if(searchpage.querySelector('#search').value =="") return
        box.innerHTML+=`
        <div id="suggestion" class="flex justify-between pb-7 w-full">
        <p id="searchtext" class="text-gray-500">${item}</p>
        <span class="close h-6 flex items-center justify-center w-6 border border-1 border-gray-700 rounded-lg text-gray-700"><i class="bi bi-x"></i></span>
      </div>`
      })
    }
