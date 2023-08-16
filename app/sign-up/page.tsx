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
  const [checkingpassword, setCheckingpassword] = useState<string>('');
  // const [phonenumber, setPhonenumber] = useState<string>('');

  const [clickedEmail, setClickedEmail] = useState<boolean>(false);
  const [clickedNickname, setClickedNickname] = useState<boolean>(false);
  const [clickedPassword, setClickedPassword] = useState<boolean>(false);
  const [clickedCheckingpassword, setClickedCheckingpassword] = useState<boolean>(false);
  // const [clickedPhonenumber, setClickedPhonenumber] = useState<boolean>(false);

  const [passwordInputType, setPasswordInputType] = useState<string>('password');
  const [checkingPasswordInputType, setCheckingPasswordInputType] = useState<string>('password');
  const [passwordShowIcon, setPasswordShowIcon] = useState<React.ReactNode>(<GrFormViewHide />);
  const [checkingPasswordShowIcon, setCheckingPasswordShowIcon] = useState<React.ReactNode>(<GrFormViewHide />);

  const checkSignUp = () => {
    checkEmail() && setClickedEmail(true);
    checkPassword() && setClickedPassword(true);
    checkNickname() && setClickedNickname(true);
    // checkPhonenumber() && setClickedPhonenumber(true);
    return !checkEmail() && !checkPassword() && !checkNickname() ? true : false;
  };

  const SignUp = () => {
    let time = new Date();
    checkSignUp() &&
      axios
        .post('/api/v1/user/sign-up', {
          email: email,
          nickname: nickname,
          password: password,
          authority: 'ROLE_USER',
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
  const handleChangeCheckingpassword = (ev: ChangeEvent<HTMLInputElement>) => {
    setCheckingpassword(ev.target.value);
  };
  // const handleChangePhonenumber = (ev: ChangeEvent<HTMLInputElement>) => {
  //   setPhonenumber(ev.target.value);
  // };

  const handleShowPassword = () => {
    if (passwordInputType == 'password') {
      setPasswordInputType('text');
      setPasswordShowIcon(<GrFormView />);
    } else {
      setPasswordInputType('password');
      setPasswordShowIcon(<GrFormViewHide />);
    }
  };
  const handleShowCheckingPassword = () => {
    if (checkingPasswordInputType == 'password') {
      setCheckingPasswordInputType('text');
      setCheckingPasswordShowIcon(<GrFormView />);
    } else {
      setCheckingPasswordInputType('password');
      setCheckingPasswordShowIcon(<GrFormViewHide />);
    }
  };

  const emailRegEx = /^[A-Za-z0-9]([-_.]?[A-Za-z0-9])*@[A-Za-z0-9]([-_.]?[A-Za-z0-9])*\.[A-Za-z]{2,3}$/;
  const nicknameRegEx = /^[A-Za-z0-9가-힣]{3,8}$/;
  const passwordRegEx = /^(?=.*[!@#$%^&*+=-])(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9]).{4,16}$/;
  // const phonenumberRegEx = /^01([0|1|6|7|8|9])-?(\d{3,4})-?(\d{4})$/;

  const checkEmail = () => {
    return emailRegEx.test(email) ? false : true;
  };
  const checkNickname = () => {
    return nicknameRegEx.test(nickname) ? false : true;
  };
  const checkPassword = () => {
    return passwordRegEx.test(password) ? false : true;
  };
  const checkCheckingpassword = () => {
    return password === checkingpassword && password.length > 4 ? false : true;
  };
  // const checkPhonenumber = () => {
  //   return phonenumberRegEx.test(phonenumber) ? false : true;
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
                onClick={() => {
                  setClickedNickname(true);
                }}
              ></TextInput>
            </div>
          </div>
          {checkNickname() && clickedNickname === true && (
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
          {/** -------------------------------------------------------- */}
          <div className='sign-up-input-container'>
            <div className='sign-up-icon-wrap'>
              <Icon className='sign-up-icon'>
                <RiLockPasswordFill />
              </Icon>
            </div>
            <Button
              className='absolute ml-84 mt-2 cursor-pointer p-0.5'
              onClick={handleShowCheckingPassword}
            >
              <IconContext.Provider value={{ size: '2rem' }}>
                <Icon className='sign-up-icon'>{checkingPasswordShowIcon}</Icon>
              </IconContext.Provider>
            </Button>
            <div className='sign-up-input-wrap'>
              <TextInput
                type={checkingPasswordInputType}
                className='sign-up-input'
                placeholder='비밀번호 확인'
                onChange={(ev) => {
                  handleChangeCheckingpassword(ev);
                }}
                onClick={() => {
                  setClickedCheckingpassword(true);
                }}
              ></TextInput>
            </div>
          </div>
          {checkCheckingpassword() && clickedCheckingpassword === true && (
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
                  setClickedPhonenumber(true);
                }}
              ></TextInput>
            </div>
          </div>
          {checkPhonenumber() && clickedPhonenumber === true && (
            <div className='mb-2 ml-200px text-sm text-red-500'>
              <span>전화번호를 입력해 주세요. 하이픈(-)을 포함해서요.</span>
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
