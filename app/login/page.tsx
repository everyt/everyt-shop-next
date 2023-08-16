import React from 'react';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import Icon from '@Components/Icon';
import TextInput from '@Components/Input';
import Button from '@Components/Button';
import axios from 'axios';

export default function page() {
  return (
    <>
      <div className='w-100wv flex flex-row justify-center'>
        <div className='flex w-800px flex-col content-center justify-start'>
          <Image
            className='mb-7 mt-7 h-70px w-200px self-center'
            src='/Logo.png'
            alt='NEXTEA Logo'
            width={450}
            height={150}
          />
          <p className='mb-4 text-center'>회원가입을 위한 정보를 입력해주세요.</p>
          {/** -------------------------------------------------------- */}
          <div className='sign-up-input-container'>
            <div className='sign-up-icon-wrap'>
              <Icon className='sign-up-icon'>
                <MdOutlineEmail />
              </Icon>
            </div>
            <div className='sign-up-input-wrap'>
              <TextInput
                type='text'
                className='sign-up-input'
                placeholder='아이디(이메일)'
                onChange={(ev) => {
                  handleChangeEmail(ev);
                }}
                onClick={() => {
                  setClickedEmail(true);
                }}
              ></TextInput>
            </div>
          </div>
          {checkEmail() && clickedEmail === true && (
            <div className='mb-2 ml-200px text-sm text-red-500'>
              <span>이메일 주소를 입력해주세요.</span>
            </div>
          )}
          {/** -------------------------------------------------------- */}
          <div className='sign-up-input-container'>
            <div className='sign-up-icon-wrap'>
              <Icon className='sign-up-icon'>
                <RiLockPasswordLine />
              </Icon>
            </div>
            <Button
              className='absolute ml-84 mt-2 cursor-pointer p-0.5'
              onClick={handleShowPassword}
            >
              <IconContext.Provider value={{ size: '2rem' }}>
                <Icon className='sign-up-icon'>{passwordShowIcon}</Icon>
              </IconContext.Provider>
            </Button>
            <div className='sign-up-input-wrap'>
              <TextInput
                type={passwordInputType}
                className='sign-up-input'
                placeholder='비밀번호'
                onChange={(ev) => {
                  handleChangePassword(ev);
                }}
                onClick={() => {
                  setClickedPassword(true);
                }}
              ></TextInput>
            </div>
          </div>
          {checkPassword() && clickedPassword === true && (
            <div className='mb-2 ml-200px text-sm text-red-500'>
              <span>영소문자, 영대문자, 숫자, 특수문자를 포함해 4~16자리로 입력해주세요.</span>
            </div>
          )}
          -------------------------------------------------------- */}
          <Button
            className='m-auto mt-4 w-435px cursor-pointer border-2 border-emerald-300 bg-white py-3 text-center'
            onClick={SignUp}
          >
            회원가입
          </Button>
        </div>
      </div>
    </>
  );
}
