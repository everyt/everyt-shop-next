'use client';

import React from 'react';
import Button from '../Button';
import { CgMenuLeft } from 'react-icons/cg';

export default function Category() {
  return (
    <div className='w-100vw flex flex-row justify-center bg-white'>
      <div className='my-2 flex w-1000px flex-row justify-start'>
        <Button className='flex content-center font-LINEBd'>
          <div className='mx-4 mt-0.5'>
            <CgMenuLeft />
          </div>
          카테고리
        </Button>
        <p className='ml-10'>|</p>
        <Button className='mx-3 ml-10 mr-5 font-LINEBd text-amber-400'>베스트</Button>
        <Button className='mx-3'>여성패션</Button>
        <Button className='mx-3'>남성패션</Button>
        <Button className='mx-3'>홈인테리어</Button>
        <Button className='mx-3'>식품</Button>
        <Button className='mx-3'>주방용품</Button>
        <Button className='mx-3'>생활용품</Button>
        <Button className='mx-3'>가전디지털</Button>
        <Button className='mx-3'>자동차용품</Button>
        <Button className='mx-3'>취미/완구</Button>
      </div>
    </div>
  );
}
