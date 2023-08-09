'use client';

import React from 'react';
import { Menu } from '@headlessui/react';
import Button from '../Button';
import { CgMenuLeft } from 'react-icons/cg';

export default function Category() {
  return (
    <div className='flex flex-row justify-center bg-white w-100vw'>
      <div className='flex flex-row justify-start my-2 w-1000px'>
        <Menu as='div' className='relative z-50 inline-block text-left'>
          <Menu.Button className='inline-flex justify-center w-full rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <Button className='flex content-center font-LINEBd'>
              <div className='mt-0.5 mx-4'>
                <CgMenuLeft />
              </div>
              카테고리
            </Button>
          </Menu.Button>
          <Menu.Items className='absolute w-56 mt-2 ml-3 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
            <Menu.Item>
              {({ active }) => <Button className=''>여성패션</Button>}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => <Button className=''>남성패션</Button>}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => <Button className=''>홈인테리어</Button>}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => <Button className=''>식품</Button>}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => <Button className=''>주방용품</Button>}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => <Button className=''>생활용품</Button>}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => <Button className=''>가전디지털</Button>}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => <Button className=''>자동차용품</Button>}
            </Menu.Item>
            <Menu.Item>
              {({ active }) => <Button className=''>취미/완구</Button>}
            </Menu.Item>
          </Menu.Items>
        </Menu>
        <p className='ml-10'>|</p>
        <Button className='mx-3 ml-10 mr-5 font-LINEBd text-amber-400'>
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
