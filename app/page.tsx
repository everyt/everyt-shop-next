import Header from '@Components/Header';

export default function Home() {
  return (
    <div className='w-100vw h-screen bg-white flex flex-col justify-start content-center'>
      <div className='w-100vw flex flex-row justify-center'>
        <Header />
      </div>
      <div className='w-100vw h-screen bg-neutral-100'></div>
    </div>
  );
}
