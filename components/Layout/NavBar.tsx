import React from 'react';
import Button from '../Button';
import { BiLogIn } from 'react-icons/bi';
import { FaRegAddressBook, FaRegPaperPlane } from 'react-icons/fa';
import { MdOutlineSell } from 'react-icons/md';

export default function NavBar() {
  //TODO: 로그인하고 나면 로그인, 회원가입 지우고 닉네임 로그아웃으로 대체
  return (
    <div className='flex flex-row justify-center p-2 bg-neutral-50 font-LINEBd'>
      <div className='flex flex-row justify-end text-xs text-slate-600 w-900px '>
        <Button className='flex content-center' link='/login'>
          로그인 <BiLogIn className='ml-1' />
        </Button>
        <p className='mx-1'>|</p>
        <Button className='flex content-center' link='/sign-up'>
          회원가입 <FaRegAddressBook className='ml-1' />
        </Button>
        <p className='mx-1'>|</p>
        <Button className='flex content-center' link='/help'>
          고객센터 <FaRegPaperPlane className='ml-1' />
        </Button>
        <p className='mx-1'>|</p>
        <Button className='flex content-center' link='/sell'>
          판매하기 <MdOutlineSell className='ml-1 mr-6' />
        </Button>
      </div>
    </div>
  );
}
