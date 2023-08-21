'use client';
import Image from 'next/image';
import { ChangeEvent, useState } from 'react';
import { IconContext } from 'react-icons';
import { MdOutlineEmail } from 'react-icons/md';
import { RiAccountCircleLine, RiLockPasswordLine, RiLockPasswordFill } from 'react-icons/ri';
// import { LuSmartphone } from 'react-icons/lu';
import { GrFormViewHide, GrFormView } from 'react-icons/gr';
import Icon from '@Components/Icon';
import TextInput from '@Components/Input';
import Button from '@Components/Button';
import axios from 'axios';

export default function SignUp() {
  const [email, setEmail] = useState<string>('');
  const [nickname, setNickname] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [verifypassword, setVerifypassword] = useState<string>('');
  // const [phonenumber, setPhonenumber] = useState<string>('');

  const [focusedEmail, setFocusedEmail] = useState<boolean>(false);
  const [focusedNickname, setFocusedNickname] = useState<boolean>(false);
  const [focusedPassword, setFocusedPassword] = useState<boolean>(false);
  const [focusedVerifypassword, setFocusedVerifypassword] = useState<boolean>(false);
  // const [focusedPhonenumber, setFocusedPhonenumber] = useState<boolean>(false);

  const [passwordInputType, setPasswordInputType] = useState<string>('password');
  const [verifyPasswordInputType, setVerifyPasswordInputType] = useState<string>('password');
  const [passwordShowIcon, setPasswordShowIcon] = useState<React.ReactNode>(<GrFormViewHide />);
  const [verifyPasswordShowIcon, setVerifyPasswordShowIcon] = useState<React.ReactNode>(<GrFormViewHide />);

  const isCorrectSignUp = () => {
    !isCorrectEmail() && setFocusedEmail(true);
    !isCorrectPassword() && setFocusedPassword(true);
    !isCorrectNickname() && setFocusedNickname(true);
    // isCorrectPhonenumber() && setFocusedPhonenumber(true);
    return isCorrectEmail() && isCorrectPassword() && isCorrectNickname() ? true : false;
  };

  const signUp = () => {
    isCorrectSignUp() &&
      axios
        .post('/api/v1/user/signup', {
          email: email,
          nickname: nickname,
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
  const handleChangeNickname = (ev: ChangeEvent<HTMLInputElement>) => {
    setNickname(ev.target.value);
  };
  const handleChangePassword = (ev: ChangeEvent<HTMLInputElement>) => {
    setPassword(ev.target.value);
  };
  const handleChangeVerifypassword = (ev: ChangeEvent<HTMLInputElement>) => {
    setVerifypassword(ev.target.value);
  };
  // const handleChangePhonenumber = (ev: ChangeEvent<HTMLInputElement>) => {
  //   setPhonenumber(ev.target.value);
  // };

  const handleShowPassword = () => {
    if (passwordInputType === 'password') {
      setPasswordInputType('text');
      setPasswordShowIcon(<GrFormView />);
    } else {
      setPasswordInputType('password');
      setPasswordShowIcon(<GrFormViewHide />);
    }
  };
  const handleShowVerifyPassword = () => {
    if (verifyPasswordInputType === 'password') {
      setVerifyPasswordInputType('text');
      setVerifyPasswordShowIcon(<GrFormView />);
    } else {
      setVerifyPasswordInputType('password');
      setVerifyPasswordShowIcon(<GrFormViewHide />);
    }
  };

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const nicknameRegEx = /^[A-Za-z0-9가-힣]{3,8}$/;
  const passwordRegEx = /^(?=.*[!@#$%^&*+=-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,16}$/;
  // const phonenumberRegEx = /^01([0|1|6|7|8|9])-?(\d{3,4})-?(\d{4})$/;

  const isCorrectEmail = () => {
    return emailRegEx.test(email) ? true : false;
  };
  const isCorrectNickname = () => {
    return nicknameRegEx.test(nickname) ? true : false;
  };
  const isCorrectPassword = () => {
    return passwordRegEx.test(password) ? true : false;
  };
  const isCorrectVerifypassword = () => {
    return password === verifypassword && password.length > 4 ? true : false;
  };
  // const isCorrectPhonenumber = () => {
  //   return phonenumberRegEx.test(phonenumber) ? true : false;
  // };

  return (
    //TODO: 회원가입화면 띄우기
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
                onFocus={() => {
                  setFocusedEmail(true);
                }}
              ></TextInput>
            </div>
          </div>
          {!isCorrectEmail() && focusedEmail && (
            <div className='mb-2 ml-200px text-sm text-red-500'>
              <span>이메일 주소를 입력해주세요.</span>
            </div>
          )}
          {/** -------------------------------------------------------- */}
          <div className='sign-up-input-container'>
            <div className='sign-up-icon-wrap'>
              <Icon className='sign-up-icon'>
                <RiAccountCircleLine />
              </Icon>
            </div>
            <div className='sign-up-input-wrap'>
              <TextInput
                type='text'
                className='sign-up-input'
                placeholder='닉네임'
                onChange={(ev) => {
                  handleChangeNickname(ev);
                }}
                onFocus={() => {
                  setFocusedNickname(true);
                }}
              ></TextInput>
            </div>
          </div>
          {!isCorrectNickname() && focusedNickname && (
            <div className='mb-2 ml-200px text-sm text-red-500'>
              <span>영어나 숫자, 한글로 2~8자리까지 입력할 수 있습니다.</span>
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
              <span>영소문자, 영대문자, 숫자, 특수문자를 포함해 4~16자리로 입력해주세요.</span>
            </div>
          )}
          {/** -------------------------------------------------------- */}
          <div className='sign-up-input-container'>
            <div className='sign-up-icon-wrap'>
              <Icon className='sign-up-icon'>
                <RiLockPasswordFill />
              </Icon>
            </div>
            <Button
              className='absolute ml-84 mt-2 cursor-pointer p-0.5'
              onClick={handleShowVerifyPassword}
            >
              <IconContext.Provider value={{ size: '2rem' }}>
                <Icon className='sign-up-icon'>{verifyPasswordShowIcon}</Icon>
              </IconContext.Provider>
            </Button>
            <div className='sign-up-input-wrap'>
              <TextInput
                type={verifyPasswordInputType}
                className='sign-up-input'
                placeholder='비밀번호 확인'
                onChange={(ev) => {
                  handleChangeVerifypassword(ev);
                }}
                onFocus={() => {
                  setFocusedVerifypassword(true);
                }}
              ></TextInput>
            </div>
          </div>
          {!isCorrectVerifypassword() && focusedVerifypassword && (
            <div className='mb-2 ml-200px text-sm text-red-500'>
              <span>비밀번호가 일치하지 않습니다.</span>
            </div>
          )}
          {/** --------------------------------------------------------
          <div className='sign-up-input-container'>
            <div className='sign-up-icon-wrap'>
              <Icon className='sign-up-icon'>
                <LuSmartphone />
              </Icon>
            </div>
            <div className='sign-up-input-wrap'>
              <TextInput
                type='text'
                className='sign-up-input'
                placeholder='휴대폰 번호'
                onChange={(ev) => {
                  handleChangePhonenumber(ev);
                }}
                onClick={() => {
                  setFocusedPhonenumber(true);
                }}
              ></TextInput>
            </div>
          </div>
          {isCorrectPhonenumber() && focusedPhonenumber === true && (
            <div className='mb-2 ml-200px text-sm text-red-500'>
              <span>전화번호를 입력해 주세요. 하이픈(-)을 포함해서요.</span>
            </div>
          )}
          -------------------------------------------------------- */}
          <Button
            className='m-auto mt-4 w-435px cursor-pointer border-2 border-emerald-300 bg-white py-3 text-center'
            onClick={signUp}
          >
            회원가입
          </Button>
        </div>
      </div>
    </>
  );
}
