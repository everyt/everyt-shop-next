'use client';
import { ChangeEvent, useState } from 'react';
import Image from 'next/image';
import { IconContext } from 'react-icons';
import { MdOutlineEmail } from 'react-icons/md';
import { RiLockPasswordLine } from 'react-icons/ri';
import { GrFormViewHide, GrFormView } from 'react-icons/gr';
import Icon from '@Components/Icon';
import TextInput from '@Components/Input';
import Button from '@Components/Button';
import axios from 'axios';

export default function page() {
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  const [focusedEmail, setFocusedEmail] = useState<boolean>(false);
  const [focusedPassword, setFocusedPassword] = useState<boolean>(false);

  const [passwordInputType, setPasswordInputType] = useState<string>('password');
  const [passwordShowIcon, setPasswordShowIcon] = useState<React.ReactNode>(<GrFormViewHide />);

  const isCorrectLogin = () => {
    !isCorrectEmail() && setFocusedEmail(true);
    !isCorrectPassword() && setFocusedPassword(true);
    return isCorrectEmail() && isCorrectPassword() ? true : false;
  };

  const Login = () => {
    // isCorrectLogin() &&
    axios
      .post('/api/v1/auth', {
        email: email,
        password: password,
      })
      .then((response) => {
        console.log(response);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const handleChangeEmail = (ev: ChangeEvent<HTMLInputElement>) => {
    setEmail(ev.target.value);
  };
  const handleChangePassword = (ev: ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };

  const handleShowPassword = () => {
    if (passwordInputType === 'password') {
      setPasswordInputType('text');
      setPasswordShowIcon(<GrFormView />);
    } else {
      setPasswordInputType('password');
      setPasswordShowIcon(<GrFormViewHide />);
    }
  };

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;

  const isCorrectEmail = () => {
    return emailRegEx.test(email) ? true : false;
  };
  const isCorrectPassword = () => {
    return password.length > 0 ? true : false;
  };

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
          <p className='mb-4 text-center text-xl text-emerald-400'>로그인</p>
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
                onFocus={() => {
                  setFocusedEmail(true);
                }}
              ></TextInput>
            </div>
          </div>
          {!isCorrectEmail() && focusedEmail && (
            <div className='mb-2 ml-200px text-sm text-red-500'>
              <span>아이디(이메일)는 이메일 형식으로 입력해주세요.</span>
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
                onFocus={() => {
                  setFocusedPassword(true);
                }}
              ></TextInput>
            </div>
          </div>
          {!isCorrectPassword() && focusedPassword && (
            <div className='mb-2 ml-200px text-sm text-red-500'>
              <span>비밀번호를 입력해 주세요.</span>
            </div>
          )}
          {/** -------------------------------------------------------- */}
          <Button
            className='m-auto mt-4 w-435px cursor-pointer border-2 border-emerald-300 bg-white py-3 text-center'
            onClick={Login}
          >
            로그인
          </Button>
        </div>
      </div>
    </>
  );
}
