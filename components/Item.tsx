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
    <div className='item h-50 relative ml-2 mt-8 w-48 overflow-hidden rounded-2xl border shadow-md'>
      {category.length > 2 ? (
        category.length > 4 ? (
          <p className='absolute ml-26 mt-26 h-5 w-60 rounded-md bg-neutral-700 pl-2 pr-2 font-LINEBd text-white'>
            {category}
          </p>
        ) : (
          <p className='absolute ml-30 mt-26 h-5 w-40 rounded-md bg-neutral-700 pl-2 pr-2 font-LINEBd text-white'>
            {category}
          </p>
        )
      ) : (
        <p className='absolute ml-37 mt-26 h-5 w-20 rounded-md bg-neutral-700 pl-2 pr-2 font-LINEBd text-white'>
          {category}
        </p>
      )}
      <div className='rounded-t-2xl bg-neutral-200 pb-2 after:absolute after:h-2 after:bg-emerald-300 after:pr-5'>
        <img
          className='flex-auto rounded-t-2xl'
          src={img}
          alt='Item'
        ></img>
      </div>
      <div className='item-info flex h-24 content-center justify-center rounded-b-2xl bg-white'>
        <div className='mt-1 h-20 w-44'>
          <p className='item-name ml-1 font-LINERg text-xl text-neutral-700'>{name}</p>
          <p className='item-text h-10 text-sm text-neutral-500'>{children}</p>
          <p className='item-price text-end text-base text-neutral-600'>
            <span className='text-neutral-500'>{price}</span>￦
          </p>
        </div>
      </div>
    </div> //TODO: 이제 앞으로 아이템 DB를 만들어서 DB에서 모든 아이템을 꺼내와 메인 샵에 진열, 가격순으로 검색창 아래에 이름 4개 진열. 클릭하면 페이지로 이동
  );
}

export default Item;
