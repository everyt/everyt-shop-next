import React from 'react';
import Image from 'next/image';
import { FaSearch } from 'react-icons/fa';

function Header() {
  return (
    <div className='w-1200px ml-16 mt-6 my-6 flex flex-row justify-start'>
      <Image src='/next.svg' alt='Next.js Logo' width={155} height={29} />
      <div className='ml-14 mt-2 w-48% h-9 rounded-lg border border-gray-700'>
        <input
          className='mt-0 m-1 ml-6 outline-none text-sm text-slate-500'
          type='text'
          placeholder='찾고 싶은 상품을 검색해보세요!'
        />
        <button
          className='ml-96 ps-3 pe-3 py-9px rounded-r-md bg-gray-700 text-slate-50'
          type='submit'
        >
          <FaSearch />
        </button>
      </div>
      <img className='ml-14' src='/qrcode.png' height='70' width='70' />
    </div>
  );
}

export default Header;
