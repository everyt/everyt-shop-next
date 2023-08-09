import NavBar from '@Components/NavBar';
import Header from '@Components/Header';
import Category from '@Components/Category';

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
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
` `;
