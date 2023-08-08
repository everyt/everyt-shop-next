import React from 'react';

type ItemProps = {
  children: string;
  img?: string;
  name: string;
  price: string;
  category: string;
};

function Item({ children, img, name, price, category }: ItemProps) {
  return (
    <div className='overflow-hidden item w-48 h-50 ml-2 mt-8 border rounded-2xl relative shadow-md'>
      <p className='rounded-md mt-28 ml-37 pl-2 pr-2 w-20 h-5 bg-neutral-700 text-white absolute font-LINEBd'>
        {category}
      </p>
      <div className='pb-2 after:absolute after:bg-emerald-300 after:pr-5 after:h-2'>
        <img
          className='rounded-t-2xl flex-auto'
          src={img}
          alt='Item'
        ></img>
      </div>
      <div className='item-info h-24 rounded-b-2xl flex justify-center content-center bg-white'>
        <div className='w-44 h-20 mt-1'>
          <p className='ml-1 item-name text-xl text-neutral-700 font-LINERg'>
            {name}
          </p>
          <p className='h-10 item-text text-sm text-neutral-500'>{children}</p>
          <p className='text-end item-price text-base text-neutral-600'>
            <span className='text-neutral-500'>{price}</span>￦
          </p>
        </div>
      </div>
    </div> //TODO: 이제 앞으로 아이템 DB를 만들어서 DB에서 모든 아이템을 꺼내와 메인 샵에 진열, 가격순으로 검색창 아래에 이름 4개 진열
  );
}

export default Item;
