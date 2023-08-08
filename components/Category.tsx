import React from 'react';
import Button from './Button';
import { CgMenuLeft } from 'react-icons/cg';

export default function Category() {
  return (
    <div className='w-100vw bg-white flex flex-row justify-center'>
      <div className='my-2 w-1000px flex flex-row justify-start'>
        <Button className='font-LINEBd flex content-center'>
          <div className='mt-0.5 mx-4'>
            <CgMenuLeft />
          </div>
          카테고리
        </Button>
        <p className='ml-10'>|</p>
        <Button className='ml-10 mx-3 mr-5 font-LINEBd text-amber-400'>
          베스트
        </Button>
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
