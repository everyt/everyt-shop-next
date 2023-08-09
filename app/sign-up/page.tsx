'use client';

import axios from 'axios';
import Image from 'next/image';
import { useRef, useState } from 'react';
import { MdOutlineEmail } from 'react-icons/md';
import {
  RiAccountCircleLine,
  RiLockPasswordLine,
  RiLockPasswordFill,
} from 'react-icons/ri';
import { LuSmartphone } from 'react-icons/lu';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [clickedEmail, setclickedEmail] = useState<boolean>(false);
  const emailRef = useRef<string>('이메일을 입력해주세요.');
  const [password, setPassword] = useState<string>('');
  const [clickedPassword, setclickedPassword] = useState<boolean>(false);
  const passwordRef = useRef<string>('비밀번호를 입력해주세요.');

  const login = () => {
    if (email === '' || password === '') {
    }
  };

  const checkEmail = () => {
    if (email.indexOf('@') > -1 && email.indexOf('.') > -1) {
      return false;
    }
    return true;
  };

  const regPassword = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*+=-]).{4,16}$/;

  const checkPassword = () => {
    if (regPassword.test(password) && password.length > 0) {
      return false;
    }
    if (password.length > 4)
      passwordRef.current =
        '영문, 숫자, 특수문자를 포함해 4~16자 이내로 비밀번호를 입력해주세요.';
    return true;
  };

  return (
    //TODO: 회원가입화면 띄우기
    <>
      <div className='flex flex-row justify-center w-100wv'>
        <div className='flex flex-col content-center w-400px'>
          <Image
            className='self-center w-200px h-70px mt-7 mb-7'
            src='/Logo.png'
            alt='NEXTEA Logo'
            width={450}
            height={150}
          />
          <p className='mb-4 text-center'>
            회원가입을 위한 정보를 입력해주세요.
          </p>
          <div className='flex content-center self-center mb-2'>
            <div className='sign-up-icon-wrap'>
              <div className='mt-0.5'>
                <MdOutlineEmail />
              </div>
            </div>
            <div className='p-4 pb-3 bg-white border-2'>
              <input
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                onClick={() => {
                  setclickedEmail(true);
                }}
                type='text'
                placeholder='아이디(이메일)'
                className='outline-none email w-350px'
              />
            </div>
          </div>
          {checkEmail() && clickedEmail === true && (
            <div className='mb-2 text-red-500'>
              <p>{emailRef.current}</p>
            </div>
          )}
          <div className='flex content-center self-center mb-2'>
            <div className='sign-up-icon-wrap'>
              <div className='sign-up-icon'>
                <RiAccountCircleLine />
              </div>
            </div>
            <div className='p-4 pb-3 bg-white border-2'>
              <input
                type='text'
                placeholder='닉네임'
                className='outline-none nickname w-350px'
              />
            </div>
          </div>
          <div className='flex content-center self-center mb-2'>
            <div className='p-4 border-l-2 bg-emerald-300 border-y-2'>
              <div className='mt-0.5'>
                <RiLockPasswordLine />
              </div>
            </div>
            <div className='p-4 pb-3 bg-white border-2'>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                onClick={() => {
                  setclickedPassword(true);
                }}
                type='password'
                placeholder='비밀번호'
                className='outline-none password w-350px'
              />
            </div>
          </div>
          {checkPassword() && clickedPassword === true && (
            <div className='mb-2 text-red-500'>
              <p>{passwordRef.current}</p>
            </div>
          )}
          <div className='flex content-center self-center mb-2'>
            <div className='p-4 border-l-2 bg-emerald-300 border-y-2'>
              <div className='mt-0.5'>
                <RiLockPasswordFill />
              </div>
            </div>
            <div className='p-4 pb-3 bg-white border-2'>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type='password'
                placeholder='비밀번호 확인'
                className='outline-none password w-350px'
              />
            </div>
          </div>
          <div className='flex content-center self-center mb-2'>
            <div className='p-4 border-l-2 bg-emerald-300 border-y-2'>
              <div className='mt-0.5'>
                <LuSmartphone />
              </div>
            </div>
            <div className='p-4 pb-3 bg-white border-2'>
              <input
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                type='password'
                placeholder='휴대폰 번호'
                className='outline-none password w-350px'
              />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
