'use client';

import React from 'react';
import { Menu } from '@headlessui/react';
import Button from './Button';
import { CgMenuLeft } from 'react-icons/cg';

export default function Category() {
  return (
    <div className='w-100vw bg-white flex flex-row justify-center'>
      <div className='my-2 w-1000px flex flex-row justify-start'>
        <Menu
          as='div'
          className='z-50 relative inline-block text-left'
        >
          <Menu.Button className='inline-flex w-full justify-center rounded-md hover:bg-opacity-30 focus:outline-none focus-visible:ring-2 focus-visible:ring-white focus-visible:ring-opacity-75'>
            <Button className='font-LINEBd flex content-center'>
              <div className='mt-0.5 mx-4'>
                <CgMenuLeft />
              </div>
              카테고리
            </Button>
          </Menu.Button>
          <Menu.Items className='absolute ml-3 mt-2 w-56 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none'>
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
