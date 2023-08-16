'use client';
import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import TextInput from '../Input';

function Header() {
  const handleChange = () => {};
  return (
    <div className='w-100vw flex h-28 flex-row justify-center bg-white'>
      <div className='my-6 ml-16 mt-2 flex w-1200px flex-row justify-start'>
        <div className='ml-28 h-100px'>
          <Image
            priority={true}
            className='h-70px w-200px'
            src='/Logo.png'
            alt='NEXTEA Logo'
            width={450}
            height={150}
          />
        </div>
        <div>
          <div className='w-48% ml-16 mt-7 h-10 rounded-md border border-gray-700'>
            <TextInput
              type='text'
              className='m-1 ml-6 mt-0 w-100 pe-5 text-sm text-slate-500'
              placeholder='찾고 계신 상품이 있나요?'
              onChange={handleChange}
            />
            <button
              className='rounded-r bg-gray-700 py-9px pb-0.8rem pe-3 ps-3 text-slate-50'
              type='submit'
            >
              <FaSearch />
            </button>
            <br />
          </div>
          <div className='ml-16 mt-1 flex flex-row justify-start text-xs text-slate-600'>
            아메리카노
            <p className='mx-1 text-slate-300'>|</p>
            로지텍 G-PRO SUPER LIGHT
            <p className='mx-1 text-slate-300'>|</p>
            애플워치SE 스트랩
            <p className='mx-1 text-slate-300'>|</p>
            아이폰 13 미니 케이스
          </div>
        </div>
        <img
          className='ml-32 h-70px w-70px'
          src='/qrcode.png'
          height='70'
          width='70'
        />
      </div>
    </div>
  );
}

export default Header;
