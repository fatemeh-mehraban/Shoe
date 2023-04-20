import { axiosApi } from '@/axios';
import { information, name, product } from '@/HomePage';

import { El } from '@/library';
import { Routes } from '@/routes';
// export let arrayOfObj = [];

export function Render() {
  axiosApi(`/shoes`).then((res) => {
    information.querySelector('#section').innerHTML = '';
    res.data.map((item) => {
      reneText(item);
    });
    //  name()
  });
}
export function reneText(item) {
  information.querySelector('#section').append(
    El({
      element: 'div',
      onclick: () => {
        Routes().navigate(`/product/${item.id}`)
      },

      id: item.id,
      className: 'boxproduct',
      child: [
        El({
          element: 'div',
          className: 'bg-gray-100 p-4 rounded-3xl',
          child: [
            El({
              element: 'img',
              src: item.images,
            }),
          ],
        }),
        El({
          element: 'h3',
          child: item.title,
          className: 'text-lg font-bold mt-2',
        }),
        El({
          element: 'span',
          className: 'text-lg font-bold mt-2',
          innerText: `$ ${item.price}`,
        }),
      ],
    })
  );
}
