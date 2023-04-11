import { Outlet } from 'react-router-dom';

const RootLayout = () => {
  return (
    <main className="w-full">
      <Outlet />
    </main>
  );
};

export default RootLayout;
