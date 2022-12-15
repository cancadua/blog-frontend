import Navbar from '@/components/navbar';

const PageLayout = ({ children }) => {
  return (
    <div className={'bg-grey min-h-screen'}>
      <Navbar/>
      {children}
      <div className={'h-12'}/>
    </div>
  );
};

export default PageLayout;
