import {searchpage} from '@/HomePage'
export let searchArr = JSON.parse(localStorage.getItem("search")) || []
console.log(searchArr);
export function updateSearchArr(arr) {
    searchArr = arr
}
export function saveInLocal() {
    if (searchpage.querySelector('#search') =="") return
    searchArr = JSON.parse(localStorage.getItem("search")) || []
    console.log(searchArr);
        searchArr.push(searchpage.querySelector('#search').value)
    localStorage.setItem("search",JSON.stringify(searchArr))
    }