import {axiosApi} from '@/axios'

export async function fetchScroll(page) {
  const res= await axiosApi(`/shoes/?page=${page}`)
     return res

}