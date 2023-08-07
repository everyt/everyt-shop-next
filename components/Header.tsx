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
        <div className='ml-16 mt-8 w-48% h-9 rounded-md border border-gray-700'>
          <input
            className='mt-0 m-1 ml-6 pe-60 outline-none text-sm text-slate-500'
            type='text'
            placeholder='찾고 싶은 상품을 검색해보세요!'
          />
          <button
            className='ps-3 pe-3 py-9px rounded bg-gray-700 text-slate-50'
            type='submit'
          >
            <FaSearch />
          </button>
          <br />
        </div>
        <p className='mt-1 ml-16 text-xs'>
          아메리카노 | 로지텍 G-PRO SUPER LIGHT | 애플워치SE 스트랩 | 아이폰 13
          미니 케이스
        </p>
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
