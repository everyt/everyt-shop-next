'use client';

import React, { useState } from 'react';
import Button from './Button';
import { BiLogIn } from 'react-icons/bi';
import { FaRegAddressBook, FaRegPaperPlane } from 'react-icons/fa';
import { MdOutlineSell } from 'react-icons/md';
import { Listbox } from '@headlessui/react';

const language = [
  { id: 1, language: 'Korean', img: '/Flag_Korean.svg' },
  { id: 2, language: 'English', img: '/Flag_Korean.svg' },
];

export default function NavBar() {
  const [selectedLanguage, setSelectedLanguage] = useState(language[0]);
  return (
    <div className='bg-slate-100 p-2 flex flex-row justify-center'>
      <div className='text-slate-600 w-1200px text-xs flex flex-row justify-end '>
        <Button
          className='login'
          link='/login'
        >
          로그인
        </Button>
        <BiLogIn className='ml-1' />
        <p className='mx-1'>|</p>
        <Button
          className='sign-up'
          link='/sign-up'
        >
          회원가입
        </Button>
        <FaRegAddressBook className='ml-1' />
        <p className='mx-1'>|</p>
        <Button
          className='help'
          link='/help'
        >
          고객센터
        </Button>
        <FaRegPaperPlane className='ml-1' />
        <p className='mx-1'>|</p>
        <Button
          className='sell'
          link='/sell'
        >
          판매하기
        </Button>
        <MdOutlineSell className='ml-1' />
        <p className='mx-1'>|</p>
        <Button className='language mr-1'>한국어</Button>
        <Listbox
          value={selectedLanguage}
          onChange={setSelectedLanguage}
        >
          <Listbox.Button>
            <div className='flex flex-col'>
              {selectedLanguage.language}
              <img
                className='mr-7'
                src={selectedLanguage.img}
                height='20'
                width='20'
              />
            </div>
          </Listbox.Button>
        </Listbox>
      </div>
    </div>
  );
}
