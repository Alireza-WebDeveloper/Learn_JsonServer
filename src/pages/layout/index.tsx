import { Outlet } from 'react-router-dom';
import Header from '../../components/header';

const MainLayout = () => {
  return (
    <div className="flex flex-col h-screen bg-gray-50 dark:bg-black">
      <Header />
      <main className="mt-3 mx-auto container p-2 w-full h-full ">
        {<Outlet />}
      </main>
    </div>
  );
};

export default MainLayout;
