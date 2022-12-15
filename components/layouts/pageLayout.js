import Navbar from '@/components/navbar';

const PageLayout = ({ children }) => {
  return (
    <div className={'bg-grey min-h-screen'}>
      <Navbar/>
      {children}
    </div>
  );
};

export default PageLayout;
