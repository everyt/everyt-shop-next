import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <div className='w-1200px ml-16 mt-2 my-6 flex flex-row justify-start'>
      <div className='ml-26 h-100px'>
        <Image
          className='w-200px h-70px'
          src='/Logo.png'
          alt='Next.js Logo'
          width={450}
          height={150}
        />
      </div>
      <div>
        <div className='ml-16 mt-7 w-48% h-10 rounded-md border border-gray-700'>
          <input
            className='mt-0 m-1 ml-6 pe-60 outline-none text-sm text-slate-500'
            type='text'
            placeholder='찾고 싶은 상품을 검색해보세요!'
          />
          <button
            className='ps-3 pe-3 py-9px pb-0.8rem rounded-r bg-gray-700 text-slate-50'
            type='submit'
          >
            <FaSearch />
          </button>
          <br />
        </div>
        <div className='text-slate-600 mt-1 ml-16 text-xs flex flex-row justify-start'>
          아메리카노
          <p className='text-slate-300 mx-1'>|</p>
          로지텍 G-PRO SUPER LIGHT
          <p className='text-slate-300 mx-1'>|</p>
          애플워치SE 스트랩
          <p className='text-slate-300 mx-1'>|</p>
          아이폰 13 미니 케이스
        </div>
      </div>
      <img
        className='ml-20 h-70px w-70px'
        src='/qrcode.png'
        height='70'
        width='70'
      />
    </div>
  );
}

export default Header;
