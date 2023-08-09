'use client';
import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';
import TextInput from '../TextInput';

function Header() {
  const handleChange = () => {
  }
  return (
    <div className='flex flex-row justify-center bg-white w-100vw h-28'>
      <div className='flex flex-row justify-start my-6 mt-2 ml-16 w-1200px'>
        <div className='ml-28 h-100px'>
          <Image
            className='w-200px h-70px'
            src='/Logo.png'
            alt='NEXTEA Logo'
            width={450}
            height={150}
          />
        </div>
        <div>
          <div className='ml-16 mt-7 w-48% h-10 rounded-md border border-gray-700'>
            <TextInput
              className='m-1 mt-0 ml-6 text-sm w-100 pe-5 text-slate-500'
              placeholder='찾고 계신 상품이 있나요?'
              onChange={handleChange}
            />
            <button
              className='ps-3 pe-3 py-9px pb-0.8rem rounded-r bg-gray-700 text-slate-50'
              type='submit'
            >
              <FaSearch />
            </button>
            <br />
          </div>
          <div className='flex flex-row justify-start mt-1 ml-16 text-xs text-slate-600'>
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
