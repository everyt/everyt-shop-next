import NavBar from '@Components/Layout/NavBar';
import Header from '@Components/Layout/Header';
import Category from '@Components/Layout/Category';

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <div className='h-80px max-w-screen-1920'>
        <img src='/banner.png' />
      </div>
      <NavBar />
      <Header />
      <Category />
      {children}
    </>
  );
}
