import Image from 'next/image';

export default function loading() {
  return (
    <div className='flex min-h-screen flex-row justify-center'>
      <div className='flex min-h-screen flex-col justify-center'>
        <Image
          className='z-50 h-100px w-100px'
          src='/Spinner.svg'
          alt='NEXTEA Logo'
          width={200}
          height={200}
        />
      </div>
    </div>
  );
}
