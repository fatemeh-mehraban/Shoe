import {searchpage} from '@/HomePage'
export let searchArr=[]
export function updateSearchArr(arr) {
    searchArr = arr
}
export function saveInLocal() {
    if (searchpage.querySelector('#search') =="") return
        
        searchArr.push(searchpage.querySelector('#search').value)
    
    localStorage.setItem("search",searchArr)
    }