'use client';

import React, { useState } from 'react';
import Button from './Button';
import { BiLogIn } from 'react-icons/bi';
import { FaRegAddressBook, FaRegPaperPlane } from 'react-icons/fa';
import { MdOutlineSell } from 'react-icons/md';

export default function NavBar() {
  return (
    <div className='bg-neutral-50 p-2 flex flex-row justify-center'>
      <div className='text-slate-600 w-1200px text-xs flex flex-row justify-end '>
        <Button className='login' link='/login'>
          로그인
        </Button>
        <BiLogIn className='ml-1' />
        <p className='mx-1'>|</p>
        <Button className='sign-up' link='/sign-up'>
          회원가입
        </Button>
        <FaRegAddressBook className='ml-1' />
        <p className='mx-1'>|</p>
        <Button className='help' link='/help'>
          고객센터
        </Button>
        <FaRegPaperPlane className='ml-1' />
        <p className='mx-1'>|</p>
        <Button className='sell' link='/sell'>
          판매하기
        </Button>
        <MdOutlineSell className='ml-1 mr-6' />
      </div>
    </div>
  );
}
