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
    <div className='relative w-48 mt-8 ml-2 overflow-hidden border shadow-md item h-50 rounded-2xl'>
      {category.length > 2 ? (
        category.length > 4 ? (
          <p className='absolute h-5 pl-2 pr-2 text-white rounded-md mt-26 ml-26 w-60 bg-neutral-700 font-LINEBd'>
            {category}
          </p>
        ) : (
          <p className='absolute w-40 h-5 pl-2 pr-2 text-white rounded-md mt-26 ml-30 bg-neutral-700 font-LINEBd'>
            {category}
          </p>
        )
      ) : (
        <p className='absolute w-20 h-5 pl-2 pr-2 text-white rounded-md mt-26 ml-37 bg-neutral-700 font-LINEBd'>
          {category}
        </p>
      )}
      <div className='pb-2 rounded-t-2xl bg-neutral-200 after:absolute after:bg-emerald-300 after:pr-5 after:h-2'>
        <img className='flex-auto rounded-t-2xl' src={img} alt='Item'></img>
      </div>
      <div className='flex content-center justify-center h-24 bg-white item-info rounded-b-2xl'>
        <div className='h-20 mt-1 w-44'>
          <p className='ml-1 text-xl item-name text-neutral-700 font-LINERg'>
            {name}
          </p>
          <p className='h-10 text-sm item-text text-neutral-500'>{children}</p>
          <p className='text-base text-end item-price text-neutral-600'>
            <span className='text-neutral-500'>{price}</span>￦
          </p>
        </div>
      </div>
    </div> //TODO: 이제 앞으로 아이템 DB를 만들어서 DB에서 모든 아이템을 꺼내와 메인 샵에 진열, 가격순으로 검색창 아래에 이름 4개 진열
  );
}

export default Item;
