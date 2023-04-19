import { axiosApi } from '@/axios';
import { El } from '@/library';
export let Product;
import { color, size, NumberOfShoes } from '@/HomePage';
import { Routes } from '@/routes';
import { data } from 'autoprefixer';
export let arrayOfObj = [];
export const changearrayOfObj=(arr)=>{
  arrayOfObj = arr
}

export const product = (data) => {

  Product = El({
    element: 'div',
    id: data.id,
    className: ' p-5',
    child: [
      El({
        element: 'img',
        src: '../img/flesh.png',
        onclick: () => {
          Routes().navigate('/shop');
        },
      }),
      El({
        element: 'div',
        id: 'boximg',
        className: ' mt-5',
        child: [
          El({
            element: 'img',
            id: 'productImg',
            src: data.images,
          }),
          El({
            element: 'div',
            className: 'flex gap-1 justify-center mt-5',
            child: [
              El({
                element: 'span',
                className: 'bg-gray-600 w-7 h-2 rounded-full',
              }),
              El({
                element: 'span',
                className: 'bg-gray-400 w-2 h-2 rounded-full',
              }),
              El({
                element: 'span',
                className: 'bg-gray-400 w-2 h-2 rounded-full',
              }),
              El({
                element: 'span',
                className: 'bg-gray-400 w-2 h-2 rounded-full',
              }),
            ],
          }),
        ],
      }),

      El({
        element: 'div',
        className: ' flex justify-between mt-5',
        child: [
          El({
            element: 'p',
            className: 'text-3xl',
            id: 'productTitle',
            child: data.title,
          }),
          El({
            element: 'i',
            id: 'like',
            className: 'bi bi-heart text-xl',
          }),
        ],
      }),
      El({
        element: 'div',
        className: ' flex mt-5 items-center gap-5 border-b pb-3',
        child: [
          El({
            element: 'span',
            className: 'bg-gray-200 p-3 rounded-md text-[12px] text-gray-600',
            child: '5.371 sold',
          }),
          El({
            element: 'i',
            className: 'bi bi-star-half text-xl',
          }),
          El({
            element: 'span',
            className: 'text-gray-600',
            child: '4.3  (5.387 reviews)',
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'mt-5',

        child: [
          El({
            element: 'h4',
            child: 'Description',
            className: 'text-lg text-gray-700',
          }),
          El({
            element: 'p',
            child:
              'Fast and easy way to test responsive design side-by-side. “Lorem Ipsum” generator.',
            className: ' text-gray-500',
          }),
        ],
      }),

      El({
        element: 'div',
        className: 'flex gap-10 mt-5',
        child: [
          El({
            element: 'div',
            className: 'flex flex-col gap-3',
            child: [
              El({
                element: 'p',
                child: 'Size',
              }),
              El({
                element: 'p',
                id: 'Size',
                className: 'flex gap-3',
              }),
            ],
          }),
          El({
            element: 'div',
            className: 'flex flex-col gap-3',
            child: [
              El({
                element: 'p',
                child: 'Color ',
                className: '',
              }),
              El({
                element: 'div',
                id: 'colorShoes',
                className: 'flex flex-wrap',
              }),
            ],
          }),
        ],
      }),
      El({
        element: 'div',
        className: 'flex items-center gap-5 mt-5 border-b pb-5',
        child: [
          El({
            element: 'span',
            child: 'Quantity',
            className: 'text-lg font-bold',
          }),
          El({
            element: 'div',
            id: 'Counter',
            className:
              'text-lg flex items-center justify-center gap-5 font-bold px-3 p-2 bg-gray-100 rounded-full',
            child: [
              El({
                element: 'i',
                id: 'minus',
                className: 'bi bi-dash text-2xl',
              }),
              El({
                element: 'span',
                child: '0',
                className: 'text-lg font-bold',
                id: 'number',
              }),
              El({
                element: 'i',
                id: 'plus',
                className: 'bi bi-plus text-2xl',
              }),
            ],
          }),
        ],
      }),

      El({
        element: 'div',
        className: 'flex justify-between mt-5',
        child: [
          El({
            element: 'div',
            child: [
              El({
                element: 'span',
                child: 'Total price',
                className: 'text-gray-400',
              }),
              El({
                element: 'div',
                className: 'text-xl flex bd-red-100',

                child: [
                  El({
                    element: 'span',
                    child: '$ ',
                  }),
                  El({
                    element: 'h4',
                    id: 'totalPrice',
                    child: '0',
                  }),
                ],
              }),
            ],
          }),
          El({
            element: 'button',
            className:
              'bg-black text-white/90 px-16 flex items-center rounded-full gap-3',
            child: [
              El({
                element: 'i',
                id: 'plus',
                className: 'bi bi-handbag-fill text-md',
              }),
              'Add To cart',
            ],
            onclick: () => {
              data.count =
                Product.querySelector('#Counter').querySelector(
                  '#number'
                ).innerHTML;
              const {title , price , images , id , color , size ,count} = data
              arrayOfObj.push({title , price , images , id , color , size , count});
            },
          }),
        ],
      }),
    ],
  });
  NumberOfShoes(Product ,data);
  color(data.color, data);
  size(data.size, data);

  return Product;
};
