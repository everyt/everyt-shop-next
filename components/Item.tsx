import React from 'react';

type ItemProps = {
  children: string;
  src: string;
};

function Item({ children, src }: ItemProps) {
  return (
    <div className='wrap'>
      <img src={src} alt='Item' className='cards__item__img' />
      <div className='info'>
        <h3 className='name'></h3>
        <p className='text'></p>
        <p className='price'>원</p>
      </div>
    </div> //TODO: 이제 앞으로 아이템 DB를 만들어서 DB에서 모든 아이템을 꺼내와 메인 샵에 진열, 가격순으로 검색창 아래에 이름 4개 진열
  );
}

export default Item;
