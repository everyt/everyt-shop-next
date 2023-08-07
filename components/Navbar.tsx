import React from 'react';
import Button from '@Components/Button';

export default function Navbar() {
  return (
    <div className='navbar-wrapper'>
      <div className='navbar-container'>
        <Button className='login' link='/login'>
          로그인
        </Button>
        <Button className='sign-up' link='/sign-up'>
          회원가입
        </Button>
        <Button className='cart' link='/cart'>
          장바구니
        </Button>
        <Button className='help' link='/help'>
          고객센터
        </Button>
        <Button className='sell' link='/sell'>
          판매하기
        </Button>
        <Button className='language'>한국어</Button>
      </div>
    </div>
  );
}
